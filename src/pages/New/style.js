import styled from 'styled-components';

export const NewSC = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 8.5rem;
  
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "nav"
    "content";

  > nav {
    grid-area: "nav";

    width: 113.7rem;
    margin: 4rem auto 2.4rem;
  }

  > form {
    grid-area: "content";
    overflow-y: auto;

    width: 113.7rem;
    margin: 0 auto;

    display: grid;
    gap: 4rem;

    h1 {
      font-weight: 500;
      font-size: 3.6rem;
      color: ${({ theme }) => theme.light_100};
    }

    div:nth-child(2) {
      display: flex;
      gap: 4rem;
    }

    textarea {
      width: 100%;
      height: 27.4rem;
      background-color: ${({ theme }) => theme.dark_300};
      border: none;
      border-radius: 10px;
      padding: 1.9rem 1.6rem;

      font-size: 1.6rem;
      color: ${({ theme }) => theme.light_100};

      &::placeholder {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.light_500};
      }
    }
  }
`;