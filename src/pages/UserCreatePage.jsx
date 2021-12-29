import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Flex from '../components/Flex';
import Form from '../components/Form';
import Heading1 from '../components/Heading1';
import Input from '../components/Input';
import Label from '../components/Label';
import Paragragh from '../components/Paragragh';



export default function UserCreatePage() {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [organisationName, setOrganisationName] = useState("");
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
         organisationKind: "1",
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
      <Flex>
         <Form onSubmit={handleOnSubmit}>
            <Heading1>Registration</Heading1>
            <Label htmlFor="firstName">First Name</Label>
            <Input
               type="text"
               value={firstName}
               placeholder="First Name"
               onChange={(e) => setFirstName(e.target.value)}
            /><br/>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
               type="text"
               value={lastName}
               placeholder="Last Name"
               onChange={(e) => setLastName(e.target.value)}
            /><br/>
            <Label htmlFor="email">Email</Label>
            <Input
               type="text"
               value={email}
               placeholder="Email"
               onChange={(e) => setEmail(e.target.value)}
            /><br/>
            <Label htmlFor="password">Password</Label>
            <Input
               type="password"
               value={password}
               placeholder="Password"
               onChange={(e) => setPassword(e.target.value)}
            /><br/>
            <Label htmlFor="organisationName">Organisation Name</Label>
            <Input
               type="text"
               value={organisationName}
               placeholder="Organisation Name"
               onChange={(e) => setOrganisationName(e.target.value)}
            /><br/><br/>
            <Button type="submit">Sign up</Button>
         </Form>
         <Paragragh>If you already have login information, click
            <Link to="/"> here</Link>
         </Paragragh>
      </Flex>
      
   )
}
