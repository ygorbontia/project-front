import styled from 'styled-components';

export const InputSC = styled.input`
  width: 100%;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.dark_300};
  border: none;
  border-radius: 10px;
  padding: 1.9rem 2.4rem;
 
  font-size: 1.6rem;
  color: ${({ theme }) => theme.light_100};

  &::placeholder {
    color: ${({ theme }) => theme.light_500};
  }
`;