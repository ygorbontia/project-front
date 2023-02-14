import { HeaderSC, ProfileSC } from './style';

import { Link } from 'react-router-dom';

import { Input } from '../Input';

export function Header() {
  return (
    <HeaderSC>
      <h1>RocketMovies</h1>

      <Input type="text" placeholder="Pesquisar pelo título" />

      <ProfileSC>
        <div>
          <strong>Ygor Bontia</strong>
          <Link>sair</Link>
        </div>

        <img src="https://github.com/ygorbontia.png" alt="" />
      </ProfileSC>
    </HeaderSC>
  )
}