'use client'
import { useEffect, useState } from 'react';
import { fetchFromMarvel } from '../../utils/marvelApi';
import CharacterCard from '../CharacterCard';
import Grid from '@mui/material/Grid';
import { Character } from '../../types/types'; 

const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    const loadCharacters = async () => {
      const results = await fetchFromMarvel('characters');
      setCharacters(results);
    };
    loadCharacters();
  }, []);

  return (
    <Grid container justifyContent="center">
    {characters.map(character => (
      <Grid item key={character.id} xs={12} sm={6} md={4} lg={3}>
        <CharacterCard character={character} />
      </Grid>
    ))}
  </Grid>
  )
}

export default CharacterList