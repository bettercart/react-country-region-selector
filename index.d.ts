import * as React from 'react'
import { Country } from '@bettercart/country-region-data'

export const CountryRegionData: Country[]

export interface CountryDropdownProps<T = Element> {
  /**
   * The currently selected country. This should either
   * be the shortcode, or the full country name depending
   * on what you're using for your value attribute
   * (see the valueType option). By default it's the full country name.
   *
   * Default value: ""
   */
  value: string

  /**
   * Callback that gets called when the user selects a country. Use
   * this to store the value in whatever store you're
   * using (or just the parent component state).
   *
   * The original event is also provided optionally.
   *
   * Default value: undefined
   */
  onChange: (val: string, e?: React.ChangeEvent<T>) => void

  /**
   * Callback that gets called when the user blurs off the country field.
   *
   * The original event is also provided optionally.
   *
   * Default value: undefined
   */
  onBlur?: (val: string, e?: React.ChangeEvent<T>) => void

  /**
   * Any additional space-separated classes you want to add.
   *
   * Default value: ""
   */

  className?: string

  /**
   *  Whether you want to show a default option.
   *
   * Default value: true
   */
  showDefaultOption?: boolean

  /**
   * Lets you target countries that should appear at the top
   * of the dropdown. Should also be an array of country shortcodes.
   *
   * Default value: array
   */
  priorityOptions?: string[]

  /**
   * The default option label.
   *
   * Default value: "Select Country"
   */
  defaultOptionLabel?: string

  /**
   * This setting lets you target specific countries to appear
   * in the dropdown. Only those specified here will appear.
   * This should be an array of country shortcodes. See the
   * country-region-data repo for the data and the shortcodes.
   *
   * Default value: []
   */
  whitelist?: string[]

  /**
   * Lets you target countries that should not appear in the
   * dropdown. Should also be an array of country shortcodes.
   *
   * Default value: []
   */
  blacklist?: string[]

  /**
   * Disables the country field.
   *
   * Default value: false
   */
  disabled?: boolean
}

export class CountryDropdown extends React.Component<CountryDropdownProps> {}

export interface RegionFilters {
  [key: string]: string[]
}

export interface RegionDropdownProps<T = Element> {
  /**
   * The currently selected country.
   *
   * Default value: ""
   */
  country: string

  /**
   * The currently selected region.
   *
   * Default value: ""
   */
  value: string

  /**
   * Callback that gets called when the user selects a region.
   * Use this to store the value in whatever store you're
   * using (or just the parent component state).
   *
   * The original event is also provided optionally.
   *
   * Default value: undefined
   */
  onChange: (val: string, e?: React.ChangeEvent<T>) => void

  /**
   * Callback that gets called when the user blurs off the region field.
   *
   * The original event is also provided optionally.
   *
   * Default value: undefined
   */
  onBlur?: (val: string, e?: React.ChangeEvent<T>) => void

  /**
   * Any additional space-separated classes you want to add.
   *
   * Default value: ""
   */
  className?: string

  /**
   * The label that appears in the region dropdown when the user
   * hasn't selected a country yet.
   *
   * Default value: undefined
   */
  blankOptionLabel?: string

  /**
   * Whether you want to show a default option. This is what the
   * user sees in the region dropdown after selecting a country.
   * It defaults to the defaultOptionLabel setting (see next).
   *
   * Default value: true
   */
  showDefaultOption?: boolean

  /**
   * string	The default region option.
   *
   * Default value: "Select Region"
   */
  defaultOptionLabel?: string

  /**
   * Disables the region field when the user hasn't selected a country.
   *
   * Default value: false
   */
  disableWhenEmpty?: boolean

  /**
   * Disables the region field. If set to true, it overrides disableWhenEmpty
   *
   * Default value: false
   */
  disabled?: boolean

  /**
   * This setting lets you target specific regions to appear
   * in the dropdown. Only those specified here will appear.
   * This should be an object with a key as the country code
   * and an array of thats countries regions.
   *
   * Default value: undefined
   */
  whitelist?: RegionFilters

  /**
   * Lets you target regions that should not appear in the
   * dropdown. This should be an object with a key as the
   * country code and an array of thats countries regions.
   *
   * Default value: undefined
   */
  blacklist?: RegionFilters

  /**
   * Appends a list of string to the every region dropdown,
   * regardless of the country selected.
   *
   * Default value: []
   */
  customOptions?: string[]
}

export class RegionDropdown extends React.Component<RegionDropdownProps> {}
