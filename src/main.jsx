import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'vite-plugin-theme/dist/theme.less';
import App from './App.jsx';
import './styles/index.scss';
import './styles/antd.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
