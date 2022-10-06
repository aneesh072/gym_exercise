export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '813fa38aecmsh4fd80a22d6ea3e8p12f348jsna0484eb817b9',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '813fa38aecmsh4fd80a22d6ea3e8p12f348jsna0484eb817b9',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
