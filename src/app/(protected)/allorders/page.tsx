import { getUserOrders } from '@/services/order.services'
import React from 'react'

export default async function myOrdersPage() {

const orders = await getUserOrders();
console.log(orders);


  return (
    <div>myOrdersPage</div>
  )
}
