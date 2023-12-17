'use client'
import { useEffect, useState } from 'react';
import { fetchFromMarvel } from '../../utils/marvelApi';
import CharacterCard from '../CharacterCard';
import Grid from '@mui/material/Grid';
import { Character } from '../../types/types';
import { characters as char } from '../../utils/mockData';
import { Skeleton } from '@mui/material';



const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);


  const loadMoreCharacters = async () => {
    try {
      setLoading(true);
      const newCharacters = await fetchFromMarvel('characters',offset);
      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
      setOffset((prevOffset) => prevOffset + 30);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadCharacters = async () => {
      const results = await fetchFromMarvel('characters');
      setCharacters(results);
      console.log(results);
      // console.log(char.data.results);
      // setCharacters(char.data.results.map((result: any) => ({
      //   ...result,
      //   comics: {
      //     ...result.comics,
      //     items: result.comics.items.map((item: any) => ({
      //       ...item,
      //       type: undefined
      //     }))
      //   }
      // })));

    };
    loadCharacters();
  }, []);


  console.log(characters ? 'true' : 'false');

  const numberList = [];

  for (let i = 0; i >= -19; i--) {
    numberList.push(i);
  }

  return (
    <>
      <Grid container justifyContent="center" className='bg-white p-4 rounded mb-12 min-h-screen'>
        {
          !loading ?
          <>
            {
              characters.map(character => {
                
                return (
                  <Grid item key={character.id} xs={12} sm={6} md={4} lg={3}>
                    <CharacterCard character={character} />
                  </Grid>
                )
              })
            }
            </>
            :
            <>
            {numberList.map((item,i)=>(
              <Grid item key={i}   xs={12} sm={6} md={4} lg={3}>

              <Skeleton variant="rectangular" sx={{ maxWidth: 345, m: 2 ,with: 1}} height={400} />
       
            </Grid>
            ))}
            </>
        }
      </Grid>

    </>

  )
}

export default CharacterList