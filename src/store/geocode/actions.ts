import { action } from 'typesafe-actions'
import { GeocodeTypes, Geocode } from './types'

export const geocodeRequest = (data: string) => action(GeocodeTypes.LOAD_REQUEST, { data })

export const geocodeSuccess = (data: Geocode[]) => action(GeocodeTypes.LOAD_SUCCESS, { data })

export const geocodeFailure = () => action(GeocodeTypes.LOAD_FAILURE)