import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    gallery: [],
    status: 'idle'
  };

  async componentDidUpdate(prevProps) {
    const prevName = prevProps.galleryName;
    const nextName = this.props.galleryName;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      try {
        this.setState({ status: 'pending' });

        if (prevName !== nextName) {
          this.setState({ gallery: [] });
        }

        const response = await fetch(
          `https://pixabay.com/api/?q=${nextName}&page=${nextPage}&key=37532394-4be77775868909c78ad8f61fa&image_type=photo&orientation=horizontal&per_page=12`
        );
        const galleryData = await response.json();
        const { hits, totalHits } = galleryData;

        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          status: 'resolved'
        }));

        this.props.onGalleryData(hits, totalHits);
      } catch (error) {
        this.setState({ status: 'rejected' });
      }
    }
  }

  render() {
    const { gallery, status } = this.state;

    if (status === 'idle') {
      return null;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <h1>Виникла помилка</h1>;
    }

    if (status === 'resolved') {
      return (
        <ul className={css.ImageGallery}>
          {gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              alt={tags}
              largeImageURL={largeImageURL}
            />
          ))}
        </ul>
      );
    }
  }
}

ImageGallery.propTypes = {
  galleryName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onGalleryData: PropTypes.func.isRequired
};
