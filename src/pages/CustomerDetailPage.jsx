import React from 'react';
import { useParams } from 'react-router-dom';

import CustomerDetail from '../components/CustomerDetail';

export default function CustomerDetailPage(props) {
   const params = useParams();
   return (
      <CustomerDetail refresh={props.refresh} refresh_customer = {props.refresh_customer} id={params.id}/>
   )
}