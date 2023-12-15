import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Character } from '../../types/types'; // Assuming you have a Character type defined
import Image from 'next/image';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea>
        <Image
          width={350}
          height={200}
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className='h-80'
        />
        <CardContent className='bg-red text-white ' >
          <div>
            {character.name}
          </div>
          {/* You can add more character details here */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;