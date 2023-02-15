import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { SignUpSC, FormSC, BackgroundSC } from './style';

import { UserInput } from '../../components/UserInput';
import { Button } from '../../components/Button';
import { TextButton } from '../../components/TextButton';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Por favor, preencha todas as informações.");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso.");
        
        navigate("/");
      })
      .catch( error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível efetuar o cadastro");
        }
      })
  }

  return (
    <SignUpSC>
      <FormSC>
        <div>
          <h1>RocketMovies</h1>

          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>

        <form>
          <h2>Crie sua conta</h2>

          <UserInput icon={ FiUser } type="text" placeholder="Nome" onChange={ event => setName( event.target.value ) } />
          <UserInput icon={ FiMail } type="email" placeholder="E-mail" onChange={ event => setEmail( event.target.value ) } />
          <UserInput icon={ FiLock } type="password" placeholder="Senha" onChange={ event => setPassword( event.target.value ) } />

          <Button type="button" title="Cadastrar" onClick={ handleSignUp } />
        </form>

        <TextButton title="Voltar para o login" to={ -1 } />
      </FormSC>

      <BackgroundSC />
    </SignUpSC>
  )
}