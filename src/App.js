import React, { useState, createContext }  from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserCreate from "./pages/UserCreate";

const InformationContext = createContext({});
   
function App() {

   const [customerList, setCustomerList] = useState(null);
   const [myData, setMyData] = useState(null);

   return (
      <InformationContext.Provider value={{customerList, setCustomerList, myData, setMyData}}>
         <div>
            <Routes>
               <Route path="/" element={<LoginPage /> }/>
               <Route path="/home" element={<HomePage />} />
               <Route path="/home/:id" element={<CustomerDetailPage />}/>
               <Route path="/auth/users/" element={<UserCreate />} />
            </Routes>
         </div>
      </InformationContext.Provider>
   );
}

export { InformationContext };
export default App;
