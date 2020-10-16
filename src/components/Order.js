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
    const {name} = props
    return(
        <MLabel>
            <p>NAME: </p>
            {name}
        </MLabel>
    )
}