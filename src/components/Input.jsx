import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
padding: ${props => props.padding || "3px"};
border-radius: ${props => props.borderRadius || "10px"};
border: ${props => props.border || "1px solid #000"};
`;
export default function Input(props) {
   return <StyledInput {...props}/>
}
