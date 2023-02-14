import styled from 'styled-components';

export const TextButtonSC = styled.button`
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  cursor: pointer;

  font-size: 1.6rem;
  color: ${({ theme }) => theme.pink_rgb};
`;