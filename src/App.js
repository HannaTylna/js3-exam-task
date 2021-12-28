import React, { useState, createContext }  from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserCreate from "./pages/UserCreate";
import Container from "./components/Container";

const MyDataContext = createContext([]);
const CustomerContext = createContext([]);
   
function App() {

   const [customerList, setCustomerList] = useState(null);
   const [myData, setMyData] = useState(null);
   

   return (
      <MyDataContext.Provider value={{ myData, setMyData}}>
         <CustomerContext.Provider value={{customerList, setCustomerList}}>
            <Container>
               <Routes>
                  <Route path="/" element={<LoginPage /> }/>
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/home/:id" element={<CustomerDetailPage />}/>
                  <Route path="/auth/users/" element={<UserCreate />} />
               </Routes>
            </Container>
         </CustomerContext.Provider>
      </MyDataContext.Provider>
   );
}

export { MyDataContext, CustomerContext };
export default App;