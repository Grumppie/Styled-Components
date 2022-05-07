import styled from 'styled-components/macro'

export const BasicButton = styled.button`
    border: none;
    border-radius: 0.25rem;
    color: white;
    background-color: #645cff;
    padding: 0.5rem;
    display: block;
    margin: 1rem auto;
    font-size: 1rem;
    width: 30%;
    cursor: pointer;
`
export const HipsterButton = styled(BasicButton)`
    width: 40%;
    background-color: transparent;
    border: 2px solid #645cff;
    color: #645cff;
    display: inline-block;
    text-decoration: none;
    text-align: center;
`