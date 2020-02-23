import React, { Fragment, memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useField, useForm } from 'react-final-form-hooks';
import { useModal } from 'use-modal-hook';
import Modal from '../Modal';
import Icon from '../Icon';
import ConfirmActionModal from '../ConfirmActionModal';
import './ImageDetailModal.scss';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }

  return errors;
};

const ImageDetailModal = ({ isOpen, onClose, title, onRename, onDelete, id, src }) => {
  const [editing, setEditing] = useState(false);

  const handleSetEditing = useCallback(() => setEditing(prevEditing => !prevEditing), [setEditing]);

  const handleRemove = useCallback(
    async ({ title }) => {
      await onRename({ title, id });

      handleSetEditing();
    },
    [id, onRename, handleSetEditing]
  );

  const { form, handleSubmit, submitting } = useForm({
    onSubmit: handleRemove,
    validate,
    initialValues: { title },
  });

  const titleField = useField('title', form);

  const [showConfirmModal] = useModal(ConfirmActionModal);

  const handleDelete = useCallback(() => {
    showConfirmModal({
      title: titleField.input.value,
      onClick: () => onDelete(id),
    });
  }, [onDelete, showConfirmModal, titleField.input.value, id]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <img className="image-detail-modal__img" src={src} alt={title} />
      <form onSubmit={handleSubmit} className="image-detail-modal__title">
        {editing ? (
          <Fragment>
            <input
              {...titleField.input}
              autoFocus
              className="image-detail-modal__input"
              size={titleField.input.value.length}
              placeholder="Enter Title"
            />
            <Icon tag="button" type="submit" icon="save" className="image-detail-modal__save-action" />
            {titleField.meta.touched && titleField.meta.error && <div className="error">{titleField.meta.error}</div>}
          </Fragment>
        ) : (
          titleField.input.value
        )}
      </form>
      <div className="image-detail-modal__actions">
        <button
          type="button"
          className="image-detail-modal__action primary"
          disabled={submitting || editing}
          onClick={handleSetEditing}
        >
          Edit name
          <Icon className="image-detail-modal__action-icon" icon="edit" />
        </button>
        <button
          type="button"
          className="image-detail-modal__action danger"
          disabled={submitting}
          onClick={handleDelete}
        >
          Delete file
          <Icon className="image-detail-modal__action-icon" icon="trash" />
        </button>
        <button type="button" className="image-detail-modal__action secondary" onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

ImageDetailModal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onRename: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default memo(ImageDetailModal);
