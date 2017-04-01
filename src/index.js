import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class ProductsList extends HTMLElement {
  attachedCallback() {
    ReactDOM.render(<App />, this.createShadowRoot());
  }
}
document.registerElement('microfrontends-products-list', ProductsList);
