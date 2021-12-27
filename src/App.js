import React, { useState, createContext }  from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserCreate from "./pages/UserCreate";
import Container from "./components/Container";

const InformationContext = createContext({});
   
function App() {

   const [customerList, setCustomerList] = useState(null);
   const [myData, setMyData] = useState(null);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   return (
      <InformationContext.Provider value={{email, setEmail, password, setPassword, customerList, setCustomerList, myData, setMyData}}>
         <Container>
            <Routes>
               <Route path="/" element={<LoginPage /> }/>
               <Route path="/home" element={<HomePage />} />
               <Route path="/home/:id" element={<CustomerDetailPage />}/>
               <Route path="/auth/users/" element={<UserCreate />} />
            </Routes>
         </Container>
      </InformationContext.Provider>
   );
}

export { InformationContext };
export default App;