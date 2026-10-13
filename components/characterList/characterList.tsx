'use client'
import { useEffect, useState } from 'react';
import { fetchFromMarvel } from '../../service/getCharacters';
import Grid from '@mui/material/Grid';
import { Character } from '../../types/types';
import { Box, Skeleton } from '@mui/material';
import Characters from '../caracters/characters';
import LoadMore from '../loadMore/loadMore';

const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let cancelled = false;

    const loadCharacters = async () => {
      try {
        const firstPage = await fetchFromMarvel('characters', 0);
        if (cancelled) return;
        setCharacters(firstPage ?? []);
      } catch (err) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : 'Could not load characters.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadCharacters();
    return () => {
      cancelled = true;
    };
  }, []);

  const placeholders = Array.from({ length: 8 }, (_, i) => i);

  if (error) {
    return (
      <Box className="bg-white p-8 rounded mb-12 min-h-[40vh] text-center max-w-xl">
        <p className="text-lg font-semibold text-black">Could not load characters</p>
        <p className="mt-2 text-sm text-neutral-700">{error}</p>
      </Box>
    );
  }

  return (
    <>
      {!loading ? (
        <Box>
          <Grid container justifyContent="center" className="bg-white p-4 rounded mb-12 min-h-screen">
            <Characters characters={characters} />
            <LoadMore />
          </Grid>
        </Box>
      ) : (
        <Grid container justifyContent="center" className="bg-white p-4 rounded mb-12 min-h-screen">
          {placeholders.map((item) => (
            <Grid item key={item} xs={12} sm={6} md={4} lg={3}>
              <Skeleton variant="rectangular" sx={{ maxWidth: 345, m: 2 }} height={400} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default CharacterList;
