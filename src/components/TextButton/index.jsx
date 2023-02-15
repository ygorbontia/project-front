import { HiOutlineArrowLeft } from 'react-icons/hi';

import { TextButtonSC } from './style';

export function TextButton({ title, ...rest }) {
  return (
    <TextButtonSC { ...rest }>
      <HiOutlineArrowLeft size={ 20 } />
      { title }
    </TextButtonSC>
  )
}