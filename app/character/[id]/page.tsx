"use client"

import { Character } from '@/types/types';
import { fetchFromMarvel } from '@/service/getCharacters';
import React, { useEffect, useState } from 'react';
import { character as char } from '../../../utils/mockData'
import Image from 'next/image';
import { Box, Grid, Skeleton } from '@mui/material';
import { fetchComics } from './../../../service/getComics';
import { Comic } from '@/types/comic';
import ComicCard from '@/components/comicCard/comicCard';

interface PageProps {
  params: {
    id: string;
  };
}

const page = ({ params }: PageProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [comics, setComics] = useState<Comic[]>([]);

  const getComics = async () => {
    const key = 'characters/' + params.id + '/comics'
    const results = await fetchFromMarvel(key);
    setComics(results);
    console.log(results);
  }

  useEffect(() => {
    const loadCharacters = async () => {
      const key = 'characters/' + params.id
      const results = await fetchFromMarvel(key);
      setCharacters(results);
      console.log(results);
      getComics();
      // console.log(char.data.results);
      // setCharacters(char.data.results as unknown as Character[]);
    };
    loadCharacters();




  }, []);
  console.log(characters[0]?.thumbnail?.path);



  return (
    <>
      {characters[0] ?
        <div className=" mt-16 py-12 container mx-auto text-white min-h-[calc(100vh-124px)] ">

          <div className="characterPoster">
            <div className="characterPosterOverlay"></div>
            <Image
              unoptimized
              src={`${characters[0].thumbnail.path}.${characters[0].thumbnail.extension}`}
              alt={characters[0].name}

              fill
            />
          </div>
          <div className="flex flex-col  items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8  w-11/12 mx-auto">
            <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">

              <Image
                className="h-auto   object-cover "
                width="500"
                height="500"

                src={`${characters[0]?.thumbnail?.path}.${characters[0]?.thumbnail?.extension}`}
                alt={characters[0]?.name}
              />
            </div>
            <div className="flex flex-col justify-between h-full w-full md:w-1/2  mx-auto space-y-4 min-h-128">
              <h1 className='text-2xl'>{characters[0]?.name}</h1>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-1">
                  <p className="text-palette-dark">{characters[0]?.description}</p>
                </div>

                {comics[0] ? (
                  <div className="flex flex-col space-y-1">
                    <span className="mt-4 text-2xl">Comics</span>
                    <Grid className=' p-4 rounded mb-12 border'>

                      {comics.map((comic) => {
                        console.log(comic)
                        return (
                          <ComicCard comic={comic} />
                        )
                      }
                      )}
                    </Grid>
                  </div>

                )
                  :
                  <div className="flex flex-col space-y-1">
                    <span className="text-palette-light">Comics</span>
                    <span className="text-palette-dark">No comics found</span>
                  </div>
                }


              </div>
            </div>
          </div>
        </div>
        :

        <div className=" mt-16 py-12 container mx-auto text-white min-h-[calc(100vh-124px)] ">

          <Skeleton variant="rectangular" sx={{ maxWidth: 400, m: 2, with: 1 }} height={400} />



        </div>

      }
    </>
  )

}

export default page