import React, { Component } from "react";
import PropTypes from 'prop-types';
import Modal from "components/Modal/Modal";
import css from './ImageGalleryItems.module.css'

export default class ImageGalleryItem extends Component {
    state = {
        showModal: false
    }

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    render() {
        const { showModal } = this.state;
        const { id, src, alt, largeImageURL  } = this.props;

        return (
            <li key={id} className={css.ImageGalleryItem} onClick={this.toggleModal}>
                <img className={css.ImageGalleryItemImage} src={src} alt={alt} loading="lazy" />
                {showModal && (
                    <Modal
                        largeImageURL={largeImageURL}
                        tags={alt}
                        closeModal={this.toggleModal}
                    />
                )}
        </li>
    );
    }
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};