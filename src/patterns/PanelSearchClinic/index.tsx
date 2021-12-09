import React, { useState } from 'react'
import Panel from '../../components/Panel'
import InputButton from '../../components/InputButton'
import { ClinicApplicationState } from '../../store'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import * as ClinicsActions from '../../store/clinics/actions'


interface StateProps {
    loading: boolean
}

interface DispatchProps {
    loadRequest?({ endereco: string }: any): void,
}

type Props = StateProps & DispatchProps

const PanelSearchClinic: React.FC<Props> = (props) => {

    const [endereco, setEndereco] = useState('')
    const { loading } = props

    const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
        setEndereco(e.currentTarget.value)
    }

    const buscarClinicas = () => {
        if (endereco && props.loadRequest) {
            props.loadRequest({ endereco })
        }
    }

    return (
        <Panel>
            <InputButton
                props={{ 'className': 'mb-0' }}
                propsInput={{ 'placeholder': 'ENDEREÇO', 'autoComplete': 'nope', 'onChange': onChangeInput }}
                propsButton={{ 'children': `BUSCAR`, 'disabled': loading, 'onClick': buscarClinicas }}
            />
        </Panel>
    )
}

const mapStateToProps = (state: ClinicApplicationState) => ({
    loading: state.clinics.loading
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ClinicsActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(PanelSearchClinic)