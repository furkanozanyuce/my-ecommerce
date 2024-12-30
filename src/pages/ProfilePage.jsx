import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PageContent from "@/layout/PageContent";
import Gravatar from "react-gravatar";
import { Link } from "react-router-dom";
import axiosInstance from "@/redux/axiosInstance";
import { LogOut } from "lucide-react";
import { toast } from "react-toastify";

function getRoleName(roleId) {
    if (roleId === "1") return "Admin";
    if (roleId === "2") return "Store";
    if (roleId === "3") return "Customer";
    return "Unknown";
}

function ProfilePage() {
    const user = useSelector((state) => state.client.user);
    const history = useHistory();

    if (!user) {
        history.push("/login");
        return null;
    }

    const [lastOrders, setLastOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedOrderId, setExpandedOrderId] = useState(null);

    useEffect(() => {
        fetchLastOrders();
    }, []);

    const fetchLastOrders = async () => {
        setLoading(true);
        try {
            const res = await axiosInstance.get("/order");

            const sortedOrders = res.data
                .sort(
                    (a, b) =>
                        new Date(b.order_date).getTime() - new Date(a.order_date).getTime()
                )
                .slice(0, 3);

            setLastOrders(sortedOrders);
        } catch (err) {
            console.error("Error fetching last orders:", err);
        } finally {
            setLoading(false);
        }
    };

    const toggleOrderDetails = (orderId) => {
        setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
    };

    const logOutHandle = () => {
        localStorage.removeItem("token");
        toast.info("Logged out!")
        history.push("/login");
        location.reload();
    }

    return (
        <PageContent>
            <div className="py-6 px-12 font-monts">
                <div className="flex flex-col md:flex-row justify-evenly gap-12 md:gap-4">
                    <div>
                        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
                        <div className="flex items-center gap-4 mb-6">
                            <Gravatar
                                email={user.email}
                                size={80}
                                default="identicon"
                                className="rounded-full"
                            />
                            <div>
                                <p className="text-xl font-semibold">{user.name}</p>
                                <p className="text-gray-600">{getRoleName(user.role_id)}</p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <p>
                                <span className="font-semibold">Name:</span> {user.name}
                            </p>
                            <p>
                                <span className="font-semibold">Email:</span> {user.email}
                            </p>
                            <p>
                                <span className="font-semibold">Role:</span>{" "}
                                {getRoleName(user.role_id)}
                            </p>
                            <button onClick={logOutHandle} className="flex font-semibold text-blue-500 items-center gap-4 pt-4 md:pt-11 hover:text-blue-800">
                                Log Out <LogOut />
                            </button>
                        </div>
                    </div>
                    <div className="bg-white rounded min-w-[300px] max-w-[300px]">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-lg font-semibold">Last Orders</h2>
                            <Link to="/orders" className="text-blue-600 hover:underline">
                                View All
                            </Link>
                        </div>

                        {loading ? (
                            <p>Loading last orders...</p>
                        ) : lastOrders.length === 0 ? (
                            <p>No recent orders found.</p>
                        ) : (
                            <ul className="space-y-2">
                                {lastOrders.map((ord) => (
                                    <li key={ord.id} className="border p-3 rounded">
                                        <div className="flex items-center justify-between">
                                            <p>Order #{ord.id}</p>
                                            <p className="font-semibold">₺{ord.price.toFixed(2)}</p>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            {new Date(ord.order_date).toLocaleString()}
                                        </p>

                                        <button
                                            onClick={() => toggleOrderDetails(ord.id)}
                                            className="text-blue-500 hover:underline mt-2"
                                        >
                                            {expandedOrderId === ord.id ? "Hide Details" : "See Details"}
                                        </button>

                                        {expandedOrderId === ord.id && (
                                            <div className="mt-3 space-y-2 border-t pt-3">
                                                {ord.products.map((product) => (
                                                    <div key={product.id} className="flex gap-3">
                                                        <img
                                                            src={product.images[0]?.url}
                                                            alt={product.name}
                                                            className="w-16 h-16 rounded"
                                                        />
                                                        <div>
                                                            <p className="font-semibold">{product.name}</p>
                                                            <p className="text-sm text-gray-500">{product.description}</p>
                                                            <p className="text-sm">Count: {product.count}</p>
                                                            <p className="text-sm font-semibold">₺{product.price}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </PageContent>
    );
}

export default ProfilePage;