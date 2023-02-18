import { createContext, useContext, useState } from 'react';

const SearchMoviesContext = createContext({});

function SearchMoviesProvider({ children }) {
  const [title, setTitle] = useState("");

  function handleTitle(movieTitle) {
    setTitle(movieTitle)

    console.log(title)
  }

  return (
    <SearchMoviesContext.Provider value={{ handleTitle, title }}>
      { children }
    </SearchMoviesContext.Provider>
  )
}

function useSearchMovies() {
  const context = useContext(SearchMoviesContext);

  return context;
}

export { SearchMoviesProvider, useSearchMovies }