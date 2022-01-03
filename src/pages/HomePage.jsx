import React, { useEffect, useContext, useCallback } from "react";
import { MyDataContext } from "../App";

import CustomerCreate from "../components/CustomerCreate";
import Heading2 from "../components/Heading2";
import Link from "../components/Link";
import Column from "../components/Column";
import Flex from "../components/Flex";
import Table from "../components/Table";
import TableBody from "../components/TableBody";
import NavBar from "../components/NavBar";


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
         <NavBar />
         <Flex display="block" margin="50px">
            <Column width="100%" col="8" >
               <Heading2 margin="10px auto 20px auto">Customers</Heading2>
               <Table background="#5f6a91">
                  <thead>
                     <TableBody tr>
                        <TableBody></TableBody>
                        <TableBody fontWeight="bold">Name</TableBody>
                        <TableBody fontWeight="bold">Email</TableBody>
                        <TableBody fontWeight="bold">ID</TableBody>
                        <TableBody></TableBody>
                     </TableBody>
                  </thead>
                  <tbody>
                     {customerList && customerList.map((customer, index) => {
                        return (
                           <TableBody tr key={index}>
                              <TableBody>{index + 1}</TableBody>
                              <TableBody >{customer.name}</TableBody>
                              <TableBody >{customer.email}</TableBody>
                              <TableBody>{customer.id}</TableBody>
                              <TableBody fontWeight="bold" >
                                 <Link href={`/home/${customer.id}` } colorHover="#499edf" fontSize="16px"  border="none">&lt;...&gt;</Link>
                              </TableBody>
                           </TableBody>
                        )
                     })}
                  </tbody>
               </Table>
               
            </Column>
            <Column col="4" width="80%" >
               <CustomerCreate onSuccess={fetchData} />
            </Column>
         </Flex>   
         
      </>
   )
}