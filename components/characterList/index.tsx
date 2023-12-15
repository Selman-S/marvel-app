'use client'
import { useEffect, useState } from 'react';
import { fetchFromMarvel } from '../../utils/marvelApi';
import CharacterCard from '../CharacterCard';
import Grid from '@mui/material/Grid';
import { Character } from '../../types/types';
import { characters as char} from '../../utils/mockData';

const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    const loadCharacters = async () => {
      // const results = await fetchFromMarvel('characters');
      // setCharacters(results);
      // console.log(results);
      console.log(char.data.results);
      setCharacters(char.data.results.map((result: any) => ({
        ...result,
        comics: {
          ...result.comics,
          items: result.comics.items.map((item: any) => ({
            ...item,
            type: undefined
          }))
        }
      })));

    };
    loadCharacters();
  }, []);

  return (
    <Grid container justifyContent="center" className='bg-white p-4 rounded'>
      {characters.map(character => (
        <Grid item key={character.id} xs={12} sm={6} md={4} lg={3}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CharacterList