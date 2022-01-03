import React from 'react';
import styled from 'styled-components';
import Column from './Column';
import Paragragh from './Paragragh';

const StyledFooter = styled.footer`
background-color: #262626;
height: 50px;
width: 100%;
margin-top: 20px;
position: fixed;
bottom: 0;
left: 0;
`;

export default function Footer(props) {
   return (
      <StyledFooter {...props}>
         <Column margin="10px 0px 0px 15px" >
            <Paragragh color="#808080">Copyright &copy; 2022 Registration24</Paragragh>
         </Column>
      </StyledFooter>
   )
}
