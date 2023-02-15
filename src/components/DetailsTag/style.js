import styled from 'styled-components';

export const DetailsTagSC = styled.span`
  background-color: ${({ theme }) => theme.dark_400};
  border: none;
  border-radius: 8px;
  padding: .8rem 1.6rem;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.light_200};
`;