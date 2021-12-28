import React from 'react';
import { useParams } from 'react-router-dom';

import CustomerDetail from '../components/CustomerDetail';
import Row from '../components/Row';
import Column from '../components/Column';
import MyData from '../components/MyData';
import Flex from '../components/Flex';

export default function CustomerDetailPage() {
   const params = useParams();
   return (
      <Flex margin>
         <Row>
            <Column col="4" textAlign="center">
               <MyData />
            </Column>
            <Column col="8">
               <CustomerDetail id={params.id}/>
            </Column>
         </Row>
      </Flex>
   )
}