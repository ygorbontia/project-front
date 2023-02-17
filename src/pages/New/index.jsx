import { useState } from 'react';

import { NewSC } from './style';

import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton';
import { Input } from '../../components/Input';
import { MovieTag } from '../../components/MovieTag'
import { Button } from '../../components/Button'

export function New() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);

    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
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
          <Input type="text" placeholder="Título" />
          <Input type="number" placeholder="Sua nota (de 0 a 5)" min="0" max="5" />
        </div>

        <textarea placeholder="Observações"></textarea>

        <div className="tags">
          <h3>Marcadores</h3>

          <div>
            {
              tags.map((tag,index) => (
                <MovieTag 
                  key={ String( index )} 
                  title={ tag }
                  onClick={ () => handleRemoveTag(tag) }
                />  
              ))
            }

            <MovieTag
              isNew
              placeholder="Novo marcador"
              value={ newTag }
              onChange={ event => setNewTag( event.target.value ) }
              onClick={ handleAddTag }
            />
          </div>
        </div>

        <div className="buttons">
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" />
        </div>          
      </form>
    </NewSC>
  )
}