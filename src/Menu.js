// src/Menu.js

import React, { useState } from 'react';
import Option from './Option';
import SearchBar from './SearchBar';

const Menu = ({ options, openUpwards, showCheckmark, enableSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <div className="title" onClick={toggleMenu}>
        Selected option
      </div>
      {enableSearch && isOpen && <SearchBar onSearch={handleSearch} />}
      {isOpen && (
        <ul className={`options ${openUpwards ? 'upwards' : ''}`}>
          {filteredOptions.map((option) => (
            <Option
              key={option.id}
              label={option.label}
              icon={option.icon}
              showCheckmark={showCheckmark}
              disabled={option.disabled}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
