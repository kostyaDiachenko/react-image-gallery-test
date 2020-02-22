import React from 'react';
import PropTypes from 'prop-types';

const ImageGrid = ({ items, onItemClick }) => (
  <div className="image-grid-view">
    {items.map(({ src, title, id }) => (
      <div onClick={() => onItemClick({ src, title, id })} key={id}>
        <img src={src} alt={title} />
        <span>{title}</span>
      </div>
    ))}
  </div>
);

ImageGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};
export default ImageGrid;
