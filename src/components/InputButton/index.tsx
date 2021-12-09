import React, { MutableRefObject, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import { Container, MyInput, MyButton } from './styles'

interface InputButtonProps {
    props?: any,
    propsInput: any,
    propsButton: any,
    errorMessage?: string,
    error?: boolean
}

const Span = styled.span`
    font-size: 10px;
    color: red;
`

const InputButton = React.forwardRef((props: InputButtonProps, ref) => {

    const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>;

    useLayoutEffect(() => {
        if (props.propsButton.btnDisabled) {
            buttonRef.current.disabled = true
        }
        else {
            buttonRef.current.disabled = false
        }
    })

    return (
        <>
            <Container className={`flex ${!props.propsInput.errorMessage && props.props.className}`}>
                <MyInput className="flex-auto w-4/5" {...props.propsInput} />
                <MyButton className="flex-auto" ref={buttonRef} {...props.propsButton}>
                    {props.propsButton.children}
                </MyButton>
            </Container>

            {props.propsInput.errorMessage && <Span>{props.propsInput.errorMessage} </Span>}
        </>
    )
})

export default InputButton