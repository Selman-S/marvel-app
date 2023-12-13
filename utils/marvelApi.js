// utils/marvelApi.js
import md5 from 'md5';

const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;

export const fetchFromMarvel = async (endpoint) => {
  console.log(publicKey);
  
    const ts = new Date().getTime();
    const hash = md5(ts + privateKey + publicKey);
    const url = `https://gateway.marvel.com/v1/public/${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    const response = await fetch(url);
    const data = await response.json();
    return data.data.results;
};
