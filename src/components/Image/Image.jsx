import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Image.scss';

const Image = ({ src, title, layout, onClick }) => (
  <figure className={classNames('image', layout)} onClick={onClick}>
    <img className="image__content" src={src} alt={title} />
    <figcaption className="image__title">{title}</figcaption>
  </figure>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  onClick: PropTypes.func.isRequired,
};

Image.defaultProps = {
  layout: null,
};

export default memo(Image);
