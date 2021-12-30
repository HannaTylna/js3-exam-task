import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
display: ${props => props.display || "flex"};
padding: ${props => props.padding || "5px"};
margin-top: ${props => props.marginTop || "20px"};
text-transform: ${props => props.textTransform || "uppercase"};
background: #808080;
font-weight: bold;
border-radius: 10px;
&:hover{
   background: #806080;
}
`;



export default function Button(props) {
   return (
      <StyledButton>{props.children}</StyledButton>
   )
}
