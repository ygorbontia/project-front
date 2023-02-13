import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { SignUpSC, FormSC, BackgroundSC } from './style';

import { UserInput } from '../../componentes/UserInput';
import { Button } from '../../componentes/Button';

export function SignUp() {
  return (
    <SignUpSC>
      <FormSC>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Crie sua conta</h2>
        </div>

        <form>
          <UserInput icon={ FiUser } type="text" placeholder="Nome" />
          <UserInput icon={ FiMail } type="email" placeholder="E-mail" />
          <UserInput icon={ FiLock } type="password" placeholder="Senha" />
        </form>

        <a href="#">
          <AiOutlineArrowLeft />
          Voltar para o login
        </a>
      </FormSC>

      <BackgroundSC />
    </SignUpSC>
  )
}