import React from 'react';
import styled, {css} from 'styled-components';

const StyledLink = styled.a`
text-decoration: none;
color: #000;
font-weight: ${props => props.fontWeight || "bold"};
font-size: ${props => props.fontSize || '18px'};
margin-top: ${props => props.marginTop};
border: ${props => props.border};
border-radius: ${props => props.borderRadius};
${props => props.padding && css`padding: 3px;`};
background: ${props => props.background || "#808080"};
&:hover{
   background:  ${props => props.background || "#806080"};
}
`;

export default function LinkStyled(props) {
   return <StyledLink {...props}/>
}