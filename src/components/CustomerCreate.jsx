import React, { useState } from "react";

import Button from "./Button";
import Form from "./Form";
import Heading2 from "./Heading2";
import Input from "./Input";
import Label from "./Label";

export default function CustomerCreate(props) {
   const [name, setName] = useState("");
   const [organisationNr, setOrganisationNr] = useState("");
   const [vatNr, setVatNr] = useState("");
   const [reference, setReference] = useState("");
   const [paymentTerm, setPaymentTerm] = useState("");
   const [website, setWebsite] = useState("");
   const [email, setEmail] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");

   function handleOnSubmit(e) {
      e.preventDefault();

      const regexVatNr = /^SE[0-9]{10}$/;
      const regexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

      if (!regexVatNr.test(vatNr)) {
         alert(
            "Wrong format! You need to write SExxxxxxxxxx."
         )
         return false;
      } else
      
      if (!regexEmail.test(email)) {
         alert(
            "You have entered an invalid email address!"
         )
         return false;
      }
      
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
      <>
         <Form margin width="70%" padding boxShadow="5px 5px 5px 5px #262626" onSubmit={handleOnSubmit}>
            <Heading2>Create a new customer</Heading2>
            <Label htmlFor="name">Name: </Label>
            <Input
               type="text"
               placeholder="Name"
               value={name}
               setValue={setName}
            /><br />
            <Label htmlFor="organisationNr">Organisation Number: </Label>
            <Input
               type="text"
               placeholder="Organisation Number"
               value={organisationNr}
               setValue={setOrganisationNr}
            /><br />
            <Label htmlFor="vatNr">VAT number: </Label>
            <Input
               type="text"
               placeholder="SExxxxxxxxxx"
               value={vatNr}
               setValue={setVatNr}
            /><br />
            <Label htmlFor="reference">Reference: </Label>
            <Input
               type="text"
               placeholder="Reference"
               value={reference}
               setValue={setReference}
            /><br />
            <Label htmlFor="paymentTerm">Payment Term: </Label>
            <Input
               type="number"
               placeholder="Number of days"
               value={paymentTerm}
               setValue={setPaymentTerm}
            /><br />
            <Label htmlFor="website">Website: </Label>
            <Input
               type="text"
               placeholder="exempel.com"
               value={website}
               setValue={setWebsite}
            /><br />
            <Label htmlFor="email">Email: </Label>
            <Input
               type="text"
               placeholder="exempel@exempel.com"
               value={email}
               setValue={setEmail}
            /><br />
            <Label htmlFor="phoneNumber">Phone Number: </Label>
            <Input
               type="text"
               placeholder="077 777 77 77"
               value={phoneNumber}
               setValue={setPhoneNumber}
            /><br />
            <Button type="submit">Create a new customer</Button>
         </Form>
      </>
   )
}
