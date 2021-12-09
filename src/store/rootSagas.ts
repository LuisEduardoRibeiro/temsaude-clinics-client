import { all, takeLatest } from 'redux-saga/effects'

import { ClinicsTypes } from './clinics/types'
import { loadClinics, postClinics } from './clinics/sagas'
import { MapMarkerTypes } from './mapmarker/types'
import { postMapMarker } from './mapmarker/sagas'

export default function* rootSagas(): any {
    return yield all([
        takeLatest(ClinicsTypes.LOAD_REQUEST, loadClinics),
        takeLatest(ClinicsTypes.POST_REQUEST, postClinics),
        takeLatest(MapMarkerTypes.LOAD_REQUEST, postMapMarker),
    ])
}