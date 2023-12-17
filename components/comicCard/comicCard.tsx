import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Comic } from '@/types/comic';
import Image from 'next/image';
import { Box } from '@mui/material';

export interface ComicI {
  comic: Comic
}



const ComicCard = ({ comic }: ComicI) => {
  console.log(comic)
  return (
    <Box sx={{ cursor: "pointer", bgcolor: 'transparent', maxHeight: 200, display: 'flex', marginBottom: 4 }} >
      <Image
        unoptimized
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
        width={200}
        height={200}


      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='text-white ' style={{ fontFamily: 'orbitron' }}>
          {comic.title}
        </Typography>
        <Typography variant="body2" className='text-white ' style={{ fontFamily: 'orbitron' }} >
          {comic.description && comic.description.length > 100 ? comic.description.slice(0, 100) + '...' : comic.description}
        </Typography>
      </CardContent>

    </Box>
  )
}

export default ComicCard



