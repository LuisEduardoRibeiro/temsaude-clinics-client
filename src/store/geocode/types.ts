export enum GeocodeTypes {
    LOAD_REQUEST = '@geocode/LOAD_REQUEST',
    LOAD_SUCCESS = '@geocode/LOAD_SUCCESS',
    LOAD_FAILURE = '@geocode/LOAD_FAILURE'
}

export interface Address {
    ds_logradouro?: string,
    ds_numero?: string,
    ds_complemento?: string,
    ds_bairro?: string,
    ds_cidade?: string,
    ds_estado?: string,
    ds_pais?: string
}

export interface Location {
    ds_lat: string,
    ds_lgn: string
}

export interface Geocode {
    address: Address,
    location: Location
}

export interface GeocodeState {
    readonly data: Geocode[],
    readonly loading: boolean,
    readonly error: boolean
}
