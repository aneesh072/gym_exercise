export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '875d902317mshf64f89c710fe7c0p161260jsn8c87a7e9312f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();
  return data;
};
