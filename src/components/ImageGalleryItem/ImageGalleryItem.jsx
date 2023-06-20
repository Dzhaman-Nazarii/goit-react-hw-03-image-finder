import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './ImageGalleryItems.module.css'

export default class ImageGalleryItem extends Component {

    render() {
        const { src, alt, id } = this.props;

        return (
            <li key={id} className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItemImage} src={src} alt={alt} />
        </li>
    );
    }
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};