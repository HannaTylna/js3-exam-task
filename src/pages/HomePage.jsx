import React, { useEffect, useContext, useCallback } from "react";
import CustomerCreate from "../components/CustomerCreate";
import { CustomerContext } from "../App";
import Heading1 from "../components/Heading1";
import Row from "../components/Row";
import Column from "../components/Column";
import Heading2 from "../components/Heading2";
import MyData from "../components/MyData";
import Flex from "../components/Flex";
import { Link } from "react-router-dom";


export default function HomePage() {
   const { customerList, setCustomerList } = useContext(CustomerContext);

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

   useEffect(() => {
      fetchData();
   }, [fetchData])

   
   return (
      <div>
         <Heading1 border="2px double #000" width="50%" padding="5px">Home Page</Heading1>
         <Row>
            <Column col="3" textAlign="center">
               <MyData />
            </Column>
            <Column col="9">
               <Heading2>Customers</Heading2>
               <Flex>
                  <Column col="1"></Column>
                  <Column col="3"><strong>Email</strong></Column>
                  <Column col="3"><strong>ID</strong></Column>
                  <Column col="1"></Column>
               </Flex>
               
                  {customerList && customerList.map((customer, index) => {
                     return(
                        <Flex margin key={index}>
                           <Column col="1">
                              <h3>{customer.name}</h3>
                           </Column>
                           <Column col="3">
                              <p>{customer.email}</p>
                           </Column>
                           <Column col="3">
                              <p>{customer.id}</p>
                           </Column>
                           <Column col="1">
                              <Link to={`${customer.id}`}><strong>...</strong></Link>
                           </Column>
                        </Flex>
                     )
                  })}
               <CustomerCreate onSuccess={fetchData} />
               {/*<Button onClick={fetchData}>Refresh</Button>*/}
            </Column>
         </Row>
      </div>
   )
}