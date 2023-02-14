import styled from 'styled-components';

export const NotesSC = styled.div`
  width: 100%;
  height: 22.2rem;
  background-color: ${({ theme }) => theme.pink_rgba};
  border: none;
  border-radius: 16px;
  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > div {
    > h2 {
      margin-bottom: .8rem;

      font-size: 2.4rem;
      color: ${({ theme }) => theme.light_100};
    }

    > div {
      display: flex;
      flex-direction: row;
      gap: .6rem;

      color: ${({ theme }) => theme.pink_rgb};
    }
  }

  > p {
    width: 100%;
    
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.light_400};
  }

  > footer {
    display: flex;
    flex-direction: row;
    gap: .8rem;
  }
`;

export const TagSC = styled.span`
  background-color: ${({ theme }) => theme.dark_200};
  border: none;
  border-radius: 8px;
  padding: .5rem 1.6rem;
  
  font-size: 1.2rem;
  color: ${({ theme }) => theme.light_200};
`;