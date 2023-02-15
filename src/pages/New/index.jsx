import { NewSC } from './style';

import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton';
import { Input } from '../../components/Input';
import { MovieTag } from '../../components/MovieTag'
import { Button } from '../../components/Button'

export function New() {
  return (
    <NewSC>
      <Header />

      <nav>
        <TextButton title="Voltar" />
      </nav>

      <form>
        <h1>Novo filme</h1>

        <div>
          <Input type="text" placeholder="Título" />
          <Input type="number" placeholder="Sua nota (de 0 a 5)" min="0" max="5" />
        </div>

        <textarea placeholder="Observações"></textarea>

        <div>
          <h3>Marcadores</h3>

          <div>
            <MovieTag
              title="React"
            />

            <MovieTag
              isNew
              placeholder="Novo marcador"
            />
          </div>
        </div>

        <div>
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" />
        </div>          
      </form>
    </NewSC>
  )
}