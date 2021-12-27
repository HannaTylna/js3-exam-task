import React from 'react';
import styled from 'styled-components';

const StyledHeading1 = styled.h1`
color: ${props => props.color || "#000"};
margin: ${props => props.margin || "10px auto"};
text-align: ${props => props.textAlign || "center"};
`

export default function Heading1(props) {
   return <StyledHeading1 {...props}/>
}
