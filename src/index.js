import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import {BrowserRouter, Routes, Route, useNavigate, Link} from 'react-router-dom';
import Test from './Test';
import {store} from './App/store.js';
import {Provider} from 'react-redux';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
)