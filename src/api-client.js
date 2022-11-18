const URL =
  "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=6a908201bccfbba8a6267212c171d0e7&format=json";

function getMusicData() {
  return fetch(`${URL}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data.topartists.artist;
    })
    .then((artist) =>
      artist.map((artist) => {
        return {
          id: artist.mbid,
          name: artist.name,
          image: artist.image[0]["#text"],
        };
      })
    );
}

export { getMusicData };
