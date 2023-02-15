import styled from 'styled-components';

export const MovieTagSC = styled.div`
  height: 5.6rem;
  background-color: ${({ isNew, theme }) => isNew ? "transparent" : theme.dark_300};
  border: ${({ isNew, theme }) => isNew ? `dashed 2px ${ theme.light_500 }` : "none"};
  border-radius: 10px;
  padding: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  > input {
    background-color: transparent;
    border: none;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.white};

    &::placeholder {
      color: ${({ theme }) => theme.light_500};
    }
  }

  > button {
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    
    cursor: pointer;
    
    > svg {
      color: ${({ theme }) => theme.pink_rgb};
    }
  }
`;