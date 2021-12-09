import { call, put } from "@redux-saga/core/effects"
import { ServerResponse } from "http"
import GeocodeApi, { API_KEY } from '../../services/GeocodeApi'

import { geocodeSuccess, geocodeFailure } from './actions'
import { Geocode, GeocodeState } from "./types"

const getGeocode = (state: GeocodeState) => state.data

export function* loadGeocode(data: string) {
    try {
        const response: ReturnType<typeof getGeocode> = yield call(GeocodeApi.get, `/json?address=${encodeURI(data)}&key=${API_KEY}`)

        yield put(geocodeSuccess(response))
    }
    catch (e) {
        yield put(geocodeFailure())
    }
}
