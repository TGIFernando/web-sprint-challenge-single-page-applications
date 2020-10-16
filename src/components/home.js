import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const FlexyDiv = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items: center;
background: url('https://i.imgur.com/XBEKUJK.jpg');
height:50vh;
`
const MainDiv = styled.div`
background-color: #42BFDD;
width:100%;
height:38.6rem;
`
const PizzaButn = styled.button`
border: none;
font-size: 2rem;
height: 3rem;
border-radius: 10px;
background-color: #179bac;
&:hover{
    cursor: pointer;
    color: #42BFDD;
    background-color:black;
    transition: .5s;
}
`

export default function Home(){

    return(
        <MainDiv>
            <FlexyDiv>
                <Link to='/pizza' className='link'>
                    <PizzaButn id='pizzza' >GET PIZZA</PizzaButn>
                </Link>
            </FlexyDiv>
        </MainDiv>
    )
}