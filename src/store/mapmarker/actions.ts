import { action } from 'typesafe-actions'
import { MapMarkerTypes, MapMarker } from './types'


export const mapMarkerRequest = (data: MapMarker[]) => action(MapMarkerTypes.LOAD_REQUEST, data)

export const mapMarkerSuccess = (data: MapMarker[]) => action(MapMarkerTypes.LOAD_SUCCESS, data)

export const mapMarkerFailure = () => action(MapMarkerTypes.LOAD_FAILURE)
