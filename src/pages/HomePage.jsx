import React, { useEffect, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import CustomerCreate from "../components/CustomerCreate";
import { InformationContext } from "../App";
import Heading1 from "../components/Heading1";
import Row from "../components/Row";
import Column from "../components/Column";
import LinkStyled from "../components/LinkStyled";
import Paragragh from "../components/Paragragh";
import Button from "../components/Button";
import Heading2 from "../components/Heading2";


export default function HomePage() {
   const { customerList, setCustomerList } = useContext(InformationContext);
   const { myData, setMyData } = useContext(InformationContext);

   const fetchData = useCallback(() => {
      const url = "https://frebi.willandskill.eu/api/v1/customers/"
      const token = localStorage.getItem("exam");
      fetch(url, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
         }
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data.results)
            return setCustomerList(data.results)
         })
   }, [setCustomerList]);

   const getUserInformation = useCallback(() => {
      const token = localStorage.getItem("exam");
      const url = "https://frebi.willandskill.eu/api/v1/me";
      fetch(url,{
         method:"GET",
         headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
         }
      })
      .then(res => res.json())
      .then(data => setMyData(data))
   }, [setMyData])

   useEffect(() => {
      fetchData();
      getUserInformation();
   }, [fetchData, getUserInformation])

   
   return (
      <div>
         <Heading1 border="2px double #000" width="50%" padding="5px">Home Page</Heading1>
         <Row>
            <Column col="3" textAlign="center">
               {myData &&
                  <Paragragh margin>
                     Hello, <strong>{myData.firstName} {myData.lastName}</strong>.<br />
                     Your email is <strong>{myData.email}</strong>
                  </Paragragh>
               }
               <LinkStyled href="/" border="1px solid #000" borderRadius="10px" padding margin>Log out</LinkStyled>
            </Column>
            <Column col="9">
               <Heading2>Customers</Heading2>
               {customerList && customerList.map((customer, index) => {
                  return(
                     <div  key={index}>
                        <ul>
                           <li>
                              <h3><Link to={`${customer.id}`}>{customer.name}</Link></h3>
                              <p>
                                 <strong>Email:</strong>{customer.email}<br />
                                 <strong>ID:</strong>{customer.id}
                              </p>
                           </li>
                        </ul>
                     </div>
                  )
               })}
               <CustomerCreate onSuccess={fetchData} />
               {/*<Button onClick={fetchData}>Refresh</Button>*/}
            </Column>
         </Row>
      </div>
   )
}