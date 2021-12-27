import React, { useEffect, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import CustomerCreate from "../components/CustomerCreate";
import { InformationContext } from "../App";


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
         <h1>Home Page</h1>
         <h2>My information</h2>
         {myData &&
            <p>
               <strong>First Name: </strong>{myData.firstName}<br />
               <strong>Last Name: </strong> {myData.lastName}<br />
               <strong>Email:</strong>{myData.email}
            </p>
         }
         <CustomerCreate onSuccess={fetchData} />
         <button onClick={fetchData}>Refresh</button>
         <h2>Customers</h2>
         {customerList && customerList.map((customer, index) => {
            return(
               <div key={index}>
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
      </div>
   )
}
