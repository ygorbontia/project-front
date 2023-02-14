import { AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { HomeSC, MovieNotesSC } from './style';

import { Header } from '../../components/Header';

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
            title=""
            rating="5"
            description=""
            tags={[ "Ficção Científica", "Drama, Família" ]}
          />
          <div>
            <h2>Interstellar</h2>

            <div className="rating">
              <AiFillStar size={ 20 } />
              <AiFillStar size={ 20 } />
              <AiFillStar size={ 20 } />
              <AiFillStar size={ 20 } />
              <AiOutlineStar size={ 20 } />
            </div>

            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de
            </p>

            <div className="tags">
              <span>Ficção Científica</span>
              <span>Drama</span>
              <span>Família</span>
            </div>
          </div>
          
          <div>
            <h2>Interstellar</h2>

            <div className="rating">
              <AiFillStar size={ 20 } />
              <AiFillStar size={ 20 } />
              <AiFillStar size={ 20 } />
              <AiFillStar size={ 20 } />
              <AiOutlineStar size={ 20 } />
            </div>

            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de
            </p>

            <div className="tags">
              <span>Ficção Científica</span>
              <span>Drama</span>
              <span>Família</span>
            </div>
          </div>
          
          <div>
            <h2>Interstellar</h2>

            <div className="rating">
              <AiFillStar size={ 20 } />
              <AiFillStar size={ 20 } />
              <AiFillStar size={ 20 } />
              <AiFillStar size={ 20 } />
              <AiOutlineStar size={ 20 } />
            </div>

            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de
            </p>

            <div className="tags">
              <span>Ficção Científica</span>
              <span>Drama</span>
              <span>Família</span>
            </div>
          </div>
          
          <div>
            <h2>Interstellar</h2>

            <div className="rating">
              <AiFillStar size={ 20 } />
              <AiFillStar size={ 20 } />
              <AiFillStar size={ 20 } />
              <AiFillStar size={ 20 } />
              <AiOutlineStar size={ 20 } />
            </div>

            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de
            </p>

            <div className="tags">
              <span>Ficção Científica</span>
              <span>Drama</span>
              <span>Família</span>
            </div>
          </div>
        </MovieNotesSC>
      </main>
    </HomeSC>
  )
}