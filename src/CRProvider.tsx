import * as React from 'react'
import CountryRegionData from '@bettercart/country-region-data'

interface CRContextProps {
  children?: React.ReactNode
  data: typeof CountryRegionData
}

const CRProviderContext = React.createContext({ data: CountryRegionData })

const CRProvider = ({ children, data = CountryRegionData }: CRContextProps) => {
  const value = { data }

  return <CRProviderContext.Provider value={value}>{children}</CRProviderContext.Provider>
}

export { CRProviderContext, CRProvider }
