import styled from 'styled-components';

export const ProfileSC = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 14.4rem auto;
  grid-template-areas:
    "header"
    "content";

  > header {
    grid-area: "header";

    width: 100%;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.pink_rgba};
    border: none;
    padding: 0 14.4rem;

    display: flex;
    align-items: center;
  }
`;

export const UserAvatarSC = styled.div`

`;