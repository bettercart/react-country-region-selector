import * as React from 'react'
import countryRegionData from '@bettercart/country-region-data'

interface CRContextProps {
  children?: React.ReactNode
  data: typeof countryRegionData
}

const CRProviderContext = React.createContext({ data: countryRegionData })

const CRProvider = ({ children, data = countryRegionData }: CRContextProps) => {
  const value = { data }

  return <CRProviderContext.Provider value={value}>{children}</CRProviderContext.Provider>
}

export { CRProviderContext, CRProvider }
