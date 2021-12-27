import React from 'react';
import styled, {css} from 'styled-components';

const StyledForm = styled.form`
border: ${props => props.border || "1px solid #808080"};
width: ${props => props.width || "30%"};
border-radius: ${props => props.borderradius || "20px"};
box-shadow: ${props => props.boxShadow || "none"};
${props => props.padding && css`padding: 20px 20px;`};
${props => props.margin && css`margin: 20px auto;`};
`;

export default function Form(props) {
   return <StyledForm {...props}/>
}
