import React from 'react';
// import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// import { Modal } from './Modal/Modal';

export class ImageGallery extends React.Component {
  // static propTypes = {
  //   id: PropTypes.number,
  //   webformatURL: PropTypes.string,
  //   tags: PropTypes.string,
  // };
  render() {
    return (
      <>
        <ul className={css.gallery}></ul>
      </>
    );
  }
}
