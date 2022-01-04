import React, { useState, createContext }  from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Container from "./components/Container";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserCreatePage from "./pages/UserCreatePage";
import UserActivatePage from "./pages/UserActivatePage";
import ActivateTextPage from "./pages/ActivateTextPage";

const MyDataContext = createContext([]);
   
function App() {

   const [customerList, setCustomerList] = useState(null);
   const [myData, setMyData] = useState(null);
   

   return (
      <MyDataContext.Provider value={{ myData, setMyData, customerList, setCustomerList }}>
         <Container>
            <Routes>
               <Route path="/" element={<LoginPage /> }/>
               <Route path="/home" element={<HomePage />} />
               <Route path="/home/:id" element={<CustomerDetailPage />}/>
               <Route path="/auth/users/" element={<UserCreatePage />} />
               <Route path="/activate" element={<ActivateTextPage />} />
               <Route path="/login" element={<UserActivatePage />} />
            </Routes>
         </Container>
      </MyDataContext.Provider>
   );
}

export { MyDataContext };
export default App;