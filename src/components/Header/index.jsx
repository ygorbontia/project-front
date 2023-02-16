import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar-placeholder.svg';

import { HeaderSC, ProfileSC } from './style';

import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../Input';

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const avatar = user.avatar ? `${ api.defaults.baseURL }/files/${ user.avatar }` : avatarPlaceholder;

  function handleSignOut() {
    signOut();

    navigate("/");
  }

  return (
    <HeaderSC>
      <Link to="/">RocketMovies</Link>

      <Input type="text" placeholder="Pesquisar pelo título" />

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