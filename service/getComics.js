'use server'

import { fetchFromMarvel } from './getCharacters'

export const fetchComics = async (id) => {
  // Newest issues first; signed the same way as the character list.
  return fetchFromMarvel(`characters/${id}/comics?orderBy=-onsaleDate`, 0)
}
