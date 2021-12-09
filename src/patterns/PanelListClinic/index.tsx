import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Panel from '../../components/Panel'
import { ClinicApplicationState } from '../../store'
import { Clinic } from '../../store/clinics/types'
import * as MapMarkerActions from '../../store/mapmarker/actions'
import { useEffect } from 'react'
import { MapMarker } from '../../store/mapmarker/types'

interface StateProps {
    clinics: Clinic[],
    loading: boolean
}

interface DispatchProps {
    mapMarkerRequest?(data: MapMarker[]): void
}

type Props = StateProps & DispatchProps

const PanelListClinic: React.FC<Props> = (props) => {

    const clinicsRef = useRef([])
    const { clinics, loading } = props

    useEffect(() => {
        clinicsRef.current = clinicsRef.current.slice(0, clinics.length);
    }, [clinics]);


    if (!clinics || clinics.length === 0) return <></>

    if (loading) {
        return (
            <Panel>
                <label className="text-3x1">Buscando clínicas...</label>
            </Panel>
        )
    }

    const fx = (n: string = "") => parseFloat(n).toFixed(2)
    const renderClinics = clinics.map((c, i) =>
        <Panel key={i}>
            <div className="text-2xl mb-1">{c.ds_name}</div>
            <div className="text-sm mb-1">{`${c.ds_logradouro}, ${c.ds_numero || ""} ${c.ds_bairro || ""}`}</div>
            <div className="text-sm text-right">{`${fx(c.ds_latitude)} ${fx(c.ds_longitude)}`}</div>
        </Panel>
    )

    if (props.mapMarkerRequest) {
        const mapMaker = clinics.map((c) => {
            const m: MapMarker = {
                draggable: true,
                popText: c.ds_name,
                position: {
                    lat: parseFloat(c.ds_latitude || ''),
                    lng: parseFloat(c.ds_longitude || '')
                }
            }
            return m
        })

        //console.log(mapMaker)
        props.mapMarkerRequest(mapMaker)
    }

    return (
        <div className="flex flex-nowrap gap-2 md:gap-10">
            {renderClinics}
        </div>
    )
}

const mapStateToProps = (state: ClinicApplicationState) => ({
    clinics: state.clinics.data,
    loading: state.clinics.loading
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(MapMarkerActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PanelListClinic)