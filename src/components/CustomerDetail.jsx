import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Flex from './Flex';
import Heading1 from './Heading1';
import Input from './Input';
import Paragragh from './Paragragh';
import Row from './Row';
import Column from "./Column";
import Label from "./Label";

export default function CustomerDetail(props) {
   const [customerDetail, setCustomerDetail] = useState({});
   const [name, setName] = useState("");
   const [organisationNr, setOrganisationNr] = useState("");
   const [vatNr, setVatNr] = useState("");
   const [reference, setReference] = useState("");
   const [paymentTerm, setPaymentTerm] = useState("");
   const [website, setWebsite] = useState("");
   const [email, setEmail] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const navigate = useNavigate();
   

   function renderInput(type, placeholder, value, setValue) {
      return <Input
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={(e) => { setValue(e.target.value) }}
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
   function handleOnSelect(id) {
      console.log(id);
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
         setName(customerDetail.name);
         setOrganisationNr(customerDetail.organisationNr);
         setVatNr(customerDetail.vatNr);
         setReference(customerDetail.reference);
         setPaymentTerm(customerDetail.paymentTerm);
         setWebsite(customerDetail.website);
         setEmail(customerDetail.email);
         setPhoneNumber(customerDetail.phoneNumber);
      })
   }

   function handleOnSubmit(e) {
      e.preventDefault()
      const regex = /^SE[0-9]{10}$/; 
      if (!regex.test(vatNr)) {
         alert(
            "Wrong format! You need to write SExxxxxxxxxx."
         )
         return false;
      }
      const url = `https://frebi.willandskill.eu/api/v1/customers/${props.id}/`;
      const token = localStorage.getItem("exam");
      const headers = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
      };
      const payload = {
         name,
         organisationNr,
         vatNr,
         reference,
         paymentTerm,
         website,
         email,
         phoneNumber
      };
      fetch(url, {
         method: "PUT", //"PATCH"
         headers: headers,
         body: JSON.stringify(payload)
      })
         .then((result) => {
            result.json()
            .then(data => {
               console.log(data);
               setCustomerDetail(data);
            })
         })
   }

   return (
      <div>
         {customerDetail ? (
            <>
               <Heading1 border="2px double #000">You are viewing customer with id {customerDetail.id}</Heading1>
               <Paragragh margin><strong>Name:</strong> {customerDetail.name}</Paragragh>
               <Paragragh margin><strong>Organisation number:</strong> {customerDetail.organisationNr}</Paragragh>
               <Paragragh margin><strong>VAT number:</strong> {customerDetail.vatNr}</Paragragh>
               <Paragragh margin><strong>Reference:</strong> {customerDetail.reference}</Paragragh>
               <Paragragh margin><strong>Payment Term:</strong> {customerDetail.paymentTerm} days</Paragragh>
               <Paragragh margin><strong>Website:</strong> {customerDetail.website}</Paragragh>
               <Paragragh margin><strong>Email:</strong> {customerDetail.email}</Paragragh>
               <Paragragh margin><strong>Phone number:</strong> {customerDetail.phoneNumber}</Paragragh>
               <Flex margin>
                  <Button onClick={() => handleOnSelect(customerDetail.id)}>Update information</Button>
                  <Button onClick={() => handleOnDelete(customerDetail.id)}>Delete customer</Button>
               </Flex>
            </>
         ) : "Not found"}

         <form onSubmit= {handleOnSubmit}>
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
                  {renderInput("text", "SExxxxxxxxxx", vatNr, setVatNr)} <br />
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
                  {renderInput("number", "xx", paymentTerm, setPaymentTerm)} <br />
               </Column>
            </Row>
            <Row>
               <Column col="4">
                  <Label htmlFor="website">Website: </Label>
               </Column>
               <Column col="8">
                  {renderInput("text", "exempel.com", website, setWebsite)} <br />
               </Column>
            </Row>
            <Row>
               <Column col="4">
                  <Label htmlFor="email">Email: </Label>
               </Column>
               <Column col="8">
                  {renderInput("text", "exempel@exempel.com", email, setEmail)} <br />
               </Column>
            </Row>
            <Row>
               <Column col="4">
                  <Label htmlFor="phoneNumber">Phone Number: </Label>
               </Column>
               <Column col="8">
                  {renderInput("text", "077 777 77 77", phoneNumber, setPhoneNumber)}
                  <br /><br />
               </Column>
            </Row>
            
            <Button type="submit">Update Customer</Button>
         </form>
      </div>
   )
}