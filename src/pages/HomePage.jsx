import React, { useEffect, useContext, useCallback } from "react";
import CustomerCreate from "../components/CustomerCreate";
import { MyDataContext } from "../App";
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import MyData from "../components/MyData";
import Link from "../components/Link";
import Column from "../components/Column";
import Flex from "../components/Flex";
import Table from "../components/Table";
import TableBody from "../components/TableBody";


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
         <Flex>
            <Column width="40%" col="3" padding="15px" textAlign="center" margin="20px auto 20px auto" >
               <MyData />
            </Column>
            <Column col="9">
               <Heading1 center boxShadow="5px 5px 5px 5px #262626" width="50%" padding="5px" textTransform="uppercase">Home Page</Heading1>
            </Column>
         </Flex>
         
         <Flex display="block" margin="20px">
            <Column width="100%" col="6" margin=" 20px auto 20px auto" >
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
                                 <Link href={`/home/${customer.id}` } colorHover="#5f6a91" fontSize="16px"  border="none">&lt;...&gt;</Link>
                              </TableBody>
                           </TableBody>
                        )
                     })}
                  </tbody>
               </Table>
               {/*<Flex padding="5px 0px" borderBottom="2px solid #262626" borderTop="2px solid #262626">
                  <Column col="3" textAlign="center"><strong>NAME</strong></Column>
                  <Column col="3" textAlign="center"><strong>EMAIL</strong></Column>
                  <Column col="2" textAlign="center"><strong>ID</strong></Column>
                  <Column col="2" textAlign="center"></Column>
               </Flex>
               {customerList && customerList.map((customer, index) => {
                  return (
                     <Flex key={index}>
                        <Column col="3" textAlign="center" padding="5px 0px">
                           <h3>{customer.name}</h3>
                        </Column>
                        <Column col="3" textAlign="center" padding="5px 0px">
                           <Paragragh>{customer.email}</Paragragh>
                        </Column>
                        <Column col="2" textAlign="center" padding="5px 0px">
                           <Paragragh>{customer.id}</Paragragh>
                        </Column>
                        <Column col="2" textAlign="center">
                           <Link href={`/home/${customer.id}` } fontWeight="none">&lt;...&gt;</Link>
                        </Column>
                     </Flex>
                  )
               })}*/}
            </Column>
            <Column col="6" width="80%" >
               <CustomerCreate onSuccess={fetchData} />
            </Column>
         </Flex>   
         
      </>
   )
}