import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.dark_500};
  }

  body, input, textarea, button, a {
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;

    outline: none;
  }

  a {
    text-decoration: none;
  }
`;