import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './Button';
import Heading1 from './Heading1';
import Input from './Input';
import Paragragh from './Paragragh';
import Label from "./Label";
import BackToHomePage from '../components/BackToHomePage';
import Column from '../components/Column';
import MyData from '../components/MyData';
import Form from './Form';
import Row from './Row';
import Heading2 from './Heading2';

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
      e.preventDefault();

      const regexVatNr = /^SE[0-9]{10}$/;
      const regexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

      if (!regexVatNr.test(vatNr)) {
         alert(
            "Wrong format! You need to write SExxxxxxxxxx."
         )
         return false;
      } 
      
      if (!regexEmail.test(email)) {
         alert(
            "You have entered an invalid email address!"
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
         <Column width="40%" col="3" padding="15px" textAlign="center" margin="20px auto 20px auto" >
            <BackToHomePage />
            <MyData />
         </Column>
         {customerDetail ? (
            <>
               <Heading1>You are viewing customer with id {customerDetail.id}</Heading1>
               <Paragragh margin><strong>Name:</strong> {customerDetail.name}</Paragragh>
               <Paragragh margin><strong>Organisation number:</strong> {customerDetail.organisationNr}</Paragragh>
               <Paragragh margin><strong>VAT number:</strong> {customerDetail.vatNr}</Paragragh>
               <Paragragh margin><strong>Reference:</strong> {customerDetail.reference}</Paragragh>
               <Paragragh margin><strong>Payment Term:</strong> {customerDetail.paymentTerm} days</Paragragh>
               <Paragragh margin><strong>Website:</strong> {customerDetail.website}</Paragragh>
               <Paragragh margin><strong>Email:</strong> {customerDetail.email}</Paragragh>
               <Paragragh margin><strong>Phone number:</strong> {customerDetail.phoneNumber}</Paragragh>
               <>
                  <Button onClick={() => handleOnSelect(customerDetail.id)}>Update information</Button>
                  <Button onClick={() => handleOnDelete(customerDetail.id)}>Delete customer</Button>
               </>
            </>
         ) : "Not found"}

         <Form margin padding boxShadow="5px 5px 5px 5px #262626" onSubmit={handleOnSubmit}>
            <Row>
               <Heading2>Update information</Heading2>
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
                  <Label htmlFor="vatNr">VAT number </Label>
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
            <Button type="submit">Update</Button>
         </Form>
      </div>
   )
}