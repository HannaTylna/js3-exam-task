import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
display: ${props => props.display || "flex"};
padding: ${props => props.padding || "10px"};
margin-top: ${props => props.marginTop || "20px"};
text-transform: ${props => props.textTransform || "uppercase"};
background: #000;
color: #D3D3D3;
border: none;
border-radius: 10px;
&:hover{
   background: #D3D3D3;
   color: #000;  
   font-weight: bold;
}
`;



export default function Button(props) {
   return (
      <StyledButton>{props.children}</StyledButton>
   )
}
