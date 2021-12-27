import React from "react";
import styled from "styled-components";


const StyledRow = styled.div`
display: ${props => props.display || "flex"};
flex-wrap: ${props => props.flex || "wrap"};
margin: ${props => props.margin || "0px 0px 10px 0px"};
`;
export default function Row(props) {
   return <StyledRow {...props}/>
}
