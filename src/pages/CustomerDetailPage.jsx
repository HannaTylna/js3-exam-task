import React from 'react';
import { useParams } from 'react-router-dom';

import CustomerDetail from '../components/CustomerDetail';
import MyData from '../components/MyData';

export default function CustomerDetailPage() {
   const params = useParams();
   return (
      <>
         <MyData />
         <CustomerDetail id={params.id}/>
      </>
   )
}