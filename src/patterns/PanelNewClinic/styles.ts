import styled from "styled-components"
import { Input } from '../../styles/global'

export const H1 = styled.h1`
    color: #a1a1a1;
    font-size: 13px;
    letter-spacing: 0.05rem;
`

export const CloseButton = styled.span`
    position: relative;
    color: #d3d3d3;
    float: right;

    &:before {
        position: absolute;
        content: '✕';
        cursor: pointer;
        right: 0;
        top: -5px;
    }

    &:hover {
        color: #a1a1a1;
    }
    
    &:active {
        color: #333;
    }
`

export const MyInput = styled(Input)`
    margin-bottom:15px;
`