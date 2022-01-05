import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { inputs } from './Variables';

import Button from './Button';
import FormInput from './FormInput';
import Column from '../components/Column';
import Form from './Form';
import Heading2 from './Heading2';
import Flex from './Flex';
import Table from './Table';
import TableBody from './TableBody'; 
import NavBar from './NavBar';
import Link from './Link';
import Footer from './Footer';

export default function CustomerDetail(props) {
   const [customerDetail, setCustomerDetail] = useState({});
   const navigate = useNavigate();

   const [values, setValues] = useState({
      name: "",
      organisationNr: "",
      vatNr: "",
      reference: "",
      paymentTerm: "",
      weebsite: "",
      email: "",
      phoneNumber: "",
   });

   const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      
      const url = `https://frebi.willandskill.eu/api/v1/customers/${props.id}/`;
      const token = localStorage.getItem("exam");
      const headers = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
      };
      const payload = {
         ...values
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
   };

   

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
         .then((res) => {
            props.refresh_customer()
            navigate("/home")
         })
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
         setValues(customerDetail)
      })
   }

   

   return (
      <>
         {customerDetail ? (
            <>
               <NavBar refresh={props.refresh}/>
               <Flex display="block" margin="100px 50px 100px 50px">
                  
                  <Column margin="5px" col="1">
                     <Link href="/home" border="none">
                        <img
                           alt="A back arrow"
                           src="https://img.icons8.com/ios-filled/50/4a90e2/left2.png"
                        />
                     </Link>
                  </Column>
                  <Column col="5" width="80%">
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
                  <Column col="5" width="80%">
                     <Form onSubmit={handleSubmit}>
                        <Heading2 color="#fff">Update information</Heading2>
                        {inputs.map((input) => (
                           <FormInput
                              key={input.id}
                              {...input}
                              value={values[input.name]}
                              onChange={onChange}
                           />
                        ))}
                        <Button type="submit" margin="10px auto">Update</Button>
                     </Form>
                  </Column>
               </Flex>
               
               <Footer />
            </>
         ) : "Not found"}
      </>
   )
}