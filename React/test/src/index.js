import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ContactsApp from './ContactsApp';

ReactDOM.render(<ContactsApp />, document.getElementById('root'));
registerServiceWorker();
