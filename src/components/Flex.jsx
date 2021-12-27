import React from "react";
import styled, {css} from "styled-components"

const StyledFlex = styled.div`
display: flex;
flex-direction: ${props => props.direction || "row"};
align-items: ${props => props.align || "stretch"};
justify-content: ${props => props.justify || "stretch"};
${props => props.margin && css`margin: 10px 10px;`}
${props => props.padding && css`padding: 20px 20px;`}
`

export default function Flex(props) {
   return <StyledFlex {...props}>{props.children}</StyledFlex>
};