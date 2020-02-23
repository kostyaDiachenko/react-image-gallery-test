import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import './ImageGrid.scss';

const ImageGrid = ({ items, onItemClick }) => {
  const handleImageClick = useCallback(imageProps => () => onItemClick(imageProps), [onItemClick]);

  return (
    <div className="image-grid">
      {items.map(item => (
        <Image key={item.id} {...item} onClick={handleImageClick(item)} />
      ))}
    </div>
  );
};

ImageGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      layout: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ImageGrid;
