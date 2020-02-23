import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Icon.scss';

const Icon = ({ icon, tag: Tag, className, rest }) => (
  <Tag {...rest} className={classNames([`icon-${icon}`], className)} />
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  tag: PropTypes.string,
};

Icon.defaultProps = {
  className: null,
  tag: 'span',
};

export default Icon;
