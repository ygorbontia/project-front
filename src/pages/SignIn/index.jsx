import { FiMail, FiLock } from 'react-icons/fi';
import { SignInSC, FormSC, BackgroundSC } from './style';

import { UserInput } from '../../componentes/UserInput';
import { Button } from '../../componentes/Button';

export function SignIn() {
  return (
    <SignInSC>
      <FormSC>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          
          <h2>Faça seu login</h2>
        </div>

        <form>
          <UserInput icon={ FiMail } type="email" placeholder="E-mail" />
          <UserInput icon={ FiLock } type="password" placeholder="Senha" />

          <Button type="button" title="Entrar" />
        </form>

        <a href="#">
          Criar conta
        </a>
      </FormSC>

      <BackgroundSC />
    </SignInSC>
  )
}