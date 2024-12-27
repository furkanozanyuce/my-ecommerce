import React, { useEffect, useState } from "react";
import axiosInstance from "@/redux/axiosInstance";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PageContent from "@/layout/PageContent";

const cityOptions = [
    "İstanbul",
    "Ankara",
    ",zmir",
    "Bursa",
    "Antalya",
];

function CreateOrderPage() {
    const user = useSelector((state) => state.client.user);
    const history = useHistory();

    const [addresses, setAddresses] = useState([]);
    const [selectedAddressId, setSelectedAddressId] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        id: null,
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "",
        district: "",
        neighborhood: "",
    });
    const [isFormOpen, setIsFormOpen] = useState(false);

    const getAddressList = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await axiosInstance.get("/user/address");
            setAddresses(res.data);
        } catch (error) {
            console.error("Error fetching addresses:", error);
            setError("Error fetching addresses");
            toast.error("Error fetching addresses");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!user) {
            setLoading(false);
            return;
        }

        getAddressList();
    }, [user]);

    if (loading) {
        return (
            <div className="p-4">
                <p>Loading addresses...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4">
                <p>{error}</p>
                <button onClick={getAddressList} className="bg-blue-500 text-white px-3 py-1 rounded">
                    Retry
                </button>
            </div>
        );
    }

    const handleAddAddressClick = () => {
        if (isFormOpen) {
            setIsFormOpen(false);
        } else {
            setFormData({
                id: null,
                title: "",
                name: "",
                surname: "",
                phone: "",
                city: "",
                district: "",
                neighborhood: "",
            });
            setIsFormOpen(true);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.city) {
            toast.error("City is required");
            return;
        }

        try {
            if (formData.id) {
                await axiosInstance.put("/user/address", formData);
                toast.success("Address updated!");
            } else {
                await axiosInstance.post("/user/address", formData);
                toast.success("Address added!");
            }
            setIsFormOpen(false);
            getAddressList();
        } catch (error) {
            console.error("Error saving address:", error);
            toast.error("Error saving address");
        }
    };

    const handleEdit = (addr) => {
        setFormData({
            id: addr.id,
            title: addr.title,
            name: addr.name,
            surname: addr.surname,
            phone: addr.phone,
            city: addr.city,
            district: addr.district,
            neighborhood: addr.neighborhood,
        });
        setIsFormOpen(true);
    };

    const handleDelete = async (addressId) => {
        try {
            await axiosInstance.delete(`/user/address/${addressId}`);
            toast.info("Address deleted!");
            getAddressList();
        } catch (error) {
            console.error("Error deleting address:", error);
            toast.error("Error deleting address");
        }
    };

    const handleSelectAddress = (addressId) => {
        setSelectedAddressId(addressId);
        toast.info(`Address ${addressId} selected`);
    };

    return (
        <PageContent>
            <div className="p-4 font-monts">
                <h1 className="text-2xl font-bold mb-4">Create Order (Addresses)</h1>

                <div className="bg-white shadow p-4 rounded mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">My Addresses</h2>
                        <button
                            onClick={handleAddAddressClick}
                            className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                        >
                            Add Address
                        </button>
                    </div>

                    {addresses.length === 0 ? (
                        <p>No addresses found.</p>
                    ) : (
                        <ul className="space-y-4">
                            {addresses.map((addr) => (
                                <li
                                    key={addr.id}
                                    className="border p-4 rounded flex flex-col md:flex-row justify-between"
                                >
                                    <div>
                                        <p className="font-semibold">{addr.title}</p>
                                        <p>
                                            {addr.name} {addr.surname}
                                        </p>
                                        <p>Phone: {addr.phone}</p>
                                        <p>
                                            {addr.city}, {addr.district}, {addr.neighborhood}
                                        </p>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center gap-2 mt-2 md:mt-0">
                                        <button
                                            onClick={() => handleSelectAddress(addr.id)}
                                            className={`px-3 py-1 rounded text-sm ${selectedAddressId === addr.id
                                                ? "bg-green-500 text-white"
                                                : "bg-gray-200 hover:bg-gray-300"
                                                }`}
                                        >
                                            {selectedAddressId === addr.id
                                                ? "Selected"
                                                : "Select Address"}
                                        </button>
                                        <button
                                            onClick={() => handleEdit(addr)}
                                            className="bg-yellow-400 text-white px-3 py-1 rounded text-sm hover:bg-yellow-500"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(addr.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {isFormOpen && (
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white shadow p-4 rounded mb-6 space-y-4"
                    >
                        <h2 className="text-lg font-semibold">
                            {formData.id ? "Update Address" : "Add Address"}
                        </h2>

                        <div>
                            <label className="block text-sm font-semibold">Address Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="border w-full p-1 rounded"
                                required
                            />
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-semibold">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border w-full p-1 rounded"
                                    required
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-semibold">Surname</label>
                                <input
                                    type="text"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    className="border w-full p-1 rounded"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="border w-full p-1 rounded"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">City (İl)</label>
                            <select
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="border w-full p-1 rounded"
                                required
                            >
                                <option value="">Select city</option>
                                {cityOptions.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">District (İlçe)</label>
                            <input
                                type="text"
                                name="district"
                                value={formData.district}
                                onChange={handleChange}
                                className="border w-full p-1 rounded"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">
                                Neighborhood (Mahalle)
                            </label>
                            <input
                                type="text"
                                name="neighborhood"
                                value={formData.neighborhood}
                                onChange={handleChange}
                                className="border w-full p-1 rounded"
                                required
                            />
                        </div>

                        <div className="flex gap-2">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                            >
                                {formData.id ? "Update Address" : "Add Address"}
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsFormOpen(false)}
                                className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}

            </div>
        </PageContent>
    );
}

export default CreateOrderPage;