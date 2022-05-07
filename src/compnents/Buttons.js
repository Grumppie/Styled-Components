import styled, { css } from 'styled-components/macro'

export const BasicButton = styled.button`
    border: none;
    border-radius: 0.25rem;
    color: white;
    background-color: #645cff;
    display: block;
    margin: 1rem auto;
    padding: 0.5rem;
    font-size: 1rem;
    width: 30%;
    cursor: pointer;
    ${({ large }) => large ?
        css`
        padding: 1rem; 
        font-size: 1.5rem;
        font-weight: bold;
    ` :
        css`
        padding: 0.5rem;
        font-size: 1rem;
    `};
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