import styled from 'styled-components';

export const DetailsSC = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: "content";
    
    width: 113.7rem;
    margin: 4rem auto 0;
    padding-bottom: 15.6rem;
    
    > button {
      margin-bottom: 2.4rem;
    }
    
    > section {
      width: 100%;

      overflow-y: auto;

      display: grid;
      gap: 4rem;
    }
  }
`;