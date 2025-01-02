import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PageContent from "@/layout/PageContent";
import axiosInstance from "@/redux/axiosInstance";

function PreviousOrdersPage() {
  const user = useSelector((state) => state.client.user);
  const history = useHistory();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [openOrderIds, setOpenOrderIds] = useState([]);

  useEffect(() => {
    if (!user) {
      history.push("/login");
      return;
    }
    fetchOrders();
  }, [user, history]);

  const fetchOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axiosInstance.get("/order");
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("Error fetching orders");
    } finally {
      setLoading(false);
    }
  };

  const toggleOrderDetails = (orderId) => {
    if (openOrderIds.includes(orderId)) {
      setOpenOrderIds(openOrderIds.filter((id) => id !== orderId));
    } else {
      setOpenOrderIds([...openOrderIds, orderId]);
    }
  };

  if (loading) {
    return (
      <PageContent>
        <div className="p-4">
          <p>Loading your previous orders...</p>
        </div>
      </PageContent>
    );
  }

  if (error) {
    return (
      <PageContent>
        <div className="p-4">
          <p>{error}</p>
          <button
            onClick={fetchOrders}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Retry
          </button>
        </div>
      </PageContent>
    );
  }

  return (
    <PageContent>
      <div className="px-4 py-6 lg:px-32 font-monts">
        <h1 className="text-2xl font-bold mb-4">My Previous Orders</h1>

        {orders.length === 0 ? (
          <p>You have no previous orders.</p>
        ) : (
          <table className="min-w-full border">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-4 py-2 text-left">Order ID</th>
                <th className="px-4 py-2 text-left">Order Date</th>
                <th className="px-4 py-2 text-left">Total Price</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const isOpen = openOrderIds.includes(order.id);
                return (
                  <React.Fragment key={order.id}>
                    <tr className="border-b">
                      <td className="px-4 py-2">{order.id}</td>
                      <td className="px-4 py-2">
                        {new Date(order.order_date).toLocaleString()}
                      </td>
                      <td className="px-4 py-2">
                        ₺{(order.price || 0).toFixed(2)}
                      </td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => toggleOrderDetails(order.id)}
                          className="text-blue-600 hover:underline"
                        >
                          {isOpen ? "Hide Details" : "Show Details"}
                        </button>
                      </td>
                    </tr>

                    {isOpen && (
                      <tr className="border-b bg-gray-50">
                        <td colSpan={4} className="p-4">
                          <p className="font-semibold text-lg mb-2">
                            Products in this order:
                          </p>
                          {order.products && order.products.length > 0 ? (
                            <div className="space-y-4">
                              {order.products.map((prod, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-3 border-b pb-3"
                                >
                                  {prod.images && prod.images[0] && (
                                    <img
                                      src={prod.images[0].url}
                                      alt={prod.name}
                                      className="w-20 h-20 object-cover rounded"
                                    />
                                  )}

                                  <div className="flex-1">
                                    <p className="font-semibold">{prod.name}</p>
                                    <p className="text-sm text-gray-600">
                                      {prod.description}
                                    </p>
                                    <p className="mt-1">
                                      Price:{" "}
                                      <span className="text-green-600 font-semibold">
                                        ₺{prod.price.toFixed(2)}
                                      </span>{" "}
                                      x {prod.count} = ₺
                                      {(prod.price * prod.count).toFixed(2)}
                                    </p>
                                  </div>
                                  <div className="flex flex-col gap-2 flex-1">
                                    <p className="font-semibold">Ödeme Bilgileri:</p>
                                    <div>
                                    <p>{order.card_name}</p>
                                    <p>{order.card_no}</p>
                                    <div className="flex gap-2">
                                    <p>{order.card_expire_month}</p>
                                    <p>/</p>
                                    <p>{order.card_expire_year}</p>
                                    </div>

                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p>No products found for this order.</p>
                          )}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </PageContent>
  );
}

export default PreviousOrdersPage;
