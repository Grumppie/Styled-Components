import styled from 'styled-components'
const BasicTitle = styled.h1`
    color: white;
    text-align: center;
    text-transform: uppercase;
    color: ${({ special }) => (special) ? 'red' : 'blue'};
`

export default BasicTitle;