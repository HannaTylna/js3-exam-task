import React from 'react';
import styled from 'styled-components';

const StyledColumn = styled.div`
width: ${props => props.col * 100/12}%;
flex: 0 0 auto;
text-align: ${props => props.textAlign};
margin: ${props => props.margin};
padding: ${props => props.padding};
border-radius: ${props => props.borderRadius};
box-shadow: ${props => props.boxShadow};
border: ${props => props.border};

@media (max-width: 992px){
   width: ${props => props.width}
};
`;

export default function Column(props) {
   return (
      <StyledColumn {...props}>{props.children}</StyledColumn>
   )
}