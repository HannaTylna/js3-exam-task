import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Heading1 from "../components/Heading1";
import Label from "../components/Label";
import Input from "../components/Input";
import Flex from "../components/Flex";
import Row from "../components/Row";
import Column from "../components/Column";
import Form from "../components/Form";
import Button from "../components/Button";


export default function LoginPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   function handleOnSubmit(e) {
      e.preventDefault();
      const payload = { email, password };
      const url = "https://frebi.willandskill.eu/api-token-auth/";
      fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(payload)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            const token = data.token;
            localStorage.setItem("exam", token)
            navigate("/home")
      })
   }
   return (
      <Flex margin padding>
         <Heading1 margin="50px auto">Welcome to Registration24!<br/><br/>Please, enter your data!</Heading1>
         <Form padding boxShadow="5px 5px 5px 5px #262626" onSubmit={handleOnSubmit}>
            <Row>
               <Heading1>Login</Heading1>
            </Row>
            <Row>
               <Column col="3">
                  <Label htmlFor="email">Email: </Label>
               </Column>
               <Column col="6">
                  <Input
                     type="text"
                     placeholder="Email"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                  /><br/>
               </Column>
            </Row>
            <Row>
               <Column col="3" >
                  <Label htmlFor="password">Password: </Label>
               </Column>
               <Column col="6">
                  <Input
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                  /><br/><br/>
               </Column>
            </Row>
            <Button type="submit">Login</Button>
         </Form>
      </Flex>
   )
}
