import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const FlexyDiv = styled.div`
width:100%;
display:flex;
border:2px solid red;
justify-content:center;
align-items: center;
background-image: url('https://i.imgur.com/XBEKUJK.jpg');
height: 30rem;
`

const PizzaButn = styled.button`
border: none;
font-size: 2rem;
height: 3rem;
border-radius: 10px;
background-color: #179bac;
`

export default function Home(){

    return(
        <FlexyDiv>
            <Link to='/pizza' className='link'>
                <PizzaButn id='pizzza' >GET PIZZA</PizzaButn>
            </Link>
        </FlexyDiv>
    )
}