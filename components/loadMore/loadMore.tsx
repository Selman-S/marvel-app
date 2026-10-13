'use client'
import { useEffect, useRef, useState } from 'react';
import { fetchFromMarvel } from '../../service/getCharacters';
import { Character } from '../../types/types';
import { useInView } from 'react-intersection-observer';
import LoadingSpinner from '../loadingSpinner/loadingSpinner';
import Characters from '../caracters/characters';

const PAGE_SIZE = 30;

const LoadMore = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const pageRef = useRef(1);
  const loadingRef = useRef(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView || !hasMore || loadingRef.current) return;

    let cancelled = false;
    loadingRef.current = true;
    const page = pageRef.current;

    const loadMoreCharacters = async () => {
      try {
        const newCharacters = (await fetchFromMarvel('characters', page)) ?? [];
        if (cancelled) return;
        pageRef.current = page + 1;
        setCharacters((prev) => [...prev, ...newCharacters]);
        setHasMore(newCharacters.length === PAGE_SIZE);
      } catch (error) {
        console.error(error);
        if (!cancelled) setHasMore(false);
      } finally {
        loadingRef.current = false;
      }
    };

    loadMoreCharacters();
    return () => {
      cancelled = true;
      loadingRef.current = false;
    };
  }, [inView, hasMore]);

  return (
    <>
      <Characters characters={characters} />
      {hasMore && (
        <div ref={ref} className="w-full flex justify-center items-center">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default LoadMore;
