import { call, put } from "@redux-saga/core/effects"
import TemsaudeApi from '../../services/TemsaudeApi'

import { loadSuccess, loadFailure, postSuccess, postFailure } from './actions'
import { Clinic, ClinicsState, ClinicsTypes } from "./types"

const getClinics = ({ data }: ResponseClinics) => data

interface loadClinicsData {
    data: ClinicsState
}

interface ResponseClinics {
    data: loadClinicsData
}

export type LoadClinicsParams = {
    type: typeof ClinicsTypes.POST_REQUEST,
    payload: any
}
export function* loadClinics({ payload }: LoadClinicsParams) {
    try {
        const response: ReturnType<typeof getClinics> = yield call(TemsaudeApi.get, '/clinics/' + encodeURI(payload.endereco))

        yield put(loadSuccess(response.data.data))
    }
    catch (e) {
        yield put(loadFailure())
    }
}


export type PostClinicsParams = {
    type: typeof ClinicsTypes.POST_REQUEST,
    payload: Clinic
}
export function* postClinics({ payload }: PostClinicsParams) {
    try {
        const response: ReturnType<typeof getClinics> = yield call(TemsaudeApi.post, 'clinics', payload)

        yield put(postSuccess(response.data.data))
    }
    catch (e) {
        yield put(postFailure())
    }
}