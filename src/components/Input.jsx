import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
padding: ${props => props.padding || "5px"};
border-radius: ${props => props.borderRadius || "10px"};
border: ${props => props.border || "1px solid #000"};
background: #D3D3D3;
&:focus{
   background: #fff;
}
`;

const StyledSelect = styled.select`
padding: ${props => props.padding || "3px"};
border-radius: ${props => props.borderRadius || "10px"};
border: ${props => props.border || "1px solid #000"};
background: #D3D3D3;
`;

export default function Input({props , select, type, placeholder, value, setValue, required}) {
   return (
      <>
         {select ? <StyledSelect value={value} onChange={e => setValue(e.target.value)} required={required}>{props.children}</StyledSelect>
            : 
         <StyledInput
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
            required={required}
         />
         }
      </>
      
   )
}
