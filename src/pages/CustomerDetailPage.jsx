import React from 'react';
import { useParams } from 'react-router-dom';

import CustomerDetail from '../components/CustomerDetail';

export default function CustomerDetailPage() {
   const params = useParams();
   return (
      <CustomerDetail id={params.id}/>
   )
}