import React from 'react';
import ReactDOM from 'react-dom';

import Goals from './components/Goals.js';
const App = () => (
  <div>
    <h1>Goalposts</h1>
    <Goals />
  </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));