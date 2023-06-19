import { Component } from 'react';
import Searchbar from './Searchbar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
    state = {
        galleryName: '',
    };

    handleFormSubmit = galleryName => {
        this.setState({galleryName})
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://pixabay.com/api/?q=cat&page=1&key=37532394-4be77775868909c78ad8f61fa&image_type=photo&orientation=horizontal&per_page=12');
            const galerry = await response.json();
            console.log(galerry);
            this.setState({ galerry: galerry });
        } catch (error) {
            console.error('Error:', error);
        }
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
