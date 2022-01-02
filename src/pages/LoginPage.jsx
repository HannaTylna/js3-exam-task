import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Heading1 from "../components/Heading1";
import Heading2 from "../components/Heading2";
import Paragragh from "../components/Paragragh";
import Label from "../components/Label";
import Input from "../components/Input";
import Form from "../components/Form";
import Button from "../components/Button";
import Link from "../components/Link";
import Flex from "../components/Flex";
import Row from "../components/Row";
import Column from "../components/Column";


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
      <>
         <Flex col marginTop="100px">
            <Row>
               <Column col="5">
                  <Heading1 center>Welcome to Registration24!<br/><br/>Please, enter your data!</Heading1>
                  <Paragragh marginBottom="50px" textAlign="center">If you want to register, please click  
                     <Link href="/auth/users/"> here</Link>
                  </Paragragh>
               </Column>
               <Column col="7">
                  <Form padding boxShadow="5px 5px 5px 5px #262626"  onSubmit={handleOnSubmit}>
                     <Row>
                        <Heading2>Login</Heading2>
                     </Row>
                     <Row flex>
                        <Column col="4" color>
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
                     <Button type="submit">Login</Button>
                  </Form>
               </Column>
            
            </Row>
            
         </Flex> 
      </>
   )
}