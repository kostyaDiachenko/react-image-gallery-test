import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import './ConfirmActionModal.scss';

const ConfirmActionModal = ({ isOpen, onClose, title, onClick }) => {
  const handleConfirmAction = useCallback(async () => {
    await onClick();
    onClose();
  }, [onClose, onClick]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="confirm-action-modal__warning">
        You are about to delete <b>{title}</b>
      </div>
      <button type="button" className="confirm-action-modal__action" onClick={handleConfirmAction}>
        Delete
      </button>
    </Modal>
  );
};

ConfirmActionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ConfirmActionModal;
