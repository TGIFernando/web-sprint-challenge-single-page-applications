import React from 'react'
import styled from 'styled-components'
const MLabel = styled.label`
font-size:2rem;
display:flex;
padding: 2px;
align-items:center;
justify-content: center;
flex-direction: column;
text-align: center;
`
const Mdiv = styled.div`
background-color: #BBE6E4;
`
export default function Order(props){
    const {data} = props
    return(
        <Mdiv>
        <MLabel>
            <p>NAME: {data.name}</p>
        </MLabel>
        <MLabel>
            <p>SIZE: {data.size}</p>
        </MLabel>
        <MLabel>
            <p>INSTRUCTIONS: {data.instructions}</p>
        </MLabel>
        <MLabel>
            <p>Toppings: {data.toppings}</p>
        </MLabel>
        </Mdiv>
    )
}