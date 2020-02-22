import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ModalProvider } from 'use-modal-hook';
import { Main } from './routes';
import { ToastProvider } from 'react-toast-notifications';
import './App.scss';

function App() {
  return (
    <ToastProvider>
      <ModalProvider>
        <Router>
          <Main />
        </Router>
      </ModalProvider>
    </ToastProvider>
  );
}

export default App;
