import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

export const SearchForm = ({ updateQueryString }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.title.value.trim();
    updateQueryString(searchQuery);
  };
  return (
    <div className={css.Searchbar}>
      <form action="" onSubmit={handleSubmit} className={css.SearchForm}>
        <input type="text" name="title" className={css.SearchForm_input} />
        <button type="submit" className={css.SearchForm_button}>
          Search
        </button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  updateQueryString: PropTypes.func.isRequired,
};
