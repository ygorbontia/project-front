import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${ token }`;
      setData({ user, token });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível efetuar o login")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar
      }

      await api.put("/users", user);

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));

      setData({ user, token: data.token });

      alert("Perfil atualizado com sucesso");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível efetuar a alteração no perfil");
      }
    }
  }

  async function deleteProfile(id) {
    try {
      await api.delete("/users", id)

      localStorage.removeItem("@rocketmovies:user");
      localStorage.removeItem("@rocketmovies:token");

      setData({});
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível efetuar a exclusão da conta.");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketmovies:user");
    const token = localStorage.getItem("@rocketmovies:token");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${ token }`;

      setData({ 
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut, updateProfile, deleteProfile }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }