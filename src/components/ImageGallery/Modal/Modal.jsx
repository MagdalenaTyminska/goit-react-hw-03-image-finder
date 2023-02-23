import React from 'react';
// import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends React.Component {
  // static propTypes = {
  //   id: PropTypes.number,
  //   webformatURL: PropTypes.string,
  //   tags: PropTypes.string,
  // };
  render() {
    return (
      <>
        <div className={css.overlay}>
          <div className={css.modal}>
            <img src="" alt="" />
          </div>
        </div>
      </>
    );
  }
}


