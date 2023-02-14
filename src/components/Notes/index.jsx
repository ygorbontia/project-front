import { NotesSC, TagSC } from './style';

export function Notes({ title, description, rating, tags}) {
  return (
    <NotesSC>
      <h2>{ title }</h2>

      <div className="rating">
        <AiFillStar size={ 20 } />
        <AiFillStar size={ 20 } />
        <AiFillStar size={ 20 } />
        <AiFillStar size={ 20 } />
        <AiOutlineStar size={ 20 } />
      </div>

      <p>{ description }</p>

      {
        tags &&
        <footer>
          {
            tags.map(tag => <TagSC key={ tag.id }>{ tag.name }</TagSC>)
          }
        </footer>
      }
    </NotesSC>
  )
}