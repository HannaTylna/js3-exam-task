import React from 'react';
import Link from './Link';

export default function BackToHomePage() {
   return (
      <>
         <Link href="/home">
            <img
               width="30px"
               src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-back-arrow-basic-ui-elements-flatart-icons-outline-flatarticons-1.png"
               alt="A go back arrow"
            />
         </Link>
      </>
   )
}