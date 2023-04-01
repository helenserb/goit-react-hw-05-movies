import { Component } from "react";

import ImageGallery from "./ImageGallery/ImageGallery";
// import { nanoid } from 'nanoid';
import Searchbar from "./Searchbar/Searchbar";



export default class App extends Component {
  state = {
    query:'',
    images: null,
    loading:false, 
  };

  componentDidMount() {
    this.setState({ loading: true });

    setTimeout(() => {
      fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=33447943-79d2196749f400a54d8eaf5fb&image_type=photo&orientation=horizontal&per_page=12'
    ).then(res => res.json()).then(images => this.setState({ images })).finally(this.setState({ loading: false }));
    }, 1000)
    
  }

  handleSubmit = (query) => {
    this.setState({ query });
  }

  render = () => {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.loading && <h1>Загружаем ...</h1>}
        {this.state.images && <ImageGallery />}
      </>
    );
  };
}
