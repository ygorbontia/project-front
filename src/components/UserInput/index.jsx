import { UserInputSC } from './style';

export function UserInput({ icon: Icon, ...rest}) {
  return (
    <UserInputSC>
      <Icon size={ 20 } />

      <input { ...rest } />
    </UserInputSC>
  )
}