import React, { useContext, useEffect, useCallback } from 'react';

import LinkStyled from './LinkStyled';
import { MyDataContext } from '../App';
import Paragragh from '../components/Paragragh';
import BackToHomePage from './BackToHomePage';

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
               <BackToHomePage />
               <Paragragh margin>
                  Hello, <strong>{myData.firstName} {myData.lastName}</strong>.<br />
                  Your email is <strong>{myData.email}</strong>
               </Paragragh>
            </>
            
         }
         <LinkStyled href="/" border="1px solid #000" borderRadius="10px" padding margin>Log out</LinkStyled>
      </div>
   )
}
