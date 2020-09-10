import * as React from 'react'
import { CRProviderContext } from './CRProvider'
import { Country } from '@bettercart/country-region-data'
import { CountryDropdownProps } from '../index.d'
import { filterCountries } from './helpers'

const CountryDropdown = ({
  value = '',
  onChange,
  onBlur = () => {},
  className = '',
  showDefaultOption = true,
  priorityOptions = [],
  whitelist = [],
  blacklist = [],
  defaultOptionLabel = 'Select Country',
  disabled = false,
  ...arbitraryProps
}: CountryDropdownProps) => {
  const { data } = React.useContext(CRProviderContext)

  const countries = filterCountries(data, priorityOptions, whitelist, blacklist)

  const attrs = {
    ...arbitraryProps,
    value,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>): void => onChange(e.target.value, e),
    onBlur: (e: React.ChangeEvent<HTMLSelectElement>): void => onBlur(e.target.value, e),
    disabled,
    className,
  }

  return (
    <select {...attrs}>
      {showDefaultOption ? (
        <option value="" key="default">
          {defaultOptionLabel}
        </option>
      ) : null}
      {countries.map((country: Country) => {
        return (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        )
      })}
    </select>
  )
}

export default CountryDropdown
