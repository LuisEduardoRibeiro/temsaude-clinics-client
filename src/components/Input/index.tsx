import React from 'react'
import styled from 'styled-components'
import { Input } from '../../styles/global'

const Span = styled.span`
    font-size: 10px;
    color: red;
`

const MyInput = React.forwardRef((props: any, ref) => (
    <div className="mb-3">
        <Input ref={ref} className={`${(props.errorMessage || props.error) && 'input-required'}`} {...props} />
        {props.errorMessage && <Span>{props.errorMessage} </Span>}
    </div>
    //{props.errorMessage && <Span>{props.errorMessage} </Span>}
))

export default MyInput