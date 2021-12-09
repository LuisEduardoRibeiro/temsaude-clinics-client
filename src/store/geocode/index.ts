import { Reducer } from "redux"
import { GeocodeState, GeocodeTypes } from "./types"


const INITIAL_STATE: GeocodeState = {
    data: [],
    error: false,
    loading: false
}

const reducer: Reducer<GeocodeState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GeocodeTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case GeocodeTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload }
        case GeocodeTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
    }

    return state
}

export default reducer