import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { ProfileSC, UserAvatarSC } from './style';

import { TextButton } from '../../components/TextButton';
import { UserInput } from '../../components/UserInput';
import { Button } from '../../components/Button';

export function Profile() {
  return (
    <ProfileSC>
      <header>
        <TextButton title="Voltar" />
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

          <UserInput icon={ FiUser } type="text" placeholder="Nome" />
          <UserInput icon={ FiMail } type="email" placeholder="E-mail" />
          <UserInput icon={ FiLock } type="password" placeholder="Senha atual" />
          <UserInput icon={ FiLock } type="password" placeholder="Nova senha" />

          <Button title="Salvar" />
        </form>
        
        <button>
          Excluir conta
        </button>
      </main>

    </ProfileSC>
  )
}