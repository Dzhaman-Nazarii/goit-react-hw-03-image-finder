import React, { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
import css from './ImageGallery.module.css'
export default class ImageGallery extends Component {
  state = {
    gallery: null,
    status: 'idle'
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.galleryName;
    const nextName = this.props.galleryName;

    if (prevName !== nextName) {
      try {
        this.setState({ status: 'pending' });
        const response = await fetch(
          `https://pixabay.com/api/?q=${nextName}&page=1&key=37532394-4be77775868909c78ad8f61fa&image_type=photo&orientation=horizontal&per_page=12`
        );
        const gallery = await response.json();
        this.setState({ gallery: gallery.hits, status: 'resolved' });
      } catch (error) {
      }
    }
  }

  render() {
      const { gallery, status } = this.state;

      if (status === 'pending') {
        return <Loader/>
      }
      if (status === 'rejected') {
        return <h1>Виникла помилка</h1>
      }
      
    if (status === 'resolved') {
        return <ul className={css.ImageGallery}>
          {gallery &&
            gallery.map(({id, webformatURL, tags, largeImageURL}) => (
                <ImageGalleryItem
                    key={id}
                    src={webformatURL}
                    alt={tags}
                    largeImageURL={largeImageURL}
                />
            ))}
        </ul>
    }
  }
}
