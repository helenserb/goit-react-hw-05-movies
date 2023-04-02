import { Component } from "react";
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css'

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

    handleFormSubmit = e => {
      e.preventDefault();
      window.scrollTo(0, 0);
        if (this.state.query.trim() === '') {
          toast.error("Введіть щось");
          this.setState({query: ''})
            return;
        }
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
  }

  render = () => {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleFormSubmit}>
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
            value={this.state.query}
            name="query"
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  };
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}