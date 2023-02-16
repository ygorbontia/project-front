import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { ProfileSC, UserAvatarSC } from './style';

import { TextButton } from '../../components/TextButton';
import { UserInput } from '../../components/UserInput';
import { Button } from '../../components/Button';

export function Profile() {
  const { user } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");


  return (
    <ProfileSC>
      <header>
        <TextButton title="Voltar" to={ -1 } />
      </header>

      <main>
        <form>
          <UserAvatarSC>
            <img src="https://github.com/ygorbontia.png" alt="" />

            <label>
              <FiCamera size={ 20 } />
              <input type="file" />
            </label>
          </UserAvatarSC>

          <UserInput icon={ FiUser } value={ name } type="text" placeholder="Nome" onChange={ event => setName( event.target.value ) } />
          <UserInput icon={ FiMail } value={ email } type="email" placeholder="E-mail" onChange={ event => setEmail( event.target.value ) } />
          <UserInput icon={ FiLock } type="password" placeholder="Senha atual" onChange={ event => setCurrentPassword( event.target.value ) } />
          <UserInput icon={ FiLock } type="password" placeholder="Nova senha" onChange={ event => setNewPassword( event.target.value ) } />

          <Button title="Salvar" />
        </form>
        
        <button>
          Excluir conta
        </button>
      </main>

    </ProfileSC>
  )
}