export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '875d902317mshf64f89c710fe7c0p161260jsn8c87a7e9312f',
    'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
