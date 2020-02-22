import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { useForm, useField } from 'react-final-form-hooks';
import { useModal } from 'use-modal-hook';
import { ConfirmModal } from '../';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }

  return errors;
};

const ImageDetailModal = memo(({ isOpen, onClose, title, onRename, onDelete, id, src }) => {
  const [editing, setEditng] = useState(false);
  const handleSetEditing = useCallback(() => {
    setEditng(!editing);
  }, [editing, setEditng]);
  const handleRemove = useCallback(
    async ({ title }) => {
      await onRename({ title, id });
      handleSetEditing();
    },
    [id, onRename, handleSetEditing]
  );
  const [showConfirmModal] = useModal(ConfirmModal);
  const handleDelete = useCallback(() => {
    showConfirmModal({ onDelete: () => onDelete(id) });
  }, [onDelete, showConfirmModal, id]);
  const { form, handleSubmit } = useForm({
    onSubmit: handleRemove,
    validate,
    initialValues: { title },
  });
  const titleField = useField('title', form);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className="image-grid">
        {editing ? (
          <form onSubmit={handleSubmit}>
            <input {...titleField.input} placeholder="Enter Title" />
            {titleField.meta.touched && titleField.meta.error && <span>{titleField.meta.error}</span>}
            <button type="submit">Save</button>
          </form>
        ) : (
          <div style={{ display: 'flex' }}>
            {titleField.input.value} <button onClick={handleSetEditing}>Rename</button>
          </div>
        )}
        <img src={src} alt={title} />
        <button onClick={handleDelete}>Delete</button>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
});

ImageDetailModal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onRename: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ImageDetailModal;
