import React, { useState } from "react";

import Button from "./Button";
import Column from "./Column";
import Form from "./Form";
import Heading2 from "./Heading2";
import Input from "./Input";
import Label from "./Label";
import Row from "./Row";

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
         <Form onSubmit={handleOnSubmit}>
            <Row>
               <Heading2 color="#fff" >Create a new customer</Heading2>
            </Row>
            <Column col="8" margin="5px auto">
               <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  setValue={setName}
                  required="required"
               /><br/>
            </Column>
            <Column col="8" margin="5px auto" >
               <Input
                  type="text"
                  placeholder="Organisation Number"
                  value={organisationNr}
                  setValue={setOrganisationNr}
                  required="required"
               /><br/>
            </Column>
            <Column col="8" margin="5px auto">
               <Input
                  type="text"
                  placeholder="VAT number"
                  value={vatNr}
                  setValue={setVatNr}
                  required="required"
               /><br/>
            </Column>
            <Column col="8" margin="5px auto">
               <Input
                  type="text"
                  placeholder="Reference"
                  value={reference}
                  setValue={setReference}
                  required="required"
               /><br/>
            </Column>
            <Column col="8" margin="5px auto">
               <Input
                  type="number"
                  placeholder="Payment Term (days)"
                  value={paymentTerm}
                  setValue={setPaymentTerm}
                  required="required"
               /><br/>
            </Column>
            <Column col="8" margin="5px auto">
               <Input
                  type="text"
                  placeholder="Website"
                  setValue={setWebsite}
                  required="required"
               /><br/>
            </Column>
            <Column col="8" margin="5px auto">
               <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  setValue={setEmail}
                  required="required"
               /><br/>
            </Column>
            <Column col="8" margin="5px auto">
               <Input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  setValue={setPhoneNumber}
                  required="required"
               /><br/>
            </Column>
            <Button type="submit" margin="15px auto 0px auto">Create a new customer</Button>
         </Form>
      </>
   )
}