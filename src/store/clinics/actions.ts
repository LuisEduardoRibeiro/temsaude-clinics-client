import { action } from 'typesafe-actions'
import { LoadClinicsParams } from './sagas'
import { ClinicsTypes, Clinic } from './types'


export const loadRequest = (params: LoadClinicsParams) => action(ClinicsTypes.LOAD_REQUEST, params)

export const loadSuccess = (data: Clinic[]) => action(ClinicsTypes.LOAD_SUCCESS, data)

export const loadFailure = () => action(ClinicsTypes.LOAD_FAILURE)


export const postRequest = (data: Clinic) => action(ClinicsTypes.POST_REQUEST, data)

export const postSuccess = (data: Clinic[]) => action(ClinicsTypes.POST_SUCCESS, data)

export const postFailure = () => action(ClinicsTypes.POST_FAILURE)