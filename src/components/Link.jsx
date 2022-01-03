import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
text-decoration: none;
font-weight: ${props => props.fontWeight || "bold"};
font-size: 16px;
color: ${props => props.color || "#000"};
&:hover{
   border-bottom: 1px solid #000;
   font-size: 18px;
}
`;
const LinkButton = styled(StyledLink)`
background: #000;
color: #D3D3D3;
border: none;
border-radius: 10px;
padding: ${props => props.padding || "5px"};
&:hover{
   background: #D3D3D3;
   color: #000;  
   font-weight: bold;
}
`;

export default function Link(props) {
   return ( 
      <>
         {props.button ? <LinkButton {...props}>{props.children}</LinkButton>
            :
            <StyledLink {...props}>{props.children}</StyledLink>
         }
      </>
   )
}
