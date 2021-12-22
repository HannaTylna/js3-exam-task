import React, { useEffect, useState } from 'react';

export default function CustomerDetail(props) {
   const [customerDetail, setCustomerDetail] = useState({});

   useEffect(() => {
      const url = `https://frebi.willandskill.eu/api/v1/customers/${props.id}/`;
      const token = localStorage.getItem("exam");
      fetch(url, {
         method: "GET",
         headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
         }
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            setCustomerDetail(data)
         })
   }, [props.id])
   return (
      <div>
         {customerDetail ? (
            <>
               <h1>Customer id: {customerDetail.id}</h1>
               <p><strong>Name:</strong> {customerDetail.name}</p>
               <p><strong>Organisation number:</strong> {customerDetail.organisationNr}</p>
               <p><strong>VAT number:</strong> {customerDetail.vatNr}</p>
               <p><strong>Reference:</strong> {customerDetail.reference}</p>
               <p><strong>Payment Term:</strong> {customerDetail.paymentTerm}</p>
               <p><strong>Website:</strong> {customerDetail.website}</p>
               <p><strong>Email:</strong> {customerDetail.email}</p>
               <p><strong>Phone number:</strong> {customerDetail.phoneNumber}</p>
               
            </>
         ) : "Not found"}
      </div>
   )
}
