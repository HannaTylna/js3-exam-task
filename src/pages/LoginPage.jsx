import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

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
      <div>
         <h1>Login</h1>
         <form onSubmit={handleOnSubmit}>
            <label htmlFor="email">Email: </label>
            <input
               type="text"
               placeholder="Email"
               value={email}
               onChange={e => setEmail(e.target.value)}
            /><br/>
            <label htmlFor="password">Password: </label>
            <input
               type="password"
               placeholder="Password"
               value={password}
               onChange={e => setPassword(e.target.value)}
            /><br/><br/>
            <button type="submit">Login</button>
         </form>
      </div>
   )
}
