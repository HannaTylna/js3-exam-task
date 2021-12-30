import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`

`;

export default function Link(props) {
   return ( 
      <StyledLink {...props}>{props.children}</StyledLink>
   )
}
