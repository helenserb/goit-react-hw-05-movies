import PropTypes from 'prop-types';
import css from './MoviesInfo.module.css';

import { IMAGE_BASE_URL } from 'Services/Api';
const MoviesInfo = ({ movie }) => {
  const { title, overview, genres = [], poster_path, vote_average } = movie;
  const imgUrl = IMAGE_BASE_URL + poster_path;
  const score = Math.floor(vote_average * 10);
  return (
    <div className={css.MoviesInfo}>
      <img src={imgUrl} alt="" className={css.MoviesInfoImg} />
      <div>
        <h1>{title}</h1>
        <p>User score: {score}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};
export default MoviesInfo;

MoviesInfo.propTypes = { movie: PropTypes.object.isRequired };
