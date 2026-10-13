import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Comic } from '@/types/comic';
import Image from 'next/image';
import { Box } from '@mui/material';
import { marvelImage } from '@/utils/marvelImage';

export interface ComicI {
  comic: Comic;
}

const ComicCard = ({ comic }: ComicI) => {
  const src = marvelImage(comic.thumbnail?.path, comic.thumbnail?.extension);
  const description =
    comic.description && comic.description.length > 100
      ? `${comic.description.slice(0, 100)}...`
      : comic.description;

  return (
    <Box sx={{ bgcolor: 'transparent', display: 'flex', marginBottom: 4, gap: 2 }}>
      {src ? <Image src={src} alt={comic.title} width={120} height={180} className="object-cover shrink-0" /> : null}
      <CardContent sx={{ padding: 0 }}>
        <Typography gutterBottom variant="h6" component="div" className="text-white">
          {comic.title}
        </Typography>
        {description ? (
          <Typography variant="body2" className="text-white">
            {description}
          </Typography>
        ) : null}
      </CardContent>
    </Box>
  );
};

export default ComicCard;
