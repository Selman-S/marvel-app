'use client'
import { useEffect, useState } from 'react';
import { fetchFromMarvel } from '../../service/getCharacters';
import Grid from '@mui/material/Grid';
import { Character } from '../../types/types';
import { Box, Skeleton } from '@mui/material';
import Characters from '../caracters/characters';
import LoadMore from '../loadMore/loadMore';


const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);


  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreCharacters = async () => {
    try {
      await delay(2000);
      const newCharacters = await fetchFromMarvel('characters', page);
      console.log(newCharacters);

      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
      setPage((prevOffset) => prevOffset + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {


    loadMoreCharacters();

  }, [])

  const numberList = [];

  for (let i = 0; i >= -19; i--) {
    numberList.push(i);
  }


  return (
    <>
      {
        !loading ?
          <Box>
            <Grid container justifyContent="center" className='bg-white p-4 rounded mb-12 min-h-screen'>

              {
                characters && (
                  <>
                    <Characters characters={characters} />
                    <LoadMore />
                  </>
                )
              }

            </Grid>
          </Box>
          :
          <>
            <Grid container justifyContent="center" className='bg-white p-4 rounded mb-12 min-h-screen'>

              {numberList.map((item, i) => (
                <Grid item key={i} xs={12} sm={6} md={4} lg={3}>

                  <Skeleton variant="rectangular" sx={{ maxWidth: 345, m: 2, with: 1 }} height={400} />

                </Grid>
              ))}
            </Grid>
          </>
      }

    </>

  )
}

export default CharacterList