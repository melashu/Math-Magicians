import React from 'react';
import '../css/pagenotfound.css';
import { BsEmojiAngry } from 'react-icons/bs';

const PageNotFound = () => (
  <div className="no-page">
    {' '}
    <p>
      {' '}
      Sorry page is not found here!
      {' '}
      <BsEmojiAngry />
    </p>
  </div>
);

export default PageNotFound;
