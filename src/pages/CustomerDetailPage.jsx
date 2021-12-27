import React from 'react';
import CustomerDetail from '../components/CustomerDetail';
import { useParams } from 'react-router-dom';

export default function CustomerDetailPage() {
   const params = useParams();
   return (
      <div>
         <CustomerDetail id={params.id}/>
      </div>
   )
}