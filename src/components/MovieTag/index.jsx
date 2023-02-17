import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

import { MovieTagSC } from './style';

export function MovieTag({ title, isNew = false, onClick, ...rest}) {
  return (
    <MovieTagSC isNew={ isNew }>
      <input type="text" value={ title } readOnly={ !isNew } { ...rest } />

      <button type="button" onClick={ onClick } { ...rest }>
        { isNew ? <AiOutlinePlus size={ 20 } /> : <AiOutlineClose size={ 20 } /> }
      </button>
    </MovieTagSC>
  )
}