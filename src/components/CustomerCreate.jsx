import React, { useState } from "react";

export default function CustomerCreate(props) {
   const [name, setName] = useState("");
   const [organisationNr, setOrganisationNr] = useState("");
   const [vatNr, setVatNr] = useState("");
   const [reference, setReference] = useState("");
   const [paymentTerm, setPaymentTerm] = useState("");
   const [website, setWebsite] = useState("");
   const [email, setEmail] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");

   function renderInput(type, placeholder, value, setValue) {
      return <input
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={e => setValue(e.target.value)}
      />
   }

   function handleOnSubmit(e) {
      e.preventDefault()
      const payload = {
         name,
         organisationNr,
         vatNr,
         reference,
         paymentTerm,
         website,
         email,
         phoneNumber
      }
      const url = "https://frebi.willandskill.eu/api/v1/customers/";
      const token = localStorage.getItem("exam");
      fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
         body: JSON.stringify(payload)
      })
         .then(res => res.json())
         .then(data => {
            return props.onSuccess()
         })
   }

   return (
      <div>
         <h2>Create a new customer</h2>
         <form onSubmit={handleOnSubmit}>
            <label htmlFor="name">Name: </label>
            {renderInput("text", "Name", name, setName)} <br />
            <label htmlFor="organisationNr">Organisation Number: </label>
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
            {renderInput("text", "Phone Number", phoneNumber, setPhoneNumber)}
            <br /><br />
            
            <button type="submit">Create Customer</button>
         </form>
      </div>
   )
}
