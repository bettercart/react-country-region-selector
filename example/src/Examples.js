import React, { useState } from 'react'
import { CRProvider, CountryDropdown, RegionDropdown } from '@bettercart/react-country-region-selector'

const Examples = () => {
  const [country, setCountry] = useState('US')
  const [region, setRegion] = useState('IL')

  return (
    <>
      <div>
        <CountryDropdown value={country} onChange={e => setCountry(e)} />
        <RegionDropdown country={country} value={region} onChange={e => setRegion(e)} />
      </div>

      <div>
        <CountryDropdown value={country} onChange={e => setCountry(e)} />
        <RegionDropdown country={country} value={region} onChange={e => setRegion(e)} disableWhenEmpty={true} />
      </div>

      <div>
        <CountryDropdown value={country} onChange={e => setCountry(e)} showDefaultOption={false} />
        <RegionDropdown country={country} value={region} onChange={e => setRegion(e)} showDefaultOption={false} />
      </div>

      <div>
        <CountryDropdown value={country} onChange={e => setCountry(e)} defaultOptionLabel="Select a country, man." />
        <RegionDropdown
          country={country}
          value={region}
          onChange={e => setRegion(e)}
          blankOptionLabel="No country selected, man."
          defaultOptionLabel="Now select a region, pal."
        />
      </div>

      <div>
        <CountryDropdown value={country} onChange={e => setCountry(e)} whitelist={['GB', 'US', 'CA']} />
        <RegionDropdown country={country} value={region} onChange={e => setRegion(e)} />
      </div>

      <div>
        <CountryDropdown
          value={country}
          onChange={e => setCountry(e)}
          blacklist={['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ']}
        />
        <RegionDropdown country={country} value={region} onChange={e => setRegion(e)} />
      </div>

      <div>
        <CountryDropdown
          value={country}
          onChange={e => setCountry(e)}
          blacklist={['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ']}
          disabled={true}
        />
        <RegionDropdown country={country} value={region} onChange={e => setRegion(e)} disabled={true} />
      </div>

      <div>
        <CountryDropdown value={country} onChange={e => setCountry(e)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={e => setRegion(e)}
          blacklist={{
            CA: ['Alberta'],
            US: ['Washington', 'Oregon'],
          }}
        />
      </div>

      <div>
        <CountryDropdown value={country} onChange={e => setCountry(e)} whitelist={['CA', 'US']} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={e => setRegion(e)}
          whitelist={{
            CA: ['BC', 'AB', 'MB'],
            US: ['Washington', 'Oregon', 'Illinois'],
          }}
        />
      </div>

      <div>
        <CountryDropdown
          value={country}
          onChange={e => setCountry(e)}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            fontSize: 20,
          }}
          tabIndex={1000}
        />
        <RegionDropdown
          country={country}
          value={region}
          onChange={e => setRegion(e)}
          style={{
            backgroundColor: 'green',
            color: 'white',
          }}
          tabIndex={1001}
        />
      </div>

      <div>
        <CountryDropdown value={country} onChange={e => setCountry(e)} priorityOptions={['CA', 'US', 'GB']} />
        <RegionDropdown country={country} value={region} onChange={e => setRegion(e)} />
      </div>

      <div>
        <CRProvider
          data={[
            {
              name: 'United States',
              code: 'US',
              regions: [{ name: 'Illinois', code: 'IL' }],
            },
          ]}>
          <CountryDropdown
            className="w-full"
            value={country}
            onChange={e => setCountry(e)}
            showDefaultOption={false}
            priorityOptions={['US', 'CA', 'GB']}
          />
          <RegionDropdown
            className="h-full"
            country={country}
            value={region}
            whitelist={{ US: ['CA', 'IL'] }}
            blacklist={{ CA: ['MB'] }}
            onChange={e => setRegion(e)}
          />
        </CRProvider>
      </div>

      <div>
        {country} - {region}
      </div>
    </>
  )
}

export default Examples
