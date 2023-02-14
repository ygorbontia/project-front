import { InputSC } from './style';

export function Input( ...rest ) {
  return (
    <InputSC placeholder={ title } { ...rest } />
  )
}