import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

let params = new URLSearchParams(window.location.search);
let id = params.get("id")
if (id === null) {
  id = 1;
};


ReactDOM.render(<App id={id}/>, document.getElementById('pledges'));