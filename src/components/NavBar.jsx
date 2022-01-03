import React from 'react';
import Flex from './Flex';
import styled from 'styled-components';
import Column from './Column';
import NavBarIcon from './NavBarIcon';
import NavBarLink from './NavBarLink';
import NavBarCustomer from './NavBarCustomer';

const StyledNavBar = styled.div`
height: 80px;
background: #499edf;
margin: 0px;
position: fixed;
width: 100%;
top: 0;
left: 0;
z-index: 10;
`;

export default function NavBar() {
   return (
      <StyledNavBar>
         <Flex align="center" padding="10px 0px">
            <NavBarIcon />
            <Column col="3" width="0%"></Column>
            <NavBarCustomer/>
            <NavBarLink />
         </Flex>
      </StyledNavBar>
   )
}
