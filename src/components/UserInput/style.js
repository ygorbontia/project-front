import styled from 'styled-components';

export const UserInputSC = styled.div`
  width: 100%;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.dark_300};
  border: none;
  border-radius: 10px;
  margin-bottom: .8rem;
  padding: 0 1.2rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  > svg {
    color: ${({ theme }) => theme.light_500};
  }

  > input {
    background-color: transparent;
    border: none;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.light_100};

    &::placeholder {
      color: ${({ theme }) => theme.light_500};
    }
  }
`;