"use client"

import { Character } from '@/types/types';
import { fetchFromMarvel } from '@/utils/marvelApi';
import React, { useEffect, useState } from 'react';
import { character as char } from '../../../utils/mockData'

interface PageProps {
  params: {
    id: string;
  };
}

const page = ({ params }: PageProps) => {
  const [characters, setCharacters] = useState<Character[]>([]); // Update the type of characters to be an array of Character objects
  useEffect(() => {
    const loadCharacters = async () => {
      // const key = 'characters/'+params.id
      //  const results = await fetchFromMarvel(key);
      //  setCharacters(results);
      //  console.log(results);
   
      console.log(char.data.results);
      setCharacters(char.data.results as unknown as Character[]);
    };
    loadCharacters();
  }, []);
  
  return (
    <div className="pt-12 h-screen" style={{ background: `url(${characters[0]?.thumbnail?.path}.${characters[0]?.thumbnail?.extension})` }}>
      
      

      {params.id}</div> // Add null checks for the thumbnail property
  )
}

export default page