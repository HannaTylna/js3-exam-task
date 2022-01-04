import React, { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export default function UserActivatePage() {
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
      const params = new URLSearchParams(location.search);
      const uid = params.get("uid");
      const token = params.get("token");
      const url = "https://frebi.willandskill.eu/auth/users/activate/";

      const payload = {
         uid,       
         token
         }

      fetch(url, {
            method: "POST",
            headers: {
               "Content-Type" : "application/json",
            },
            body: JSON.stringify(payload)
      })
      .then(res => navigate("/"))
   }, [location.search, navigate])

   return (<></>)
}