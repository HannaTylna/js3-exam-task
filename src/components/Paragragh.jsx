import React from 'react';
import styled, {css} from 'styled-components';

const StyledParagragh = styled.p`
${props => props.margin && css`margin: 20px;`};
`;

export default function Paragragh(props) {
   return <StyledParagragh {...props} />
}
