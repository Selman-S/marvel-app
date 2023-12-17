'use server'

const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY

export const fetchComics = async id => {
  const url = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?orderBy=onsaleDate&apikey=${publicKey}`

  const response = await fetch(url)
  const data = await response.json()
  return data.data.results
}
