import React from 'react';
import { Button, Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import './index.css';

const Search = ({onClick, value, onChange}) => {
  return (
      <div className="search">
        <Input
            placeholder="Введите URL для проведения аудита"
            type="search"
            onChange={onChange}
            value={value}
            fullWidth
        />
        <Button onClick={onClick}>
          <SearchIcon/>
        </Button>
      </div>
  );
};

export default Search;