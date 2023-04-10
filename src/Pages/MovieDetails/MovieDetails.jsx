import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useRef, Suspense } from 'react';
import MoviesInfo from 'components/MoviesInfo/MoviesInfo';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'Services/Api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(movie => setMovie(movie))
      .catch(err => console.log(err));
  }, [movieId]);

  console.log(movieId);
  console.log(movie);

  return (
    <>
      <Link to={backLinkLocationRef.current} className={css.Link}>
        Back to movie list
      </Link>
      <MoviesInfo movie={movie} movieId={movieId} />

      <div className={css.AdditionalLinkStyled}>
        <h2>Additional information</h2>
        <ul className={css.LinkStyledList}>
          <li className={css.LinkStyled}>
            <Link to="cast" className={css.Link}>
              Cast
            </Link>
          </li>
          <li className={css.LinkStyled}>
            <Link to="reviews " className={css.Link}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
