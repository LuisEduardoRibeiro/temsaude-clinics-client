import { createStore, Store, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { ClinicsState } from './clinics/types'
import { GeocodeState } from './geocode/types'
import { MapMarkerState } from './mapmarker/types'
import rootReducer from './rootReducer'
import rootSagas from './rootSagas'

export interface ClinicApplicationState {
    clinics: ClinicsState
}

export interface GeocodeApplicationState {
    geocode: GeocodeState
}

export interface MapMarkerApplicationState {
    mapmarker: MapMarkerState
}

export type ApplicationState = ClinicApplicationState | GeocodeApplicationState | MapMarkerApplicationState

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSagas)

export default store