import { Component } from 'react';
import Searchbar from './Searchbar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export default class App extends Component {
  state = {
    galleryName: '',
    page: 1,
    totalHits: 0,
    gallery: []
  };

  handleFormSubmit = galleryName => {
    this.setState({ galleryName, page: 1, totalHits: 0 });
  };

  handleButtonMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleGalleryData = (hits, totalHits) => {
    this.setState(prevState => ({
      gallery: [...prevState.gallery, ...hits],
      totalHits
    }));
  };

  render() {
    const { galleryName, page, totalHits, gallery } = this.state;
    const hasMore = gallery.length < totalHits && gallery.length > 0;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          galleryName={galleryName}
          page={page}
          onGalleryData={this.handleGalleryData}
        />
        {hasMore && <Button handleButtonMore={this.handleButtonMore} />}
      </div>
    );
  }
}
