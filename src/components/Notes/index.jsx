import { NotesSC, TagSC } from './style';

import { RatingStars } from '../RatingStars';

export function Notes({ title, description, rating, tags, ...rest }) {
  return (
    <NotesSC { ...rest }>
      <div>
        <h2>{ title }</h2>

        <RatingStars rating={ rating } />
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