import { HiOutlineArrowLeft } from 'react-icons/hi';

import { TextButtonSC } from './style';

export function TextButton({ title }) {
  return (
    <TextButtonSC>
      <HiOutlineArrowLeft size={ 20 } />
      { title }
    </TextButtonSC>
  )
}