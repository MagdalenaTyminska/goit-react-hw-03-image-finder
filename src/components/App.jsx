import React from 'react';
import css from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
// import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';

// const amount = 12;
// const API_KEY = '33842585-d620847ad659a965fc02b2925';
// const API_URL = `https://pixabay.com/api/?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${amount}`;

export class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <div className={css.App}>
          <Searchbar />
          <ImageGallery />
        </div>
      </>
    );
  }
}
