import React from "react";
import { Link } from "react-router-dom";
import PageContent from "@/layout/PageContent";

function OrderSuccessPage() {
  return (
    <PageContent>
      <div className="flex flex-col items-center justify-center p-8 font-monts gap-2">
        <div className="text-8xl text-green-500 mb-4">✓</div>
        <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
          Thank you for your order! We’ll notify you via email when your items are shipped. 
          If you have any questions about your order, feel free to reach out.
        </p>
        <div className="flex flex-col gap-5 md:flex-row">
          <Link
            to="/shop"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
          <Link
            to="/orders" 
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300 flex justify-center"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </PageContent>
  );
}

export default OrderSuccessPage;