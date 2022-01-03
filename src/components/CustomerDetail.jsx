import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './Button';
import Input from './Input';
import Column from '../components/Column';
import Form from './Form';
import Row from './Row';
import Heading2 from './Heading2';
import Flex from './Flex';
import Table from './Table';
import TableBody from './TableBody';
import NavBar from './NavBar';
import Link from './Link';

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
      <>
         {customerDetail ? (
            <>
               <NavBar />
               <Row>
                  <Column margin="5px">
                     <Link href="/home" border="none">
                        <img
                           alt="A back arrow"
                           src="https://img.icons8.com/ios-filled/50/4a90e2/left2.png"
                        />
                     </Link>
                     
                  </Column>
               </Row>
               <Row margin="40px">
                  <Column col="8" width="80%">
                     <Heading2 margin="0px auto 20px auto" textTransform="none">You are viewing customer with id {customerDetail.id}</Heading2>
                     <Table background="#5f6a91">
                        <tbody>
                           <TableBody tr>
                              <TableBody fontWeight="bold" textAlign="left">Name:</TableBody>
                              <TableBody>{customerDetail.name}</TableBody>
                           </TableBody>
                           <TableBody tr>
                              <TableBody fontWeight="bold" textAlign="left">Organisation number:</TableBody>
                              <TableBody>{customerDetail.organisationNr}</TableBody>
                           </TableBody>
                           <TableBody tr>
                              <TableBody fontWeight="bold" textAlign="left">VAT Number:</TableBody>
                              <TableBody>{customerDetail.vatNr}</TableBody>
                           </TableBody>
                           <TableBody tr>
                              <TableBody fontWeight="bold" textAlign="left">Reference:</TableBody>
                              <TableBody>{customerDetail.reference}</TableBody>
                           </TableBody>
                           <TableBody tr>
                              <TableBody fontWeight="bold" textAlign="left">Payment Term (days):</TableBody>
                              <TableBody>{customerDetail.paymentTerm}</TableBody>
                           </TableBody>
                           <TableBody tr>
                              <TableBody fontWeight="bold" textAlign="left">Website:</TableBody>
                              <TableBody>{customerDetail.website}</TableBody>
                           </TableBody>
                           <TableBody tr>
                              <TableBody fontWeight="bold" textAlign="left">Email:</TableBody>
                              <TableBody>{customerDetail.email}</TableBody>
                           </TableBody>
                           <TableBody tr>
                              <TableBody fontWeight="bold" textAlign="left">Phone number:</TableBody>
                              <TableBody>{customerDetail.phoneNumber}</TableBody>
                           </TableBody>
                           <TableBody tr>
                              <TableBody>
                                 <Button onClick={() => handleOnDelete(customerDetail.id)}>Delete customer</Button>
                              </TableBody>
                              <TableBody>
                                 <Button onClick={() => handleOnSelect(customerDetail.id)}>Update information</Button>
                              </TableBody>
                           </TableBody>
                        </tbody>
                     </Table>
                     <Flex>
                        
                        
                     </Flex>
                  </Column>
                  <Column col="4" width="80%">
                     <Form margin padding onSubmit={handleOnSubmit}>
                        <Row>
                           <Heading2 color="#fff">Update information</Heading2>
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
                              value={website}
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
                        <Button type="submit" margin="10px auto">Update</Button>
                     </Form>
                  </Column>
               </Row>
               </>
            ) : "Not found"}
      </>
   )
}