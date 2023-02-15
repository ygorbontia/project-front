import { FiMail, FiLock } from 'react-icons/fi';
import { SignInSC, FormSC, BackgroundSC } from './style';

import { Link } from 'react-router-dom';

import { UserInput } from '../../components/UserInput';
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <SignInSC>
      <FormSC>
        <div>
          <h1>RocketMovies</h1>

          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>

        <form>
          <h2>Faça seu login</h2>
          
          <UserInput icon={ FiMail } type="email" placeholder="E-mail" />
          <UserInput icon={ FiLock } type="password" placeholder="Senha" />

          <Button type="button" title="Entrar" />
        </form>

        <Link to="/register">
          Criar conta
        </Link>
      </FormSC>

      <BackgroundSC />
    </SignInSC>
  )
}