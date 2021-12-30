import React from 'react';
import styled from 'styled-components';

const StyledColumn = styled.div`
width: ${props => props.col * 100/12}%;
flex: 0 0 auto;
`;

export default function Column(props) {
   return (
      <StyledColumn {...props}>{props.children}</StyledColumn>
   )
}