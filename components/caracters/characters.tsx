import React from 'react'
import { Character } from './../../types/types';
import { Grid } from '@mui/material';
import CharacterCard from '../CharacterCard/characterCard';

export interface ICharacter {
  characters: Character[]
}



const Characters = ({ characters }: ICharacter) => {
  console.log(characters);

  return (
    <>
      {characters.map((character) => (

        <Grid item key={character.id} xs={12} sm={6} md={4} lg={3}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </>
  )
}

export default Characters