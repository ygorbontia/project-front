import { AiOutlinePlus } from 'react-icons/ai'

import { HomeSC, MovieNotesSC } from './style';

import { Header } from '../../components/Header';

import { Notes } from '../../components/Notes';

export function Home() {
  return (
    <HomeSC>
      <Header />

      <main>
        <div className="movies">
          <h1>Meus filmes</h1>

          <button>
            <AiOutlinePlus size={ 20 } />
            Adicionar filme
          </button>
        </div>

        <MovieNotesSC>
          <Notes 
            title="Interstellar"
            rating="5"
            description='Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de'
            tags={[ 
              { id: 1, name: "Ficção Científica"},
              { id: 2, name: "Drama"},
              { id: 3, name: "Família"}
            ]}
          />
          <Notes 
            title="Interstellar"
            rating="5"
            description='Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de'
            tags={[ 
              { id: 1, name: "Ficção Científica"},
              { id: 2, name: "Drama"},
              { id: 3, name: "Família"}
            ]}
          />
          <Notes 
            title="Interstellar"
            rating="5"
            description='Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de'
            tags={[ 
              { id: 1, name: "Ficção Científica"},
              { id: 2, name: "Drama"},
              { id: 3, name: "Família"}
            ]}
          />
        </MovieNotesSC>
      </main>
    </HomeSC>
  )
}