import { Component } from "react";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css'

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';




export default class App extends Component {
  state = {
    query: '', 
    page: 1,
  };

  handleSubmit = (query) => {
    this.setState({ query, page: 1 });
  }

  incrementPage = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  render = () => {
    const { query, page } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery query={query} page={page} onIncrementPage={this.incrementPage} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  };
}
