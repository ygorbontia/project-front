import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar-placeholder.svg';

import { HeaderSC, ProfileSC } from './style';

import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../Input';

export function Header() {
  const { signOut, user } = useAuth();
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();
  const avatar = user.avatar ? `${ api.defaults.baseURL }/files/${ user.avatar }` : avatarPlaceholder;

  function handleSignOut() {
    signOut();

    navigate("/");
  }

  async function searchNotes() {
    if (api.defaults.baseURL !== 'http://localhost:5173/') {
      navigate("/");
    }

    const response = await api.get(`/notes?title=${ search }`)
    
    console.log(response.data);
    setNotes(response.data);
  }

  return (
    <HeaderSC>
      <Link to="/">RocketMovies</Link>

      <Input 
        type="text" 
        placeholder="Pesquisar pelo título" 
        onChange={ event => setSearch( event.target.value ) } 
        onKeyDown={ event => {
          if (event.key == 'Enter') {
            searchNotes();
          }
        }}
      />

      <ProfileSC>
        <div>
          <strong>
            <Link to="/profile">{ user.name }</Link>
          </strong>
          <span onClick={ handleSignOut }>sair</span>
        </div>

        <Link to="/profile">
          <img src={ avatar } alt="" />
        </Link>
      </ProfileSC>
    </HeaderSC>
  )
}