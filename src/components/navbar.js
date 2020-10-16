import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const MainDiv = styled.div`
margin: 0 auto;
display:flex;
padding: 5px;
background-color:#42BFDD;
justify-content: space-around;
`

const Buttn = styled.h2`
padding: 2px;
font-size: 3rem;
color:black;
text-decoration:none;
`
export default function Navbar () {
    return(
    <div>
    <MainDiv>
        <Link to = '/' className='link'>
            <Buttn>Home</Buttn>
        </Link>
        <Link to='/pizza' className='link'>
            <Buttn>pizza</Buttn>
        </Link>
    </MainDiv>
    </div>
    )
}