import React from 'react';
import styled from 'styled-components';

const StyledParagragh = styled.p`
text-align: ${props => props.textAlign};
margin-bottom: ${props => props.marginBottom};
font-weight: ${props => props.fontWeight};
text-transform: ${props => props.textTransform};
`;

export default function Paragragh(props) {
   return (
      <StyledParagragh {...props}>{props.children}</StyledParagragh>
   )
}
