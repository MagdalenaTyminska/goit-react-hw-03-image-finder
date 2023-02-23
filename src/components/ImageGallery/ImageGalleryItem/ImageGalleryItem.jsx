import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends React.Component {
  static propTypes = {
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
  };
  render() {
    const { id, webformatURL, tags } = this.props;
    return (
      <>
        <li key={id} className={css.galleryItem}>
          <img src={webformatURL} alt={tags} />
        </li>
      </>
    );
  }
}
