import { useEffect, useState } from 'react';
import css from './Home.module.css';

import { getTrendingMovies } from 'Services/Api';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(movies => setMovies(movies))
      .catch(err => console.log(err.message));
  }, []);

  return (
    <div>
      <ul className={css.HomeUl}>{<MovieList movies={movies} />}</ul>
    </div>
  );
};

export default Home;
