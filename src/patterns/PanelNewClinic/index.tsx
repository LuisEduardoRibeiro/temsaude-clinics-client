import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { H1, CloseButton } from './styles'
import { Button } from '../../styles/global'
import Panel from '../../components/Panel'
import Input from '../../components/Input'
import InputButton from '../../components/InputButton'
import Geocode from '../../services/Geocode'
import { Clinic } from '../../store/clinics/types'
import * as ClinicsActions from '../../store/clinics/actions'
import * as MapMarkerActions from '../../store/mapmarker/actions'
import { Address } from '../../store/geocode/types'
import { ClinicApplicationState } from '../../store'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { MapMarker } from '../../store/mapmarker/types'

interface StateProps {
    clinics?: Clinic[],
    isSaving?: boolean
}

interface DispatchProps {
    postRequest?(data: Clinic): void,
    mapMarkerRequest?(data: MapMarker[]): void
}

type Props = StateProps & DispatchProps

const PanelNewClinic: React.FC<Props> = (props) => {
    const [hideInputs, setHideInputs] = useState(false)
    const { register, handleSubmit, watch, setValue, setError, reset, formState: { errors } } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
    })
    const [loadingEndereco, setLoadingEndereco] = useState(false)
    const [geoEndereco, setGeoEndereco] = useState<Address>()


    const toggleInputs = () => {
        setHideInputs(!hideInputs)
    }


    const buscarEndereco = () => {
        const endereco = watch('ds_endereco')
        setLoadingEndereco(true)
        setTimeout(() => {
            Geocode.getByAddress(endereco)
                .then((values) => {
                    setLoadingEndereco(false)
                    console.log(values)
                    if (values && values.length > 0) {
                        const { address, location } = values[0]
                        console.log(address, location)
                        setGeoEndereco(address)
                        setValue('ds_lat', location.lat)
                        setValue('ds_long', location.lng)

                        if (props.mapMarkerRequest) {
                            props.mapMarkerRequest([{
                                position: location,
                                draggable: true,
                                popText: endereco
                            }])
                        }
                    }
                })
        }, 1000)
    }

    const salvarClinica = (data: Clinic) => {
        console.log('salvarClinica - data: ', data)
        if (!geoEndereco) {
            setError("ds_endereco", {
                type: "manual",
                message: "É necessário preencher o endereço e clicar em BUSCAR",
            })
        }
        else {
            const clinic: Clinic = {
                ds_name: watch('ds_nome'),
                ds_cnpj: watch('ds_cnpj'),
                ds_logradouro: geoEndereco.ds_logradouro,
                ds_numero: geoEndereco.ds_numero,
                ds_bairro: geoEndereco.ds_bairro,
                ds_cidade: geoEndereco.ds_cidade,
                ds_estado: geoEndereco.ds_estado,
                ds_pais: geoEndereco.ds_pais,
                ds_latitude: watch('ds_lat'),
                ds_longitude: watch('ds_long'),
            }

            console.log("salvarClinica: ", clinic)

            if (props.postRequest) {
                console.log("postRequest: Enviou")
                props.postRequest(clinic)

                reset();
            }
        }

        return false
    }

    return (
        <Panel>
            {
                !hideInputs
                && <>
                    <CloseButton onClick={toggleInputs} className={`${!hideInputs ? 'md:hidden' : ''}`} />

                    <H1 className={`mb-3 font-bold text-center text-gray-400`}>
                        CADASTRO DE CLÍNICAS
                    </H1>
                </>
            }
            {
                hideInputs
                &&
                <Button className={`mb-3 font-bold text-center text-gray-400 w-full`} onClick={toggleInputs}>
                    CADASTRAR CLÍNICAS
                </Button>
            }

            <form className={!hideInputs ? 'block' : 'hidden'} onSubmit={handleSubmit(salvarClinica)}>

                <Input placeholder="Nome da Clínica" {...register('ds_nome', { required: 'Campo obrigatório' })} errorMessage={errors.ds_nome?.message} />

                <Input placeholder="CNPJ" {...register('ds_cnpj', { required: 'Campo obrigatório' })} errorMessage={errors.ds_cnpj?.message} />

                <InputButton
                    props={{ 'className': 'mb-5' }}
                    propsInput={{
                        'placeholder': 'ENDEREÇO',
                        'autoComplete': 'nope',
                        'errorMessage': errors?.ds_endereco?.message,
                        ...register('ds_endereco', { required: 'Campo obrigatório' })
                    }}
                    propsButton={{
                        'children': !loadingEndereco ? `BUSCAR` : 'Buscando...',
                        'btnDisabled': loadingEndereco,
                        'onClick': buscarEndereco,
                    }}
                />

                <div className="flex gap-3 justify-center">

                    <div className="w-20">
                        <Input placeholder="LAT" className="text-center" readOnly={true} {...register('ds_lat')} />
                    </div>

                    <div className="w-20">
                        <Input placeholder="LONG" className="text-center" readOnly={true} {...register('ds_long')} />
                    </div>

                </div>

                <div className="text-center">
                    <Button className="m-3" type="submit" disabled={props.isSaving}>
                        CADASTRAR
                    </Button>
                </div>

            </form>
        </Panel>
    )
}

const mapStateToProps = (state: ClinicApplicationState) => ({
    clinics: state.clinics.data,
    isSaving: state.clinics.loading
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ ...ClinicsActions, ...MapMarkerActions }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(PanelNewClinic)