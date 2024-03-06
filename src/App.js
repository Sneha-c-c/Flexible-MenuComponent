// src/App.js

import React from 'react';
import Menu from './Menu';
import './styles.css';
import filmIcon from './assets/film-icon.jpg';

const options = [
  { id: 1, label: 'Default option', icon: null },
  { id: 2, label: 'Hovered option', icon: null },
  { id: 3, label: 'Disabled option', icon: null, disabled: true} ,
  { id: 4, label: 'Text option ', icon: null },
  { id: 4, label: 'Icon and Text Option', icon: filmIcon },
];

function App() {
  return (
    <div className="App">
      <Menu
        options={options}
        openUpwards={false}
        showCheckmark={true}
        enableSearch={true}
      />
    </div>
  );
}

export default App;
