import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author, image, description }) => {
    return (
        <div className="book-container">
            <h3 className="book-title">{title}</h3>
            <img src={image.url} alt="Not found" className="book-image"/>
            <p>Author: {author}</p>
            <p className="book-description">{description}</p>
        </div>
    )
};

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Book;