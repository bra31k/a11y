import React, {useState} from 'react';
import { Container } from '@material-ui/core';

import Search from "./components/Search";
import Result from "./components/Result";

const App = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);

  const onClickSearch = async () => {
    const response = await fetch(`http://127.0.0.1:3000/check?url=${url}`);

    const result = await response.json();

    setResult(result);
  };

  return (
      <Container maxWidth="md">
        <Search
            onClick={onClickSearch}
            value={url}
            onChange={event => setUrl(event.target.value)}
        />
        <Result result={result}/>
      </Container>
  );
};

export default App;
