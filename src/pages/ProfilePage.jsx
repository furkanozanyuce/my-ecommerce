// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PageContent from "@/layout/PageContent";
import Gravatar from "react-gravatar"; // same library as your header
import { Link } from "react-router-dom";
import axiosInstance from "@/redux/axiosInstance";
import { LogOut } from "lucide-react";

// A helper to convert role_id to a human-readable string
function getRoleName(roleId) {
    if (roleId === "1") return "Admin";
    if (roleId === "2") return "Store";
    if (roleId === "3") return "Customer";
    return "Unknown";
}

function ProfilePage() {
    const user = useSelector((state) => state.client.user);
    const history = useHistory();

    // If user not logged in, redirect or rely on PrivateRoute
    if (!user) {
        history.push("/login");
        return null;
    }

    const [lastOrders, setLastOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLastOrders();
    }, []);

    const fetchLastOrders = async () => {
        setLoading(true);
        try {
            // Fetch all orders
            const res = await axiosInstance.get("/order");

            // Sort by date (latest first) and get the last 3 orders
            const sortedOrders = res.data
                .sort(
                    (a, b) =>
                        new Date(b.order_date).getTime() - new Date(a.order_date).getTime()
                )
                .slice(0, 3); // Take only the last 3 orders

            setLastOrders(sortedOrders);
        } catch (err) {
            console.error("Error fetching last orders:", err);
        } finally {
            setLoading(false);
        }
    };

    const logOutHandle = () => {
        localStorage.removeItem("token");
        toast.info("Logged out!")
        history.push("/login");
        location.reload();
    }

    // user has { name, email, role_id, token } from /verify
    return (
        <PageContent>
            <div className="px-4 py-6 lg:px-12 font-monts">
                <div className="flex flex-col md:flex-row justify-evenly gap-4">
                    <div>
                        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
                        <div className="flex items-center gap-4 mb-6">
                            {/* Gravatar using user.email */}
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

                        <div className="space-y-2">
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
                            <button onClick={logOutHandle} className="flex font-semibold text-blue-500 items-center gap-4 hover:text-blue-800">
                                Log Out <LogOut />
                            </button>
                        </div>
                    </div>
                    {/* Last Orders Section */}
                    <div className="bg-white py-4 rounded min-w-[300px]">
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