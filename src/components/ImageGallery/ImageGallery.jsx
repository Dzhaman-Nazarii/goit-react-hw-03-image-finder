import { Component } from "react";

export default class ImageGallery extends Component {

    state = {
        gallery: null
    }

    async componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.galleryName;
        const nextName = this.props.galleryName;

        if (prevName !== nextName) {
            console.log("Заміна");

        try {
            const response = await fetch('https://pixabay.com/api/?q=cat&page=1&key=37532394-4be77775868909c78ad8f61fa&image_type=photo&orientation=horizontal&per_page=12');
            const galerry = await response.json();
            console.log(galerry);
            this.setState({ galerry: galerry });
        } catch (error) {
            console.error('Error:', error);
            }
            
        }
    }
    render() {
        return (
            <div>
                <ul className="gallery">
                    <li className="gallery-item">
                        Фото
                        {this.state.gallery && <div>{this.state.gallery}</div>}
                        {/* <img src="" alt="" /> */}
                    </li>
                </ul>
            </div>    
        )
    }
}