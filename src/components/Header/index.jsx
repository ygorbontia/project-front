import { HeaderSC, ProfileSC } from './style';

import { Link } from 'react-router-dom';

import { Input } from '../Input';

export function Header() {
  return (
    <HeaderSC>
      <Link to="/">RocketMovies</Link>

      <Input type="text" placeholder="Pesquisar pelo título" />

      <ProfileSC>
        <div>
          <strong>
            <Link to="/profile">Ygor Bontia</Link>
          </strong>
          <Link to="/">sair</Link>
        </div>

        <Link to="/profile">
          <img src="https://github.com/ygorbontia.png" alt="" />
        </Link>
      </ProfileSC>
    </HeaderSC>
  )
}