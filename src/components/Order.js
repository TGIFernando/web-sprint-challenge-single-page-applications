import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const MLabel = styled.label`
font-size:2rem;
display:flex;
padding: 2px;
align-items:center;
border:2px solid red;
justify-content: center;
flex-direction: column;
text-align: center;
`
export default function Order(props){
    const {data} = props
    return(
        <div>
        <MLabel>
            <p>NAME: {data.name}</p>
        </MLabel>
        <MLabel>
            <p>SIZE: {data.size}</p>
        </MLabel>
        <MLabel>
            <p>INSTRUCTIONS: {data.instructions}</p>
        </MLabel>
        </div>
    )
}