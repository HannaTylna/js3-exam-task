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
         <Form margin padding boxShadow="5px 5px 5px 5px #262626" onSubmit={handleOnSubmit}>
            <Row>
               <Heading2>Create a new customer</Heading2>
            </Row>
            <Row flex>
               <Column col="4">
                  <Label htmlFor="name">Name </Label>
               </Column>
               <Column col="8">
                  <Input
                     type="text"
                     placeholder="Name"
                     value={name}
                     setValue={setName}
                     required="required"
                  /><br/>
               </Column>
            </Row>
            <Row flex>
               <Column col="4">
                  <Label htmlFor="organisationNr">Organisation Number </Label>
               </Column>
               <Column col="8">
                  <Input
                     type="text"
                     placeholder="Organisation Number"
                     value={organisationNr}
                     setValue={setOrganisationNr}
                     required="required"
                  /><br/>
               </Column>
            </Row>
            <Row flex>
               <Column col="4">
                  <Label htmlFor="organisationNr">VAT number </Label>
               </Column>
               <Column col="8">
                  <Input
                     type="text"
                     placeholder="SExxxxxxxxxx"
                     value={vatNr}
                     setValue={setVatNr}
                     required="required"
                  /><br/>
               </Column>
            </Row>
            <Row flex>
               <Column col="4">
                  <Label htmlFor="reference">Reference </Label>
               </Column>
               <Column col="8">
                  <Input
                     type="text"
                     placeholder="Reference"
                     value={reference}
                     setValue={setReference}
                     required="required"
                  /><br/>
               </Column>
            </Row>
            <Row flex>
               <Column col="4">
                  <Label htmlFor="paymentTerm">Payment Term </Label>
               </Column>
               <Column col="8">
                  <Input
                     type="number"
                     placeholder="Number of days"
                     value={paymentTerm}
                     setValue={setPaymentTerm}
                     required="required"
                  /><br/>
               </Column>
            </Row>
            <Row flex>
               <Column col="4">
                  <Label htmlFor="website">Website </Label>
               </Column>
               <Column col="8">
                  <Input
                     type="text"
                     placeholder="Website"
                     value={website}
                     setValue={setWebsite}
                     required="required"
                  /><br/>
               </Column>
            </Row>
            <Row flex>
               <Column col="4">
                  <Label htmlFor="email">Email </Label>
               </Column>
               <Column col="8">
                  <Input
                     type="text"
                     placeholder="exempel@exempel.com"
                     value={email}
                     setValue={setEmail}
                     required="required"
                  /><br/>
               </Column>
            </Row>
            <Row flex>
               <Column col="4">
                  <Label htmlFor="phoneNumber">Phone Number </Label>
               </Column>
               <Column col="8">
                  <Input
                     type="text"
                     placeholder="077 777 77 77"
                     value={phoneNumber}
                     setValue={setPhoneNumber}
                     required="required"
                  /><br/>
               </Column>
            </Row>
            <Button type="submit">Create a new customer</Button>
         </Form>
      </>
   )
}