import React from 'react';
import styled from 'styled-components';

const StyledHeading1 = styled.h1`
color: ${props => props.color || "#000"};
margin: ${props => props.margin || "10px auto"};
border: ${props => props.border};
width: ${props => props.width};
padding: ${props => props.padding};
text-transform: ${props => props.textTransform};
`
const Heading1Center = styled(StyledHeading1)`
text-align: ${props => props.textAlign || "center"};
border-radius: ${props => props.borderRadius || "20px"};
box-shadow: ${props => props.boxShadow || "none"};
`;

export default function Heading1(props) {
   return (
      <>
         {
            props.center ? <Heading1Center {...props}>{props.children}</Heading1Center>
            : <StyledHeading1 {...props}>{props.children}</StyledHeading1>
         }
      </>
      
   )
}
