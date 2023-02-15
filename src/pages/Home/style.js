import styled from 'styled-components';

export const HomeSC = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 8.5rem;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
    "header"
    "content";
  
  > .movies {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 113.7rem;
    margin: 4.7rem auto 3.7rem;

    h1 {
      font-weight: 400;
      font-size: 3.2rem;
      color: ${({ theme }) => theme.white};
    }

    > a {
      height: 4.8rem;
      background-color: ${({ theme }) => theme.pink_rgb};
      border: none;
      border-radius: 8px;
      padding: 1.35rem 3.2rem;
      
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .8rem;

      cursor: pointer;
      
      font-weight: 400;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.dark_500};
    }
  }
`;

export const MovieNotesSC = styled.div`
  grid-area: "content";

  width: 113.7rem;
  margin: 0 auto;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.pink_rgb};
    border-radius: 8px;
  }
`;