import React, { useState } from "react";
import Button from "./Button";
import Form from "./Form";
import Heading2 from "./Heading2";
import Input from "./Input";
import Label from "./Label";
import Row from "./Row";
import Column from "./Column";
import Flex from "./Flex";

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
      return <Input
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
      <Flex>
         <Form margin width="70%" padding boxShadow="5px 5px 5px 5px #262626" onSubmit={handleOnSubmit}>
            <Row>
               <Heading2>Create a new customer</Heading2>
            </Row>
            <Row>
               <Column col="4">
                  <Label htmlFor="name">Name: </Label>
               </Column>
               <Column col="8">
                  {renderInput("text", "Name", name, setName)} <br />
               </Column>
            </Row>
            <Row>
               <Column col="4">
                  <Label htmlFor="organisationNr">Organisation Number: </Label>
               </Column>
               <Column col="8">
                  {renderInput("text", "Organisation Number", organisationNr, setOrganisationNr)} <br />
               </Column>
            </Row>
            <Row>
               <Column col="4">
                  <Label htmlFor="vatNr">VAT number: </Label>
               </Column>
               <Column col="8">
                  {renderInput("text", "VAT number", vatNr, setVatNr)} <br />
               </Column>
            </Row>
            <Row>
               <Column col="4">
                  <Label htmlFor="reference">Reference: </Label>
               </Column>
               <Column col="8">
                  {renderInput("text", "Reference", reference, setReference)} <br />
               </Column>
            </Row>
            <Row>
               <Column col="4">
                  <Label htmlFor="paymentTerm">Payment Term: </Label>
               </Column>
               <Column col="8">
                  {renderInput("text", "Payment Term", paymentTerm, setPaymentTerm)} <br />
               </Column>
            </Row>
            <Row>
               <Column col="4">
                  <Label htmlFor="website">Website: </Label>
               </Column>
               <Column col="8">
                  {renderInput("text", "Website", website, setWebsite)} <br />
               </Column>
            </Row>
            <Row>
               <Column col="4">
                  <Label htmlFor="email">Email: </Label>
               </Column>
               <Column col="8">
                  {renderInput("text", "Email", email, setEmail)} <br />
               </Column>
            </Row>
            <Row>
               <Column col="4">
                  <Label htmlFor="phoneNumber">Phone Number: </Label>
               </Column>
               <Column col="8">
                  {renderInput("text", "Phone Number", phoneNumber, setPhoneNumber)}
                  <br /><br />
               </Column>
            </Row>
            <Button type="submit">Create a new customer</Button>
         </Form>
      </Flex>
   )
}
