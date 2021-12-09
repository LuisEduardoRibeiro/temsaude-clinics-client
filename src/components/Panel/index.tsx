import React from 'react'
import { PanelContainer } from './styles'


const Panel = React.forwardRef((props: any, ref) => (
    <PanelContainer>
        {props.children}
    </PanelContainer>
))

export default Panel