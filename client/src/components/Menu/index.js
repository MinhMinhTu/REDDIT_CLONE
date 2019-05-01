import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'



const Menu = styled.ul`
    display : flex;
    flex-direction : row;
    list-style-type: none;
    justify-content : space-around
`
Menu.Item = MenuItem


export default Menu