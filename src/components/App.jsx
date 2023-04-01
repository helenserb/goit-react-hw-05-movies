import { Component } from "react";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from './ImageGallery/ImageGallery';



export default class App extends Component {
  state = {
    query:'', 
  };


  handleSubmit = (query) => {
    this.setState({ query });
  }

  render = () => {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.loading && <h1>Загружаем ...</h1>}
        <ImageGallery query={this.state.query} />
        <ToastContainer autoClose={3000} />
      </>
    );
  };
}
