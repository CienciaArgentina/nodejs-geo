import { getCitiesByStateId, getCountriesDb, getLocalitiesByCityId, getStatesByCountryId } from './repository';
import { Country, State, Locality, City } from './models/db';

export const getCountries = async (): Promise<Country[]> => {
  const countries = await getCountriesDb();
  return countries;
};

export const getStates = async (id: string): Promise<State[]> => {
  return await getStatesByCountryId(+id);
};

export const getCities = async (id: string): Promise<City[]> => {
  return await getCitiesByStateId(+id);
};

export const getLocalities = async (id: string): Promise<Locality[]> => {
  return await getLocalitiesByCityId(+id);
};
