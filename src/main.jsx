import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'vite-plugin-theme/dist/theme.less';
import App from './App.jsx';
import './styles/antd.scss';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
