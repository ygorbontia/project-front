import styled from 'styled-components';

export const ProfileSC = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 14.4rem auto;
  grid-template-areas:
    "header"
    "content";

  text-align: center;

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

  > main {
    width: 34rem;
    margin: 0 auto 6.4rem;

    > form {
      margin-bottom: 6.4rem;

      > div:nth-child(3) {
        margin-bottom: 2.4rem;
      }
      > div:nth-child(5) {
        margin-bottom: 2.4rem;
      }

      button {
        border: none;

        cursor: pointer;
      }
    }
    
    > button {
      background-color: transparent;
      border: none;
      margin-bottom: 8.5rem;
  
      cursor: pointer;
  
      font-size: 1.6rem;
      color: ${({ theme }) => theme.pink_rgb};
    }
  }

`;

export const UserAvatarSC = styled.div`
  width: 18.6rem;
  height: 18.6rem;
  margin: -9.3rem auto 6.4rem;

  position: relative;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border: none;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.pink_rgb};
    border: none;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 1rem;
    bottom: .4rem;


    cursor: pointer;

    > svg {
      color: ${({ theme }) => theme.dark_200};
    }

    input {
      display: none;
    }
  }
`;