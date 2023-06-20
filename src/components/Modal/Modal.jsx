import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = (event) => {
        if (event.code === 'Escape') {
            this.props.closeModal();
        }
    };

    handleBackdropClick = (event) => {
        if (event.target !== event.currentTarget) {
            this.props.closeModal();
        }
    };

    render() {
        const { tags, largeImageURL } = this.props;
        return createPortal(
            <div className={css.Overlay} onClick={this.handleBackdropClick}>
                <div className={css.Modal}>
                    <img src={largeImageURL} alt={tags} />
                </div>
            </div>,
            modalRoot
        );
    }
}

Modal.propTypes = {
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};
