import React, { useEffect, useState } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  console.log(params);
  const [gifs, setGifs] = useState([]);
  // value = state[0],
  // setValue = state[1];

  useEffect(
    function () {
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword]
  );

  console.log(gifs);
  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif title={title} url={url} id={id} key={id} />
      ))}
    </div>
  );
}
