import React, { useEffect, useState } from 'react';

import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=4VhWpJ4B6IBSmkTSVN8Ppsk1OKex0fRR&q=what&limit=10&offset=0&rating=g&lang=en';

function App() {
  const [gifs, setGifs] = useState([]);
  // value = state[0],
  // setValue = state[1];

  useEffect(function () {
    console.log('actualizando los gifs');
    // setGifs(DIFFERENT_GIFS);
    fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        console.log(response);
      });
  }, []);

  return (
    <div className='App'>
      <section className='App-content'>
        {gifs.map((singleGif) => (
          <img src={singleGif} />
        ))}
      </section>
    </div>
  );
}

export default App;
