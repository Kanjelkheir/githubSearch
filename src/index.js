import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {store} from './App/store.js';
import {Provider} from 'react-redux';
import './index.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
)