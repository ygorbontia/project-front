import styled from 'styled-components';

import backgroundImage from '../../assets/background.jpg';

export const SignUpSC = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

export const FormSC = styled.div`
  width: 34.2rem;
  margin: 0 14.2rem;

  align-self: center;

  display: grid;
  gap: 4.8rem;

  > div {
    h1 {
      font-size: 4.8rem;
      color: ${({ theme }) => theme.pink_rgb};
    }

    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.light_300};
    }
  }

  > form {
    h2 {
      margin-bottom: 4.8rem;

      font-weight: 500;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.light_100};
    }

    button {
      border: none;
      margin-top: 2.4rem;

      outline: none;
    }
  }

  > a {
    margin: 0 auto;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.pink_rgb};

    cursor: pointer;
  }
`;

export const BackgroundSC = styled.div`
  flex: 1;

  background-image: url( ${ backgroundImage } );
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  filter: brightness(.3);
`;