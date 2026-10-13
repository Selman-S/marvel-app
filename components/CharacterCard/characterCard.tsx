import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Character } from '../../types/types';
import Image from 'next/image';
import Link from 'next/link';
import { marvelImage } from '@/utils/marvelImage';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const src = marvelImage(character.thumbnail?.path, character.thumbnail?.extension);

  return (
    <Link href={`/character/${character.id}`} className="block max-w-[345px] m-2">
      <Card>
        {src ? (
          <Image
            width={350}
            height={320}
            src={src}
            alt={character.name}
            className="h-80 w-full object-cover"
          />
        ) : null}
        <CardContent className="bg-marvel-red text-white">
          <div>{character.name}</div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CharacterCard;
