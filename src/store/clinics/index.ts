import { Reducer } from "redux"
import { ClinicsState, ClinicsTypes } from "./types"


const INITIAL_STATE: ClinicsState = {
    data: [],
    error: false,
    loading: false
}

const reducer: Reducer<ClinicsState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        /**
         * Load Clinics
         */
        case ClinicsTypes.LOAD_REQUEST:
            return { ...state, loading: true, data: action.payload }
        case ClinicsTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload }
        case ClinicsTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] }

        /**
         * Post Clinics
         */
        case ClinicsTypes.POST_REQUEST:
            return { ...state, loading: true, data: action.payload }
        case ClinicsTypes.POST_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload }
        case ClinicsTypes.POST_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
    }

    return state
}

export default reducer