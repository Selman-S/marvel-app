"use client"

import { Character } from '@/types/types';
import { fetchFromMarvel } from '@/utils/marvelApi';
import React, { useEffect, useState } from 'react';
import { character as char } from '../../../utils/mockData'
import Image from 'next/image';

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
  console.log(characters[0]?.thumbnail?.path);

  if (!characters[0]) {
    return <div>error</div>
  } else {

    return (
      <>

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
                <div className="flex flex-col space-y-1">
                  <span className="text-palette-light">Comics</span>
                  <span className="text-palette-dark">{characters[0]?.comics?.items?.map((comic) => (
                    <div key={comic.name}>{comic.name}</div>
                  ))}</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-palette-light">Series</span>
                  <span className="text-palette-dark">{characters[0]?.series?.items?.map((serie) => (
                    <div key={serie.name}>{serie.name}</div>
                  ))}</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-palette-light">Stories</span>
                  <span className="text-palette-dark">{characters[0]?.stories?.items?.map((story) => (
                    <div key={story.name}>{story.name}</div>
                  ))}</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-palette-light">Events</span>
                  <span className="text-palette-dark">{characters[0]?.events?.items?.map((event) => (
                    <div key={event.name}>{event.name}</div>
                  ))}</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default page