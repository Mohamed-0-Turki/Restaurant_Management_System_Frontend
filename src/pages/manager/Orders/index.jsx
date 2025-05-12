import React from "react";
import { OrderCard } from "../../../components/ui";

const Orders = () => {
  const orders = [
    {
      id: 1,
      customerName: "Yael Buckley",
      status: "Cancelled",
      totalAmount: 610,
      orderItems: [
        { menuItemId: 3, menuItemName: "string", quantity: 1, unitPrice: null },
        { menuItemId: 4, menuItemName: "string", quantity: 1, unitPrice: null },
        { menuItemId: 8, menuItemName: "Kasper Middleton", quantity: 1, unitPrice: null },
      ],
    },
    {
      id: 2,
      customerName: "Mohamed Tarek",
      status: "Preparing",
      totalAmount: 450,
      orderItems: [
        { menuItemId: 1, menuItemName: "Pizza Margherita", quantity: 2, unitPrice: 150 },
        { menuItemId: 2, menuItemName: "Cheesy Garlic Bread", quantity: 1, unitPrice: 50 },
      ],
    },
    {
      id: 3,
      customerName: "Sara Johnson",
      status: "Delivered",
      totalAmount: 320,
      orderItems: [
        { menuItemId: 5, menuItemName: "Caesar Salad", quantity: 1, unitPrice: 120 },
        { menuItemId: 6, menuItemName: "Iced Tea", quantity: 2, unitPrice: 100 },
      ],
    },
    {
      id: 4,
      customerName: "Liam Smith",
      status: "Pending",
      totalAmount: 200,
      orderItems: [
        { menuItemId: 7, menuItemName: "Beef Burger", quantity: 1, unitPrice: 100 },
        { menuItemId: 8, menuItemName: "Fries", quantity: 2, unitPrice: 50 },
      ],
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Orders;
