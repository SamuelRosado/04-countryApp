import { Country } from "./country";
import { region } from "./region.type";


export interface CacheStore{

  byCapital: TermCountries;
  byCountry: TermCountries;
  byRegion: RegionCountries
}

export interface TermCountries{

  term: string;
  countries: Country[];
}


export interface RegionCountries{

  region: region;
  countries: Country[]
}
