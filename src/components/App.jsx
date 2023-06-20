import { Component } from 'react';
import Searchbar from './Searchbar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './Button/Button';

export default class App extends Component {
    state = {
        galleryName: '',
        page: 1
    };

    handleFormSubmit = galleryName => {
        this.setState({ galleryName, page: 1 });
    };


    handleButtonMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }));
    }
    
    render() {
      const { galleryName, page } = this.state;
      const showButton = galleryName !== '';

      return (
          <div>
              <Searchbar onSubmit={this.handleFormSubmit} />
              <ImageGallery galleryName={galleryName} page={page} />
              {showButton && <Button handleButtonMore={this.handleButtonMore} />}
          </div>
      )
    }
}
