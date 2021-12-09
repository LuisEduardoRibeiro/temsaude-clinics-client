export enum MapMarkerTypes {
    LOAD_REQUEST = '@mapmarker/LOAD_REQUEST',
    LOAD_SUCCESS = '@mapmarker/LOAD_SUCCESS',
    LOAD_FAILURE = '@mapmarker/LOAD_FAILURE',
}

export interface MapPosition {
    lat: number,
    lng: number
}

export interface MapMarker {
    position: MapPosition,
    popText: string,
    draggable: boolean
}

export interface MapMarkerState {
    readonly data: MapMarker[],
    readonly loading: boolean,
    readonly error: boolean
}