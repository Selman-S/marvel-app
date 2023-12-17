// types.ts
export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: { path: string; extension: string };
  resourceURI: string;
  comics: CharacterCategory;
  series: CharacterCategory;
  stories: CharacterCategory;
  events: CharacterCategory;
  urls: [{ type: string; url: string }];
  [index: string]:
    | CharacterCategory
    | string
    | number
    | Record<string, unknown>
    | Record<string, unknown>[];
}

export interface CharacterCategory {
  available: number;
  collectionURI: string;
  items: [{ resourceURI: string; name: string; type?: string }];
  returned: number;
}


export interface Comic {
  id: number;
  title: string;
  // Add other fields as necessary
}

export interface Root {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: TextObject[]
  resourceURI: string
  urls: Url[]
  series: Series
  variants: any[]
  collections: any[]
  collectedIssues: any[]
  dates: Date[]
  prices: Price[]
  thumbnail: Thumbnail
  images: Image[]
  creators: Creators
  characters: Characters
  stories: Stories
  events: Events
}

export interface TextObject {
  type: string
  language: string
  text: string
}

export interface Url {
  type: string
  url: string
}

export interface Series {
  resourceURI: string
  name: string
}

export interface Date {
  type: string
  date: string
}

export interface Price {
  type: string
  price: number
}

export interface Thumbnail {
  path: string
  extension: string
}

export interface Image {
  path: string
  extension: string
}

export interface Creators {
  available: number
  collectionURI: string
  items: Item[]
  returned: number
}

export interface Item {
  resourceURI: string
  name: string
  role: string
}

export interface Characters {
  available: number
  collectionURI: string
  items: Item2[]
  returned: number
}

export interface Item2 {
  resourceURI: string
  name: string
}

export interface Stories {
  available: number
  collectionURI: string
  items: Item3[]
  returned: number
}

export interface Item3 {
  resourceURI: string
  name: string
  type: string
}

export interface Events {
  available: number
  collectionURI: string
  items: any[]
  returned: number
}
