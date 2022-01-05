import React, { useContext } from 'react';

import { MyDataContext } from '../App';
import Paragragh from '../components/Paragragh';

export default function MyData() {
   const { myData } = useContext(MyDataContext);

   

   return (
      <>
         {myData ?
            <>
            <Paragragh textAlign="center" marginBottom="20px" >
               Hello, <strong>{myData.firstName} {myData.lastName}</strong>. Your email is <strong>{myData.email}</strong>
            </Paragragh>
            </>
            : " "
         }
      </>
   )
}
