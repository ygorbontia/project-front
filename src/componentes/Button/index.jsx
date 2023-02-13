import { ButtonSC } from './style';

export function Button({ title, ...rest }) {
  return (
    <ButtonSC { ...rest }>
      { title }
    </ButtonSC>
  )
}