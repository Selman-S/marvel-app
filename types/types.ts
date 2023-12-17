// types.ts
// Remove the import statement since 'Comic' is already defined in the same file.
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