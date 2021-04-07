import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './context/auth/auth.context'
import LoadingModalProvider from './context/loading-modal/loading-modal.contenxt'

console.log(process.env.REACT_APP_BACKEND_ENDPOINT)

ReactDOM.render(
  <React.StrictMode>
    <LoadingModalProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LoadingModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
