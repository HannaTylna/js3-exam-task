import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import Input from '../components/Input';
import Label from '../components/Label';
import Paragragh from '../components/Paragragh';
import Link from '../components/Link';
import Heading2 from '../components/Heading2';
import Row from '../components/Row';
import Column from '../components/Column';



export default function UserCreatePage() {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [organisationName, setOrganisationName] = useState("");
   const [organisationKind, setOrganisationKind] = useState("");
   const navigate = useNavigate();

   function handleOnSubmit(e) {
      e.preventDefault();
      const url = "https://frebi.willandskill.eu/auth/users/";
      const payload = {
         firstName,
         lastName,
         email,
         password,
         organisationName,
         organisationKind,
      }
      
      fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(payload)
      })
         .then(res => res.json())
         .then((data) => {
            console.log(data)
            navigate("/")
      })
   }
   

   return (
      <>
         <Form margin padding boxShadow="5px 5px 5px 5px #262626"  onSubmit={handleOnSubmit}>
            <Row>
               <Heading2>Registration</Heading2>
            </Row>
            <Row flex>
               <Column col="4">
                  <Label htmlFor="firstName">First Name </Label>
               </Column>
               <Column col="8">
                  <Input
                     type="text"
                     placeholder="First Name"
                     value={firstName}
                     setValue={setFirstName}
                     required="required"
                  /><br/>
               </Column>
            </Row>
            <Row flex>
               <Column col="4">
                  <Label htmlFor="lastName">Last Name </Label>
               </Column>
               <Column col="8">
                  <Input
                     type="text"
                     placeholder="Last Name"
                     value={lastName}
                     setValue={setLastName}
                     required="required"
                  /><br/>
               </Column>
            </Row>
            <Row flex>
               <Column col="4">
                  <Label htmlFor="email">Email: </Label>
               </Column>
               <Column col="8">
                  <Input
                     type="text"
                     placeholder="Email"
                     value={email}
                     setValue={setEmail}
                     required="required"
                  /><br/>
               </Column>
            </Row>
            <Row flex>
               <Column col="4">
                  <Label htmlFor="password">Password: </Label>
               </Column>
               <Column col="8">
                  <Input
                     type="password"
                     placeholder="Password"
                     value={password}
                     setValue={setPassword}
                     required="required"
                  /><br/>
               </Column>
            </Row>
            <Row flex>
               <Column col="4">
                  <Label htmlFor="organisationName">Organisation Name </Label>
               </Column>
               <Column col="8">
                  <Input
                     type="text"
                     placeholder="Organisation Name"
                     value={organisationName}
                     setValue={setOrganisationName}
                     required="required"
                  /><br/>
               </Column>
            </Row>
            <Row flex>
               <Column col="4">
                  <Label htmlFor="organisationKind">Organisation Kind (0-2)</Label>
               </Column>
               <Column col="8">
                  <Input
                     type="number"
                     placeholder="Organisation Kind"
                     value={organisationKind}
                     setValue={setOrganisationKind}
                     required="required"
                  /><br/>
               </Column>
            </Row>
            <Button type="submit">Sign in</Button>
         </Form>
         <Paragragh textAlign="center">If you already have login information, click  
            <Link href="/"> here</Link>
         </Paragragh>
      </>
      
   )
}
