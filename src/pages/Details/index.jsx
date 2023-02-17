import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

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

  const avatar = user.avatar ? `${ api.defaults.baseURL }/files/${ user.avatar }` : avatarPlaceholder;

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

          <div className="tags">
            <DetailsTag
              title="Ficção Científica"
            />
            <DetailsTag
              title="Drama"
            />
            <DetailsTag
              title="Família"
            />
          </div>

          <div className="description">
            <p>{ movie.description }</p>
          </div>
        </section>
      </main>
    </DetailsSC>
  )
}