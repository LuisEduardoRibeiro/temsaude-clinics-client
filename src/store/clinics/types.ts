export enum ClinicsTypes {
    LOAD_REQUEST = '@clinics/LOAD_REQUEST',
    LOAD_SUCCESS = '@clinics/LOAD_SUCCESS',
    LOAD_FAILURE = '@clinics/LOAD_FAILURE',
    POST_REQUEST = '@clinics/POST_REQUEST',
    POST_SUCCESS = '@clinics/POST_SUCCESS',
    POST_FAILURE = '@clinics/POST_FAILURE',
}

export interface Clinic {
    id?: number,
    ds_name: string,
    ds_cnpj: string,
    ds_logradouro?: string,
    ds_numero?: string,
    ds_complemento?: string,
    ds_bairro?: string,
    ds_cidade?: string,
    ds_estado?: string,
    ds_pais?: string,
    ds_latitude?: string,
    ds_longitude?: string
}

export interface ClinicsState {
    readonly data: Clinic[],
    readonly loading: boolean,
    readonly error: boolean
}

