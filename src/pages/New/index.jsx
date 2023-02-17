import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { NewSC } from './style';

import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton';
import { Input } from '../../components/Input';
import { MovieTag } from '../../components/MovieTag'
import { Button } from '../../components/Button'

export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);

    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleCreateNote() {
    try {
      if (newTag) {
        return alert("Você possui marcadores que não foram adicionados, remova ou adicione o item antes de criar a nota");
      }

      if (tags.length !== 0) {
        await api.post("/notes", { title, rating, description, tags })
      } else {
        await api.post("/notes", { title, rating, description })
      }

      alert("Nota criada com sucesso.");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível criar a nota")
      }
    }
  }

  function handleDeleteNote() {
    const confirmDelete = confirm("Tem certeza que deseja excluir essa nota?");

    if (confirmDelete) {
      setTitle("");
      setRating("");
      setDescription("");
      setTags([]);
      setNewTag("");
  
      alert("Nota excluída com sucesso");
      navigate("/");
    }
  }

  return (
    <NewSC>
      <Header />

      <nav>
        <TextButton title="Voltar" to={ -1 } />
      </nav>

      <form>
        <h1>Novo filme</h1>

        <div>
          <Input type="text" placeholder="Título" onChange={ event => setTitle( event.target.value ) } />
          <Input type="number" placeholder="Sua nota (de 0 a 5)" min="0" max="5" onChange={ event => setRating( event.target.value ) } />
        </div>

        <textarea placeholder="Observações" onChange={ event => setDescription( event.target.value ) }></textarea>

        <div className="tags">
          <h3>Marcadores</h3>

          <div>
            <MovieTag
              isNew
              placeholder="Novo marcador"
              value={ newTag }
              onChange={ event => setNewTag( event.target.value ) }
              onClick={ handleAddTag }
            />

            {
              tags.map((tag,index) => (
                <MovieTag 
                  key={ String( index )} 
                  title={ tag }
                  onClick={ () => handleRemoveTag(tag) }
                />  
              ))
            }
          </div>
        </div>

        <div className="buttons">
          <Button type="button" title="Excluir filme" onClick={ handleDeleteNote } />
          <Button type="button" title="Salvar alterações" onClick={ handleCreateNote } />
        </div>          
      </form>
    </NewSC>
  )
}