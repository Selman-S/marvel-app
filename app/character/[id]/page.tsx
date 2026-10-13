import { fetchFromMarvel } from '@/service/getCharacters';
import Image from 'next/image';
import { Grid } from '@mui/material';
import { fetchComics } from '@/service/getComics';
import { Comic } from '@/types/comic';
import { Character } from '@/types/types';
import ComicCard from '@/components/comicCard/comicCard';
import { marvelImage } from '@/utils/marvelImage';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CharacterPage({ params }: PageProps) {
  const { id } = await params;

  let character: Character | undefined;
  let comics: Comic[] = [];
  let error = '';

  try {
    const [results, comicResults] = await Promise.all([
      fetchFromMarvel(`characters/${id}`),
      fetchComics(id),
    ]);
    character = results?.[0];
    comics = comicResults ?? [];
  } catch (err) {
    error = err instanceof Error ? err.message : 'Could not load this character.';
  }

  if (error || !character) {
    return (
      <div className="mt-16 py-12 container mx-auto text-white min-h-[calc(100vh-124px)]">
        <p className="text-xl">{error || 'Character not found.'}</p>
      </div>
    );
  }

  const poster = marvelImage(character.thumbnail?.path, character.thumbnail?.extension);

  return (
    <div className=" mt-16 py-12 container mx-auto text-white min-h-[calc(100vh-124px)] ">
      <div className="characterPoster">
        <div className="characterPosterOverlay"></div>
        {poster ? <Image unoptimized src={poster} alt={character.name} fill /> : null}
      </div>
      <div className="relative z-10 flex flex-col items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 w-11/12 mx-auto">
        <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
          {poster ? (
            <Image className="h-auto object-cover" width={500} height={500} src={poster} alt={character.name} />
          ) : null}
        </div>
        <div className="flex flex-col justify-between h-full w-full md:w-1/2  mx-auto space-y-4 min-h-128">
          <h1 className="text-2xl">{character.name}</h1>
          <div className="flex flex-col space-y-2">
            <p className="text-palette-dark">{character.description || 'No description.'}</p>
            {comics.length > 0 ? (
              <div className="flex flex-col space-y-1">
                <span className="mt-4 text-2xl">Comics</span>
                <Grid className=" p-4 rounded mb-12 border">
                  {comics.map((comic) => (
                    <ComicCard key={comic.id} comic={comic} />
                  ))}
                </Grid>
              </div>
            ) : (
              <div className="flex flex-col space-y-1">
                <span className="text-palette-light">Comics</span>
                <span className="text-palette-dark">No comics found</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
