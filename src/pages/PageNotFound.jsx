import React from 'react';
import '../css/pagenotfound.css';
import { BsEmojiAngry } from 'react-icons/bs';

const PageNotFound = () => (
  <div className="no-page">
    {' '}
    <p className="not-found-message">
      {' '}
      Sorry page is not found here!
      {' '}
      <BsEmojiAngry />
    </p>
  </div>
);

export default PageNotFound;
