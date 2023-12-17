'use client'
import { useEffect, useState } from 'react';
import { fetchFromMarvel } from '../../utils/marvelApi';
import { Character } from '../../types/types';
import { useInView } from 'react-intersection-observer'
import LoadingSpinner from '../loadingSpinner/loadingSpinner';
import Characters from '../caracters/characters';



const LoadMore = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [ref, inView] = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreCharacters = async () => {
    try {
      await delay(2000);
      const nextPage = (page % 4) + 1;
      const newCharacters = (await fetchFromMarvel('characters', nextPage)) ?? [];
      console.log(newCharacters);

      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
      setPage(nextPage);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    if (inView) {
      console.log('scroll end');
      setPage((prevPage) => prevPage + 1);
      console.log("page", page);

      loadMoreCharacters();
    }

  }, [inView])
  return (
    <>
      <Characters characters={characters} />
      <div ref={ref} className='w-full flex justify-center items-center'>
        <LoadingSpinner />
      </div>
    </>
  )
}

export default LoadMore