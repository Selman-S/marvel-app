'use server'

import md5 from 'md5'
import { character as characterDetail, characters as characterList } from '../utils/mockData'

const PAGE_SIZE = 30
const mockCharacters = characterList.data.results
let apiDownUntil = 0

function findMockCharacter(id) {
  return (
    mockCharacters.find((item) => item.id === id) ||
    characterDetail.data.results.find((item) => item.id === id)
  )
}

// Local Marvel payload used when the gateway is down or keys are missing.
function mockResults(endpoint, page) {
  const comicsMatch = String(endpoint).match(/^characters\/(\d+)\/comics/)
  if (comicsMatch) {
    const person = findMockCharacter(Number(comicsMatch[1]))
    if (!person) return []
    return (person.comics?.items || []).map((item, index) => ({
      id: Number(String(item.resourceURI).split('/').pop()) || index,
      title: item.name,
      description: '',
      thumbnail: person.thumbnail,
    }))
  }

  const oneMatch = String(endpoint).match(/^characters\/(\d+)/)
  if (oneMatch && !String(endpoint).startsWith('characters?')) {
    const person = findMockCharacter(Number(oneMatch[1]))
    return person ? [person] : []
  }

  const start = page * PAGE_SIZE
  return mockCharacters.slice(start, start + PAGE_SIZE)
}

function getKeys() {
  // Server-only names first so the private key is not shipped to the browser.
  const publicKey = process.env.MARVEL_PUBLIC_KEY || process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY
  const privateKey = process.env.MARVEL_PRIVATE_KEY || process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY
  return { publicKey, privateKey }
}

export async function fetchFromMarvel(endpoint, page = 0) {
  const { publicKey, privateKey } = getKeys()
  if (!publicKey || !privateKey || Date.now() < apiDownUntil) {
    return mockResults(endpoint, page)
  }

  try {
    const ts = Date.now()
    const hash = md5(`${ts}${privateKey}${publicKey}`)
    const url = new URL(`https://gateway.marvel.com/v1/public/${endpoint}`)
    url.searchParams.set('ts', String(ts))
    url.searchParams.set('apikey', publicKey)
    url.searchParams.set('hash', hash)
    url.searchParams.set('limit', String(PAGE_SIZE))
    url.searchParams.set('offset', String(page * PAGE_SIZE))

    const response = await fetch(url, { cache: 'no-store', signal: AbortSignal.timeout(4000) })
    const data = await response.json()

    if (!response.ok || data.code !== 200) {
      apiDownUntil = Date.now() + 60_000
      return mockResults(endpoint, page)
    }

    return data.data.results
  } catch {
    apiDownUntil = Date.now() + 60_000
    return mockResults(endpoint, page)
  }
}
