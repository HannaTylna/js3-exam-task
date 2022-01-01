import React, { useContext, useEffect, useCallback } from 'react';

import { MyDataContext } from '../App';
import Paragragh from '../components/Paragragh';
import Link from './Link';

export default function MyData() {
   const { myData, setMyData } = useContext(MyDataContext);

   const getUserInformation = useCallback(() => {
      const token = localStorage.getItem("exam");
      const url = "https://frebi.willandskill.eu/api/v1/me";
      fetch(url, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
         }
      })
         .then(res => res.json())
         .then(data => setMyData(data))
   }, [setMyData]);

   useEffect(() => {
      getUserInformation();
   }, [getUserInformation])

   return (
      <div>
         {myData &&
            <>
               <Paragragh marginBottom="20px">
                  Hello, <strong>{myData.firstName} {myData.lastName}</strong>.<br />
                  Your email is <strong>{myData.email}</strong>
               </Paragragh>
            </>
         }
         <Link href="/" button>Log out</Link>
      </div>
   )
}
