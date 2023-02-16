import { useAuth } from '../../hooks/auth';

import { HeaderSC, ProfileSC } from './style';

import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../Input';

export function Header() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

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
            <Link to="/profile">Ygor Bontia</Link>
          </strong>
          <span onClick={ handleSignOut }>sair</span>
        </div>

        <Link to="/profile">
          <img src="https://github.com/ygorbontia.png" alt="" />
        </Link>
      </ProfileSC>
    </HeaderSC>
  )
}