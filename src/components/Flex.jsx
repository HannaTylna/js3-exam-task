import React from 'react';
import styled, {css} from 'styled-components';

const StyledFlex = styled.div`
display: flex;
flex-direction: row;
align-items: ${props => props.align || "stretch"};
justify-content: ${props => props.justify || "stretch"};
margin-top: ${props => props.marginTop};
padding: ${props => props.padding};
`;
const StyledFlexColumn = styled(StyledFlex)`
flex-direction: column;
`;
export default function Flex(props) {
   return (
      <>
         {
            props.col ? <StyledFlexColumn {...props}>{props.children}</StyledFlexColumn>
            : <StyledFlex {...props}>{props.children}</StyledFlex>
         }
      </>
   )
}
