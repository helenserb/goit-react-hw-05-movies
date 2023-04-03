import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ incrementPage }) => {
  return (
    <button onClick={()=>incrementPage()} type="button" className={css.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  incrementPage: PropTypes.func.isRequired
}