import styled, { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    * {
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@400&display=swap');
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        color: #a1a1a1;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        background-color: #f5f5f6;
    }

    .leaflet-container {
        position: unset !important;
    }
`

export const ContainerFixed = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

export const Input = styled.input`
    border: 0;
    border-bottom: 1px solid #d3d3d3;
    display: block;    
    font-size: 12px;
    letter-spacing: 1px;
    padding: 6px 12px;
    width: 100%;

    &:focus, &:hover:not([disabled]) {
        border-bottom-width: 2px;
    }

    &:focus {
        border-bottom-color: #333;
    }

    &::placeholder { 
        color: #d3d3d3;
    }
`

export const Button = styled.button`
    border: 1px solid transparent;
    color: #a1a1a1;
    font-size: 12px;
    font-weight: bold;
    margin: 0;
    padding: 12px 16px;

    &:focus, &:hover {
        border: 1px solid #d3d3d3;
        border-radius: 0.3rem;
    }

    &:hover {
        background-color: #f9f9f9;
    }

    &:active {
        background-color: #f3f3f3;
    }
`