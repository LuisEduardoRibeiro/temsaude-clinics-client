import styled from 'styled-components'
import { Input, Button } from '../../styles/global'

export const Container = styled.div`
    border-bottom: 1px solid #d3d3d3;
`

export const MyInput = styled(Input)`
    border: 0;
    display: inherit;
`
export const MyButton = styled(Button)`

    padding: 6px 12px;
    border-radiuas: 0;

    &:focus, &:hover {
        border: 1px solid transparent;
    }

    &[disabled] {
        opacity: 0.3;
        cursor: default;
    }
`
export const Span = styled.span`
    font-size: 10px;
    color: red;
`
