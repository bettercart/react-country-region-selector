import { Country, Region } from '@bettercart/country-region-data'
import { RegionFilters } from '../index.d'

export const filterCountries = (
  countries: Country[],
  priorityCountries: string[],
  whitelist: string[],
  blacklist: string[]
): Country[] => {
  let countriesListedFirst: Country[] = []
  let filteredCountries: Country[] = countries

  if (whitelist.length > 0) {
    filteredCountries = countries.filter(country => whitelist.includes(country.code))
  } else if (blacklist.length > 0) {
    filteredCountries = countries.filter(country => !blacklist.includes(country.code))
  }

  if (priorityCountries.length > 0) {
    priorityCountries.forEach(code => {
      const result = filteredCountries.find(country => country.code === code)
      if (result) {
        countriesListedFirst.push(result)
      }
    })

    filteredCountries = filteredCountries.filter(country => !priorityCountries.includes(country.code))
  }

  return countriesListedFirst.length ? [...countriesListedFirst, ...filteredCountries] : filteredCountries

  return countries
}

export const filterRegions = (
  country: Country,
  regions: Region[],
  whitelist?: RegionFilters,
  blacklist?: RegionFilters
): Region[] => {
  if (whitelist && Object.keys(whitelist).length > 0 && whitelist[country.code]) {
    return regions.filter(region => whitelist[country.code].includes(region.code))
  } else if (blacklist && Object.keys(blacklist).length > 0 && blacklist[country.code]) {
    return regions.filter(region => !blacklist[country.code].includes(region.code))
  }

  return regions
}
