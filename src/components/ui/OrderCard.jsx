import StatusBar from "./StatusBar";
import OrderItemList from "./OrderItemList";
import StatusBadge from "./StatusBadge";

const statusVariantMap = {
  Pending: "info",
  Preparing: "warning",
  Ready: "success",
  Delivered: "success",
  Cancelled: "error",
};

const OrderCard = ({ order }) => {
  const { id, customerName, status, totalAmount, orderItems } = order;

  const variant = statusVariantMap[status] || "neutral";

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border space-y-4 w-full max-w-2xl mx-auto">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Order #{id}</h2>
          <p className="text-sm text-gray-500">Customer: {customerName}</p>
        </div>
        <StatusBadge variant={variant}>
          {status}
        </StatusBadge>
      </div>

      <OrderItemList items={orderItems} />

      <div className="text-right font-semibold text-gray-800">
        Total: ${totalAmount}
      </div>

      <StatusBar currentStatus={status} />
    </div>
  );
};

export default OrderCard;
