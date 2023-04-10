import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { getSearchingMovies } from 'Services/Api';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilm = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchFilm) {
      return;
    }
    getSearchingMovies(searchFilm)
      .then(movies => setMovies(movies))
      .catch(err => console.log(err.message));
  }, [searchFilm]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <SearchForm updateQueryString={updateQueryString} />
      <div>
        {movies &&
          (movies.length > 0 ? (
            <MovieList movies={movies} />
          ) : (
            <b>There is no such movie</b>
          ))}
      </div>
    </div>
  );
};

export default Movies;
