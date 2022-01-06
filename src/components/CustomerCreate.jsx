import React, { useState } from "react";
import Button from "./Button";
import Form from "./Form";
import FormInput from "./FormInput";
import Heading2 from "./Heading2";
import { inputs } from "./Variables";


export default function CustomerCreate(props) {
   
const [values, setValues] = useState({
      name: "",
      organisationNr: "",
      vatNr: "",
      reference: "",
      paymentTerm: "",
      website: "",
      email: "",
      phoneNumber: "",
});
   const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const payload = {
         ...values
      }

      const url = "https://frebi.willandskill.eu/api/v1/customers/";
      const token = localStorage.getItem("exam");
      fetch(url, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
         body: JSON.stringify(payload)
      })
         .then(res => res.json())
         .then(data => {
            props.onSuccess()
         })
   };

   return (
      <Form onSubmit={handleSubmit}>
         <Heading2 color="#fff">Create Customer</Heading2>
         {inputs.map((input) => (
            <FormInput
               key={input.id}
               {...input}
               value={values[input.name]}
               onChange={onChange}
            />
         ))}
         <Button type="submit">Submit</Button>
      </Form>
   );
}