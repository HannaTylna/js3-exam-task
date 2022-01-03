import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
border: ${props => props.border || "1px solid #808080"};
width: ${props => props.width || "50%"};
padding: ${props => props.padding || "10px"};
margin: ${ props => props.margin || "0px auto" };
background: rgb(73,158,223);
background: linear-gradient(0deg, rgba(73,158,223,1) 15%, rgba(95,106,145,1) 57%);
@media (max-width: 992px){
   width: 70%;
};
@media (max-width: 768px){
   margin: 40px auto;
   width: 100%;
};
`;


export default function Form(props) {
   return <StyledForm {...props}/>
}
