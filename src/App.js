import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route } from 'wouter';

function App() {
  const [keyword, setKeyword] = useState('cats');
  console.log(keyword);

  return (
    <div className='App'>
      <section className='App-content'>
        <h1>App</h1>
        <Link to='/gif/animales'>gif de animales</Link>
        <Link to='/gif/argentina'>gif de argentina</Link>
        <Link to='/gif/musica'>gif de musica</Link>
        <Route path='/gif/:keyword' component={ListOfGifs} />
        {/*  <button onClick={() => setKeyword('omg')}>Cambiar Keyword</button>
        <ListOfGifs keyword={keyword} /> */}
      </section>
    </div>
  );
}

export default App;
