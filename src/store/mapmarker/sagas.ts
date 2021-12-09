import { put } from "redux-saga/effects"
import { mapMarkerFailure, mapMarkerSuccess } from "./actions"
import { MapMarker, MapMarkerTypes } from "./types"


export type PostMapMarkerParams = {
    type: typeof MapMarkerTypes.LOAD_REQUEST,
    payload: MapMarker[]
}
export function* postMapMarker({ payload }: PostMapMarkerParams) {
    try {
        yield put(mapMarkerSuccess(payload))
    }
    catch (e) {
        yield put(mapMarkerFailure())
    }
}