import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

function App() {
  const [keyword, setKeyword] = useState('cats');
  console.log(keyword);

  return (
    <div className='App'>
      <section className='App-content'>
        <button onClick={() => setKeyword('omg')}>Cambiar Keyword</button>
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
