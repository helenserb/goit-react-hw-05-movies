import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css'

export const Searchbar = ({onSubmit}) => {
const  [query, setQuery] = useState('');


  const handleQueryChange = e => {
  setQuery(e.currentTarget.value.toLowerCase());
  };

const handleFormSubmit = e => {
      e.preventDefault();
      window.scrollTo(0, 0);
        if (query.trim() === '') {
          toast.error("Введіть щось");
          setQuery('')
            return;
        }
        onSubmit(query);
        setQuery('');
}
  return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleFormSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <FaSearch />
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            name="query"
            onChange={handleQueryChange}
          />
        </form>
      </header>

    );
  };


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}