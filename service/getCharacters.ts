
// get characters from marvel api
export const getCharacters = async (page: number) => {
  const response = await fetch(
    `https://gateway.marvel.com/v1/public/characters?limit=10&offset=${
      page * 10
    }&apikey=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();
  return data;
};
