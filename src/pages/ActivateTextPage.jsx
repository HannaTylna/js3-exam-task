import React from 'react';
import Column from '../components/Column';
import Heading1 from '../components/Heading1';


export default function ActivateTextPage() {
   return (
      <Column col="5" margin="200px auto">
         <Heading1 color="#5f6a91" center>Thank you for registering.</Heading1>
         <Heading1 color="#499edf" center>A link has been sent to your email. </Heading1>
         <Heading1 color="#5f6a91" center>Please follow the link!</Heading1 >
      </Column>
   )
}
