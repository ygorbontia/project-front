import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

import avatarPlaceholder from '../../assets/avatar-placeholder.svg';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { CiClock2 } from 'react-icons/ci';

import { DetailsSC } from './style';

import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton';
import { DetailsTag } from '../../components/DetailsTag';

export function Details() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const avatar = user.avatar ? `${ api.defaults.baseURL }/files/${ user.avatar }` : avatarPlaceholder;

  async function handleDeleteNote() {
    const confirmDelete = confirm("Tem certeza que deseja remover essa nota?");
    if (confirmDelete) {
      try {
        await api.delete(`/notes/${ id }`);
      
        alert("A nota foi excluída com sucesso.");
        navigate("/");
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível excluir essa nota.");
        }
      }
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${ id }`);

      setMovie(response.data);
    }

    fetchMovie();
  }, []);

  return (
    <DetailsSC>
      <Header />

      <nav>
        <TextButton title="Voltar" to={ -1 } />

        <button onClick={ handleDeleteNote }>
          Excluir nota
        </button>
      </nav>

      <main>
        <section>
          <div className="movie-and-author">
            <div className="movie">
              <h1>{ movie.title }</h1>

              <div className="rating">
                <AiFillStar size={ 20 } />
                <AiFillStar size={ 20 } />
                <AiFillStar size={ 20 } />
                <AiFillStar size={ 20 } />
                <AiOutlineStar size={ 20 } />
              </div>
            </div>

            <div className="author-and-time">
              <div className="author">
                <img src={ avatar } alt="" />

                <p>Por { user.name }</p>
              </div>

              <div className="time">
                <CiClock2 size={ 16 } />

                <p>15/02/23 às 14:36</p>
              </div>
            </div>
          </div>

          {
            movie.tags &&
            <div className="tags">
              {
                movie.tags.map(tag => (
                  <DetailsTag
                    key={ String(tag.id) }
                    title={ tag.name }
                  />
                ))
              }
            </div>
          }

          <div className="description">
            <p>{ movie.description }</p>
          </div>
        </section>
      </main>
    </DetailsSC>
  )
}