import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar-placeholder.svg';

import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import { ProfileSC, UserAvatarSC } from './style';

import { TextButton } from '../../components/TextButton';
import { UserInput } from '../../components/UserInput';
import { Button } from '../../components/Button';

export function Profile() {
  const { user, updateProfile, deleteProfile } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  const avatarURL = user.avatar ? `${ api.defaults.baseURL }/files/${ user.avatar }` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      current_password: currentPassword,
      new_password: newPassword
    }

    const userUpdated = Object.assign(user, updated);

    updateProfile({ user: userUpdated, avatarFile })
  }

  function handleUpdateAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)
  }

  function handleDelete() {
    const confirmDelete = confirm("Tem certeza que deseja excluir sua conta?");
    if (confirmDelete) {
      deleteProfile(user.id);

      alert("Sua conta foi excluída com sucesso");
      navigate("/");
    }
  }

  return (
    <ProfileSC>
      <header>
        <TextButton title="Voltar" to={ -1 } />
      </header>

      <main>
        <form>
          <UserAvatarSC>
            <img src={ avatar } alt="" />

            <label>
              <FiCamera size={ 20 } />
              <input type="file" onChange={ handleUpdateAvatar } />
            </label>
          </UserAvatarSC>

          <UserInput icon={ FiUser } value={ name } type="text" placeholder="Nome" onChange={ event => setName( event.target.value ) } />
          <UserInput icon={ FiMail } value={ email } type="email" placeholder="E-mail" onChange={ event => setEmail( event.target.value ) } />
          <UserInput icon={ FiLock } type="password" placeholder="Senha atual" onChange={ event => setCurrentPassword( event.target.value ) } />
          <UserInput icon={ FiLock } type="password" placeholder="Nova senha" onChange={ event => setNewPassword( event.target.value ) } />

          <Button type="button" title="Salvar" onClick={ handleUpdate } />
        </form>
        
        <button type="button" onClick={ handleDelete }>
          Excluir conta
        </button>
      </main>

    </ProfileSC>
  )
}