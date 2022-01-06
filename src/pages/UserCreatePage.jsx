import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import Paragragh from '../components/Paragragh';
import Link from '../components/Link';
import Heading2 from '../components/Heading2';
import FormInput from '../components/FormInput';



export default function UserCreatePage() {
   
   const inputs = [
      {
         id: 1,
         name: "firstName",
         type: "text",
         placeholder: "First Name",
         errorMessage:
            "Name should be 2-16 characters and shouldn't include any special character!",
         label: "First Name",
         pattern: "^[A-Za-z0-9]{2,16}$",
         required: true,
      },
      {
         id: 2,
         name: "lastName",
         type: "text",
         placeholder: "Last Name",
         errorMessage:
            "Name should be 2-16 characters and shouldn't include any special character!",
         label: "Last Name",
         pattern: "^[A-Za-z0-9]{2,16}$",
         required: true,
      },
      {
         id: 3,
         name: "email",
         type: "email",
         placeholder: "Email",
         errorMessage: "It should be a valid email address!",
         label: "Email",
         required: true,
      },
      {
         id: 4,
         name: "password",
         type: "password",
         placeholder: "Password",
         errorMessage:
            "Password should be at least 8 characters",
         label: "Password",
         pattern: "^.{8,}$",
         required: true,
      },
      {
         id: 5,
         name: "organisationName",
         type: "text",
         placeholder: "Organisation Name",
         errorMessage: "The field is required",
         label: "Organisation Name",
         required: true,
      },
      {
         id: 6,
         name: "organisationKind",
         type: "text",
         placeholder: "Organisation Kind",
         errorMessage: "Organisation Kind should be number between 0-2",
         pattern: "^[012]{1}$",
         label: "Organisation Kind",
         required: true,
      },
   ]
   const [values, setValues] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      organisationName: "",
      organisationKind: "",
   });

   const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
   };
   
   const [response, setResponse] = useState(null);
   const navigate = useNavigate();

   function handleOnSubmit(e) {
      e.preventDefault();
      const url = "https://frebi.willandskill.eu/auth/users/";
      const payload = {
         ...values
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
            setResponse(data)
      })
   }
   

   return (
      <>
         <Form width="40%" margin="30px auto" onSubmit={handleOnSubmit}>
            <Heading2 color="#fff">Registration</Heading2>
            {inputs.map((input) => (
               <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={setValues}
               />
            ))}
            <Button type="submit">Sign in</Button>
         </Form>
         
         <Paragragh marginBottom="50px" textAlign="center">If you already have login information, click  
            <Link href="/"> here</Link>
         </Paragragh>
         {response && (
            navigate("/activate")
         )}
      </>
      
   )
}
