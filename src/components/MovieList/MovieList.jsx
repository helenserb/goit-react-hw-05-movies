import PropTypes from 'prop-types';
import css from '../../Pages/Home/Home.module.css';
import { Link, useLocation } from 'react-router-dom';
const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies.map(movie => (
        <li key={movie.id} className={css.HomeIl}>
          <Link
            to={`/movies/${movie.id}`}
            className={css.LinkStuled}
            state={{ from: location }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </div>
  );
};
export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
