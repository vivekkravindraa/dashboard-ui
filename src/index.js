import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
