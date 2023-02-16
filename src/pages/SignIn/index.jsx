import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { FiMail, FiLock } from 'react-icons/fi';
import { SignInSC, FormSC, BackgroundSC } from './style';

import { Link } from 'react-router-dom';

import { UserInput } from '../../components/UserInput';
import { Button } from '../../components/Button';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <SignInSC>
      <FormSC>
        <div>
          <h1>RocketMovies</h1>

          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>

        <form>
          <h2>Faça seu login</h2>
          
          <UserInput icon={ FiMail } type="email" placeholder="E-mail" onChange={ event => setEmail( event.target.value ) } />
          <UserInput icon={ FiLock } type="password" placeholder="Senha" onChange={ event => setPassword( event.target.value ) } />

          <Button type="button" title="Entrar" onClick={ handleSignIn } />
        </form>

        <Link to="/register">
          Criar conta
        </Link>
      </FormSC>

      <BackgroundSC />
    </SignInSC>
  )
}