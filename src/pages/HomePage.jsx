import React, { useEffect, useContext, useCallback } from "react";
import CustomerCreate from "../components/CustomerCreate";
import { MyDataContext } from "../App";
import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import MyData from "../components/MyData";
import Link from "../components/Link";


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
      <div>
         <Heading1 border="2px double #000" width="50%" padding="5px">Home Page</Heading1>
         
               <MyData />
               <Heading2>Customers</Heading2>
               <div>
                  <div></div>
                  <div><strong>Email</strong></div>
                  <div><strong>ID</strong></div>
                  <div></div>
               </div>
               
                  {customerList && customerList.map((customer, index) => {
                     return (
                        <div key={index}>
                           <h3>{customer.name}</h3>
                           <p>{customer.email}</p>
                           <p>{customer.id}</p>
                           <Link href={`/home/${customer.id}`}><strong>...</strong></Link>
                        </div>
                     )
                  })}
               <CustomerCreate onSuccess={fetchData} />
               {/*<Button onClick={fetchData}>Refresh</Button>*/}
      </div>
   )
}