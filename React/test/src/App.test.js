import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContactsApp from './ContactsApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactsApp />, div);
});
