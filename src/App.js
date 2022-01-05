import React, { useState, createContext, useCallback, useEffect }  from "react";
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

   const fetchData = useCallback(() => {
      const url = "https://frebi.willandskill.eu/api/v1/customers/"
      const token = localStorage.getItem("exam");
      fetch(url, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
         }
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data.results)
            setCustomerList(data.results)
         })
   }, [setCustomerList]);

   useEffect(() => {
      fetchData();
   }, [fetchData])

   const getUserInformation = useCallback(() => {
      const token = localStorage.getItem("exam");
      const url = "https://frebi.willandskill.eu/api/v1/me";
      fetch(url, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
         }
      })
         .then(res => res.json())
         .then(data => setMyData(data))
   }, [setMyData]);

   useEffect(() => {
      getUserInformation();
   }, [getUserInformation])
   

   return (
      <MyDataContext.Provider value={{ myData, setMyData, customerList, setCustomerList }}>
         <Container>
            <Routes>
               <Route path="/" element={<LoginPage /> }/>
               <Route path="/home" element={<HomePage refresh = {fetchData} />} />
               <Route path="/home/:id" element={<CustomerDetailPage refresh={getUserInformation} refresh_customer = {fetchData}/>}/>
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