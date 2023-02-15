import styled from 'styled-components';

export const DetailsSC = styled.div`
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

  > main {
    grid-area: "content";
    overflow-y: auto;
    
    width: 113.7rem;
    margin: 0 auto;

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
    
    > section {
      width: 100%;

      overflow-y: auto;

      display: grid;
      gap: 4rem;

      .movie-and-author {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        .movie {
          display: flex;
          align-items: center;
          gap: 2rem;

          h1 {
            font-weight: 500;
            font-size: 3.6rem;
            color: ${({ theme }) => theme.light_100};
          }

          .rating {
            display: flex;
            gap: 1rem;

            height: 2rem;
            color: ${({ theme }) => theme.pink_rgb};
          }
        }

        .author-and-time {
          display: flex;
          align-items: center;
          gap: 1.5rem;
  
          p {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.light_100};
          }

          .author {
            display: flex;
            align-items: center;
            gap: .8rem;

            img {
              width: 1.6rem;
              height: 1.6rem;
              border: solid 1px ${({ theme }) => theme.dark_100};
              border-radius: 50%;
            }
          }

          .time {
            display: flex;
            align-items: center;
            gap: .8rem;

            svg {
              color: ${({ theme }) => theme.pink_rgb};
            }
          }
        }
      }

      .tags {
        display: flex;
        align-items: center;
        gap: .8rem;
      }

      .description {
        p {
          font-weight: 400;
          font-size: 1.6rem;
          color: ${({ theme }) => theme.light_100};
          text-align: justify;
        }

        p + p {
          margin-top: 2.2rem;
        }
      }
    }
  }
`;