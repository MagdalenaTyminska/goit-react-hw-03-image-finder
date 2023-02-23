import React from 'react';
// import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
// import { Button } from './Button/Button';

export class Searchbar extends React.Component {
  // static propTypes = {
  //   id: PropTypes.number,
  //   webformatURL: PropTypes.string,
  //   tags: PropTypes.string,
  // };
  render() {
    return (
      <>
        <header className={css.searchbar}>
          <form class="form" className={css.searchForm}>
            <button type="submit" className={css.searchFormButton}>
              <span className={css.buttonLabel}>Search</span>
            </button>
            <input
              className={css.searchFormInput}
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
