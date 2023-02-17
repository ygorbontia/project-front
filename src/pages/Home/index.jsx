import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { AiOutlinePlus } from 'react-icons/ai'

import { Link } from 'react-router-dom';

import { HomeSC, MovieNotesSC } from './style';

import { Header } from '../../components/Header';
import { Notes } from '../../components/Notes';

export function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get("/notes");

      setNotes(response.data.notes);
    }

    fetchNotes();
  }, [])

  return (
    <HomeSC>
      <Header />

      <div className="movies">
        <h1>Meus filmes</h1>

        <Link to="/new">
          <AiOutlinePlus size={ 20 } />
          Adicionar filme
        </Link>
      </div>

      { 
        notes &&
        <MovieNotesSC>
          {
            notes.map(note => (
              <Notes to={`/details/${ note.id }`}
                key={ String(note.id) }
                title={ note.title }
                rating={ note.rating }
                description={ note.description }
                tags={ note.tags }
              />
            ))
          }
        </MovieNotesSC>
      }
    </HomeSC>
  )
}