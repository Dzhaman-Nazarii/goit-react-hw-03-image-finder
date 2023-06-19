import { Component } from 'react';
import Searchbar from './Searchbar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery'

export default class App extends Component {
    state = {
        galleryName: '',
    };

    handleFormSubmit = galleryName => {
        this.setState({galleryName})
    }

    render() {
      return (
          <div>
              <Searchbar onSubmit={this.handleFormSubmit} />
              <ImageGallery galleryName={this.state.galleryName} />
          </div>
      )
    }
}
