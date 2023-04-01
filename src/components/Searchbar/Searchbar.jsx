import { Component } from "react";
import { FaSearch } from 'react-icons/fa';
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
        if (this.state.query.trim() === '') {
            alert('Введите ваш запрос')
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