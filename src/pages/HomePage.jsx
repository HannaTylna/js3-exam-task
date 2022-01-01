import React, { useEffect, useContext, useCallback } from "react";
import CustomerCreate from "../components/CustomerCreate";
import { MyDataContext } from "../App";
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import MyData from "../components/MyData";
import Link from "../components/Link";
import Column from "../components/Column";
import Row from "../components/Row";
import Flex from "../components/Flex";
import Paragragh from "../components/Paragragh";


export default function HomePage() {
   const { customerList, setCustomerList } = useContext(MyDataContext);

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
      <>
         <Column col="12">
            <Heading1 center boxShadow="5px 5px 5px 5px #262626" width="50%" padding="5px">Home Page</Heading1>
         </Column>
         <Flex>
            <Row>
               <Column col="3" width="60%" padding="15px" textAlign="center" margin="20px" >
                  <MyData />
               </Column>
               <Column  col="8" padding="15px" margin="20px" borderRadius="20px" boxShadow="5px 5px 5px 5px #262626">
                  <Heading2>Customers</Heading2>
                  <Flex marginBottom="20px">
                     <Column><strong>NAME</strong></Column>
                     <Column><strong>EMAIL</strong></Column>
                     <Column><strong>ID</strong></Column>
                     <Column></Column>
                  </Flex>
                  {customerList && customerList.map((customer, index) => {
                     return (
                        <Flex key={index}>
                           <Column>
                              <h3>{customer.name}</h3>
                           </Column>
                           <Column>
                              <Paragragh>{customer.email}</Paragragh>
                           </Column>
                           <Column>
                              <Paragragh>{customer.id}</Paragragh>
                           </Column>
                           <Column>
                              <Link href={`/home/${customer.id}`}><strong>...</strong></Link>
                           </Column>
                        </Flex>
                     )
                  })}
               </Column>
            </Row>
         </Flex>   
         <CustomerCreate onSuccess={fetchData} />
      </>
   )
}