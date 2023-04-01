import { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends Component{

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.query !== this.props.query) {

            fetch(
              `https://pixabay.com/api/?q=${this.props.query}&page=1&key=33447943-79d2196749f400a54d8eaf5fb&image_type=photo&orientation=horizontal&per_page=12`
            )
              .then(res => res.json())
              .then(console.log)
        }
    }
    render = () => {
        return (
          <>
                <ul className="gallery">
                    <ImageGalleryItem />
                </ul>
          </>
        );
    }
}