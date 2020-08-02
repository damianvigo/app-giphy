const apikey = '4VhWpJ4B6IBSmkTSVN8Ppsk1OKex0fRR';

export default function getGifs({ keyword = 'what' } = {}) {
  console.log(keyword);
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  console.log('actualizando los gifs');
  // setGifs(DIFFERENT_GIFS);
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      console.log(response);
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      console.log(gifs);
      return gifs;
    });
}
