import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    h1{ 
        text-transform: uppercase;
        text-align: center;
    }
    .underline{
        width: 30%;
        height: 5px;
        background-color: #645cff;
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