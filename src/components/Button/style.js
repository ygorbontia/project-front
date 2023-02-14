import styled from 'styled-components';

export const ButtonSC = styled.button`
  width: 100%;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.pink_rgb};
  border-radius: 10px;

  font-weight: 500;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.dark_200};
`;