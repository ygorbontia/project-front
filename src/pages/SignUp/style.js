import styled from 'styled-components';

import backgroundImage from '../../assets/background.jpg';

export const SignUpSC = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

export const FormSC = styled.div`

`;

export const BackgroundSC = styled.div`
  flex: 1;

  background-image: url( ${ backgroundImage } );
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  filter: brightness(.3);
`;