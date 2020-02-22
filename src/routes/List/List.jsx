import React, { useEffect, useState, memo, useCallback } from 'react';
import axios from 'axios';
import { useModal } from 'use-modal-hook';
import { useToasts } from 'react-toast-notifications';
import { ImageGrid, ImageDetailModal } from '../../components';

const List = () => {
  const [images, setImages] = useState([]);
  const { addToast } = useToasts();
  const [showDetailModal, hideDetailModal] = useModal(ImageDetailModal);
  const handleRename = useCallback(
    async ({ id, title }) => {
      try {
        await axios.patch('/api/image', { id, title });
        addToast('Saved Successfully', { appearance: 'success' });
        setImages(images.map(item => (item.id === id ? { ...item, title } : item)));
      } catch (e) {
        addToast('Server Error', { appearance: 'error' });
      }
    },
    [setImages, images, addToast]
  );
  const handleDelete = useCallback(
    async id => {
      try {
        await axios.delete(`/api/image/${id}`);
        addToast('Deleted Successfully', { appearance: 'success' });
        setImages(images.filter(item => item.id !== id));
        hideDetailModal();
      } catch (e) {
        addToast('Server Error', { appearance: 'error' });
      }
    },
    [setImages, images, addToast, hideDetailModal]
  );
  const handleSelectImage = useCallback(
    data => {
      showDetailModal({ onRename: handleRename, onDelete: handleDelete, ...data });
    },
    [showDetailModal, handleRename, handleDelete]
  );
  useEffect(() => {
    axios.get('/api/image/list').then(result => setImages(result.data));
  }, []);

  return <ImageGrid items={images} onItemClick={handleSelectImage} />;
};

export default memo(List);
