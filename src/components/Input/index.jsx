import { InputSC } from './style';

export function Input( title, ...rest) {
  return (
    <InputSC placeholder={ title } { ...rest } />
  )
}