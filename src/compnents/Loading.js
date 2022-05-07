import styled, { keyframes } from 'styled-components'
import { setupBorder } from '../utils'

const spinner = keyframes`
    to{ 
        transform: rotate(360deg);
    }
`

const Loading = styled.div`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: ${setupBorder({ width: '5px', type: 'solid', color: '#ccc' })};
    border-top-color: var(--loader-primary);
    margin: 2rem auto;
    animation: ${spinner} 0.6s linear infinite;
`

export default Loading