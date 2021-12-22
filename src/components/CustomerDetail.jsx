import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomerDetail(props) {
   const [customerDetail, setCustomerDetail] = useState({});
   const navigate = useNavigate();

   useEffect(() => {
      function fetchData() {
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
            console.log(data);
            setCustomerDetail(data);
         })
      }
      fetchData();
   }, [props.id])


   function handleOnDelete(id) {
      console.log(id);
      const url = `https://frebi.willandskill.eu/api/v1/customers/${props.id}/`;
      const token = localStorage.getItem("exam");
      const headers = {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`
      };
      fetch(url, {
         method: "DELETE",
         headers: headers
      })
      .then((res) => navigate("/home"))
   }

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
               <button type='submit'>Update information</button>
               <button onClick={(e) => handleOnDelete(customerDetail.id)}>Delete customer</button>
            </>
         ) : "Not found"}
      </div>
   )
}
