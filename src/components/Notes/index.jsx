import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { NotesSC, TagSC } from './style';

export function Notes({ title, description, rating, tags, ...rest }) {
  return (
    <NotesSC { ...rest }>
      <div>
        <h2>{ title }</h2>

        <div className="rating">
          <AiFillStar size={ 16 } />
          <AiFillStar size={ 16 } />
          <AiFillStar size={ 16 } />
          <AiFillStar size={ 16 } />
          <AiOutlineStar size={ 16 } />
        </div>
      </div>

      {
        description &&
        <p>{ description }</p>
      }

      {
        tags.length > 0 &&
        <footer>
          {
            tags.map(tag => <TagSC key={ tag.id }>{ tag.name }</TagSC>)
          }
        </footer>
      }
    </NotesSC>
  )
}