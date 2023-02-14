import styled from 'styled-components';

export const HeaderSC = styled.div`
  width: 100%;
  height: 11.6rem;
  border-bottom: solid 1px ${({ theme }) => theme.dark_100};
  padding: 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  gap: 6.4rem;

  > h1 {
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.pink_rgb};
  }
`;

export const ProfileSC = styled.div`
  display: flex;
  align-items: center;
  gap: .9rem;
  
  > div {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    
    > strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.light_100};
      text-align: right;
    }

    > a {
      width: fit-content;
      align-self: flex-end;

      font-weight: 400;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.light_500};

      cursor: pointer;
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border: solid 1px ${({ theme }) => theme.dark_100};
    border-radius: 50%;
  }
`;