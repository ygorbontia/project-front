import { HeaderSC, ProfileSC } from './style';

import { Input } from '../Input';

export function Header() {
  return (
    <HeaderSC>
      <h1>RocketMovies</h1>

      <Input type="search" title="Pesquisar pelo título" />

      <ProfileSC>
        <div>
          <strong>Ygor Bontia</strong>
          <span>Sair</span>
        </div>

        <img src="https://github.com/ygorbontia.png" alt="" />
      </ProfileSC>
    </HeaderSC>
  )
}