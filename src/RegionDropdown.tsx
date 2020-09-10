import * as React from 'react'
import { CRProviderContext } from './CRProvider'
import { Region } from '@bettercart/country-region-data'
import { RegionDropdownProps } from '../index.d'
import { filterRegions } from './helpers'

const RegionDropdown = ({
  country = '',
  value = '',
  onChange,
  onBlur = () => {},
  className = '',
  blankOptionLabel = undefined,
  showDefaultOption = true,
  defaultOptionLabel = 'Select Region',
  disableWhenEmpty = false,
  whitelist = undefined,
  blacklist = undefined,
  disabled = false,
}: RegionDropdownProps) => {
  const { data } = React.useContext(CRProviderContext)

  const countryData = React.useMemo(() => {
    if (!country) return null

    return data.find(c => c.code === country)
  }, [data, country])

  const regions: Region[] = React.useMemo(() => {
    if (!countryData || !countryData.regions) return []

    return filterRegions(countryData, countryData.regions, whitelist, blacklist)
  }, [countryData])

  const attrs = {
    value,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>): void => onChange(e.target.value, e),
    onBlur: (e: React.ChangeEvent<HTMLSelectElement>): void => onBlur(e.target.value, e),
    disabled: disabled || (disableWhenEmpty && country === ''),
    className,
  }

  return (
    <select {...attrs}>
      {!country ? <option value="">{blankOptionLabel}</option> : null}
      {showDefaultOption ? <option value="">{defaultOptionLabel}</option> : null}
      {regions.map((region: Region) => {
        return (
          <option key={region.code} value={region.code}>
            {region.name}
          </option>
        )
      })}
    </select>
  )
}

export default RegionDropdown
