import { useState, useEffect } from 'react'
import styled from 'styled-components';

const Card = ({ onClick }) => {

    
    return (
        <StyledCard>
            <img src="https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160?ts=1651832554&userId=usrQMwWEPx18KgLcP&cs=d5ee4a9948c5c3b0" alt="product" />
            <footer>
                <h4>Product Name</h4>
                <p>$15</p>
            </footer>
        </StyledCard>
    )
}

const StyledCard = styled.article`
    margin: 2rem;
    width: 90vh;
    max-width: 300px;
    background-color: var(--white); 
    border-radius: 0.5rem;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-in-out;
    img{
        width:100%;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }
    footer{
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        h4{
            color: var(--primary);
            transition: all 0.3s ease-in-out;
            /* &::before{
                content: 'Name : ';
                font-weight: lighter;
            } */
        }
        p{
            color: var(--primary);
            font-weight: bold;
            transition: all 0.3s ease-in-out;
        }
        &:hover{
            h4,p{
                color: var(--secondary);
            }
        }
    }
    &:hover{
        box-shadow: 0px 0px 20px var(--hover-shadow);
    }

    
    @media (min-width: 768px){
        max-width: 600px;
    }
`

export default Card