import { Country, State, Locality, City } from './models/db';

export const getCountriesDb = async (): Promise<Country[]> => {
  return await Country.query().orderBy('name');
};

export const getStatesByCountryId = async (countryId: number): Promise<State[]> => {
  return await State.query().where({ country_id: countryId });
};

export const getCitiesByStateId = async (stateId: number): Promise<City[]> => {
  return await City.query().where({ state_id: stateId });
};

export const getLocalitiesByCityId = async (cityId: number): Promise<Locality[]> => {
  return await Locality.query().where({ city_id: cityId });
};
