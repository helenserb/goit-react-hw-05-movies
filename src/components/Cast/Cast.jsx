import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from 'Services/Api';
import { IMAGE_BASE_URL } from 'Services/Api';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(res => setCast(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div className={css.CastWraperStuled}>
      {cast.length > 0 ? (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => {
            const imgUrl = profile_path
              ? IMAGE_BASE_URL + profile_path
              : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png';

            return (
              <li key={id} className={css.CastLiStuled}>
                <img src={imgUrl} alt={name} className={css.CastImgStuled} />
                <h2>{name}</h2>
                <p>
                  <span>Character:</span> {character}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <b>We don't have any cast for this movie :(</b>
      )}
    </div>
  );
};
export default Cast;
