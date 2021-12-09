import { Reducer } from "redux"
import { MapMarkerState, MapMarkerTypes } from "./types"


const INITIAL_STATE: MapMarkerState = {
    data: [],
    error: false,
    loading: false
}

const reducer: Reducer<MapMarkerState> = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case MapMarkerTypes.LOAD_REQUEST:
            return { ...state, loading: true, data: action.payload }
        case MapMarkerTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload }
        case MapMarkerTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
    }

    return state
}

export default reducer