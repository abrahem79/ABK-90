'use client';

import React from 'react';
import { ToastContainer as Toastify } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastContainer = () => {
  return (
    <Toastify
      position="bottom-left"
      autoClose={3000}
      theme="dark"
      icon={false}
    />
  );
};
