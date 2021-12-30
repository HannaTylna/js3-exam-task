import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
padding: ${props => props.padding || "3px"};
border-radius: ${props => props.borderRadius || "10px"};
border: ${props => props.border || "1px solid #000"};
`;

export default function Input({ props }, {type, placeholder, value, setValue, required}) {
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
