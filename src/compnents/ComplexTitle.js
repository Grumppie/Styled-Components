import React from 'react'
import styled from 'styled-components'
import { colors, setupBorder } from '../utils'

const Wrapper = styled.div`
    h1{ 
        text-transform: uppercase;
        text-align: center;
        color: ${colors.primary};
        border: ${setupBorder({ width: '5px', type: 'dotted', color: 'red' })};
    }
    .underline{
        width: 30%;
        height: 5px;
        background-color: var(--primary);
        margin: 0 auto;
    }
`
const ComplexTitle = ({ title }) => {
    return (
        <Wrapper>
            <h1>{title}</h1>
            <div className="underline"></div>
        </Wrapper>
    )
}


export default ComplexTitle