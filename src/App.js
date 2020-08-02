import React, { useEffect, useState } from 'react';

import './App.css';
import getGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs';

function App() {
  const [gifs, setGifs] = useState([]);
  // value = state[0],
  // setValue = state[1];

  useEffect(function () {
    getGifs({ keyword: 'programming' }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className='App'>
      <section className='App-content'>
        <ListOfGifs gifs={gifs} />
      </section>
    </div>
  );
}

export default App;
