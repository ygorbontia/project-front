import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

import { MovieTagSC } from './style';

export function MovieTag({ title, isNew, ...rest}) {
  return (
    <MovieTagSC isNew={ isNew }>
      <input value={ title } readOnly={ !isNew } { ...rest } />
      <button { ...rest }>
        { isNew ? <AiOutlinePlus size={ 20 } /> : <AiOutlineClose size={ 20 } /> }
      </button>
    </MovieTagSC>
  )
}