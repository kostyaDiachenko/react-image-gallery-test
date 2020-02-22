import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const ConfirmModal = ({ onClose, isOpen, onDelete }) => {
  const handleDelete = useCallback(async () => {
    await onDelete();
    onClose();
  }, [onClose, onDelete]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      Do you really want to delete image?
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default memo(ConfirmModal);
