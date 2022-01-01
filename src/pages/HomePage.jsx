import React, { useEffect, useContext, useCallback } from "react";
import CustomerCreate from "../components/CustomerCreate";
import { MyDataContext } from "../App";
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import MyData from "../components/MyData";
import Link from "../components/Link";
import Column from "../components/Column";
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
         <Flex display="block">
               <Column width="40%" col="3" padding="15px" textAlign="center" margin="20px auto 20px auto" >
                  <MyData />
               </Column>
               <Column width="100%" col="8" padding="15px" margin=" 20px auto 20px auto" >
                  <Heading2 margin="0px auto 30px auto">Customers</Heading2>
                  <Flex marginBottom="20px">
                     <Column col="3" textAlign="center"><strong>NAME</strong></Column>
                     <Column col="3" textAlign="center"><strong>EMAIL</strong></Column>
                     <Column col="2" textAlign="center"><strong>ID</strong></Column>
                     <Column col="2" textAlign="center"></Column>
                  </Flex>
                  {customerList && customerList.map((customer, index) => {
                     return (
                        <Flex key={index}>
                           <Column col="3" textAlign="center" margin="0px 0px 10px 0px">
                              <h3>{customer.name}</h3>
                           </Column>
                           <Column col="3" textAlign="center">
                              <Paragragh>{customer.email}</Paragragh>
                           </Column>
                           <Column col="2" textAlign="center">
                              <Paragragh>{customer.id}</Paragragh>
                           </Column>
                           <Column col="2" textAlign="center">
                              <Link href={`/home/${customer.id}`}><strong>...</strong></Link>
                           </Column>
                        </Flex>
                     )
                  })}
               </Column>
         </Flex>   
         <CustomerCreate onSuccess={fetchData} />
      </>
   )
}