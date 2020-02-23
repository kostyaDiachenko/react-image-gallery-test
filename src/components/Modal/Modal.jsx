import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ModalNode from 'react-responsive-modal';
import './Modal.scss';

const Modal = ({ onClose, isOpen, children }) => (
  <ModalNode open={isOpen} onClose={onClose} classNames={{ modal: 'modal' }} center>
    {children}
  </ModalNode>
);

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default memo(Modal);
