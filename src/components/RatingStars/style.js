import styled from 'styled-components';

export const RatingStarsSC = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .6rem;

  color: ${({ theme }) => theme.pink_rgb};
`;