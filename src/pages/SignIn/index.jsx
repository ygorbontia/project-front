import { FiMail, FiLock } from 'react-icons/fi';
import { SignInSC, FormSC, BackgroundSC } from './style';

import { UserInput } from '../../componentes/UserInput';

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
        </form>
      </FormSC>

      <BackgroundSC />
    </SignInSC>
  )
}