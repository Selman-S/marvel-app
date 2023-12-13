import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Character } from '../../types/types'; // Assuming you have a Character type defined

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {character.name}
          </Typography>
          {/* You can add more character details here */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;