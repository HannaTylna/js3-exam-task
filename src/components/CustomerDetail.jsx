import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomerDetail(props) {
   const [customerDetail, setCustomerDetail] = useState({});
   const navigate = useNavigate();
   

   function renderInput(type, placeholder, value, setValue) {
      return <input
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={e => setValue(e.target.value)}
      />
   }

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

   //function handleOnSelect(id) {
   //   console.log(id);
   //   setName(customerDetail.name);
   //   setOrganisationNr(customerDetail.organisationNr);
   //   setVatNr(customerDetail.vatNr);
   //   setReference(customerDetail.reference);
   //   setPaymentTerm(customerDetail.paymentTerm);
   //   setWebsite(customerDetail.website);
   //   setEmail(customerDetail.email);
   //   setPhoneNumber(customerDetail.phoneNumber);
   //}

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
         <form>
            <label htmlFor="name">Name: </label>
            {renderInput("text", "Name",  customerDetail.name, customerDetail.name )} <br />
            {/*<label htmlFor="organisationNr">Organisation Number: </label>
            {renderInput("text", "Organisation Number", organisationNr, setOrganisationNr)} <br />
            <label htmlFor="vatNr">VAT number: </label>
            {renderInput("text", "VAT number", vatNr, setVatNr)} <br />
            <label htmlFor="reference">Reference: </label>
            {renderInput("text", "Reference", reference, setReference)} <br />
            <label htmlFor="paymentTerm">Payment Term: </label>
            {renderInput("text", "Payment Term", paymentTerm, setPaymentTerm)} <br />
            <label htmlFor="website">Website: </label>
            {renderInput("text", "Website", website, setWebsite)} <br />
            <label htmlFor="email">Email: </label>
            {renderInput("text", "Email", email, setEmail)} <br />
            <label htmlFor="phoneNumber">Phone Number: </label>
            {renderInput("text", "Phone Number", phoneNumber, setPhoneNumber)}*/}
            <br /><br />
            
            <button type="submit">Update Customer</button>
         </form>

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
               <button >Update information</button>
               <button onClick={(e) => handleOnDelete(customerDetail.id)}>Delete customer</button>
            </>
         ) : "Not found"}
      </div>
   )
}
