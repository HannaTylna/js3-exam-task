import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
margin: ${props => props.margin || "0px 0px 0px 10px "};

`;

export default function Label(props) {
   return <StyledLabel {...props} />
}
