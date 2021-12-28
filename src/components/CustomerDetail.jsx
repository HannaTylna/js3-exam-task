import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Flex from './Flex';
import Heading1 from './Heading1';
import Paragragh from './Paragragh';

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
      return <input
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
   function handleOnSubmit(e) {
      e.preventDefault()
      const url = `https://frebi.willandskill.eu/api/v1/customers/${props.id}/`
      const token = localStorage.getItem("exam")
      const headers = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`,
         'Accept': 'application/json',
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
      };
      fetch(url, {
         method: "PUT", //"PATCH"
         headers: headers,
         body: JSON.stringify(payload)
      })
      .then(res => res.json())
         .then(data => {
            setCustomerDetail(data)
            setName(data.name)
            setOrganisationNr(data.organisationNr)
            setVatNr(data.vatNr)
            setReference(data.reference)
            setPaymentTerm(data.paymentTerm)
            setWebsite(data.website)
            setEmail(data.email)
            setPhoneNumber(data.phoneNumber)
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
                  {/*<Button onClick={() => handleOnSelect(customerDetail.id)}>Update information</Button>*/}
                  <Button onClick={() => handleOnDelete(customerDetail.id)}>Delete customer</Button>
               </Flex>
            </>
         ) : "Not found"}
         <form onSubmit= {handleOnSubmit}>
            <label htmlFor="name">Name: </label>
            <input
               value={name}
               onChange={e => setName(e.target.value)}
            /><br />
            {/*{renderInput({name}, setName)} <br />*/}
            {/*<label htmlFor="organisationNr">Organisation Number: </label>
            {renderInput( customerDetail.organisationNr, setOrganisationNr)} <br />
            <label htmlFor="vatNr">VAT number: </label>
            {renderInput( customerDetail.vatNr, setVatNr)} <br />
            <label htmlFor="reference">Reference: </label>
            {renderInput( customerDetail.reference, setReference)} <br />
            <label htmlFor="paymentTerm">Payment Term: </label>
            {renderInput( customerDetail.paymentTerm, setPaymentTerm)} <br />
            <label htmlFor="website">Website: </label>
            {renderInput(customerDetail.website, setWebsite)} <br />
            <label htmlFor="email">Email: </label>
            {renderInput(customerDetail.email, setEmail)} <br />
            <label htmlFor="phoneNumber">Phone Number: </label>
            {renderInput( customerDetail.phoneNumber, setPhoneNumber)}*/}
            <br /><br />
            
            <Button type="submit">Update Customer</Button>
         </form>
      </div>
   )
}