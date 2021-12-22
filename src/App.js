import React  from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserCreate from "./pages/UserCreate";

function App() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<LoginPage /> }/>
            <Route path="/home" element={<HomePage />} />
            <Route path="/home/:id" element={<CustomerDetailPage />}/>
            <Route path="/auth/users/" element={<UserCreate />} />
         </Routes>
      </div>
   );
}

export default App;
