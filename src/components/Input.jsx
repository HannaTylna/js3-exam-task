import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
padding: ${props => props.padding || "5px"};
border: ${props => props.border};
background: #D3D3D3;
&:focus{
   background: #fff;
}
`;

export default function Input({props , type, placeholder, value, setValue, required}) {
   return (
      <StyledInput
         {...props}
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={e => setValue(e.target.value)}
         required={required}
      />
   )
}