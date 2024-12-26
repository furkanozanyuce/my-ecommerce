import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateItemCount, toggleItemChecked } from "@/redux/actions/shoppingCartActions";
import PageContent from '../layout/PageContent';
import { toast } from "react-toastify";
import { Trash2 } from "lucide-react";

function createSlug(name) {
    return name
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-');
}

const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shoppingCart.cart);

    const [shippingCost, setShippingCost] = useState(29.99);
    const [discount, setDiscount] = useState(20);

    const handleToggleChecked = (productId) => {
        dispatch(toggleItemChecked(productId));
    };

    const handleRemoveItem = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleChangeCount = (item, increment) => {
        const newCount = item.count + increment;
        if (newCount < 1) return;
        if (newCount > item.product.stock) {
            toast.error("Cannot exceed stock!");
            return;
        }
        dispatch(updateItemCount(item.product.id, newCount));
    };

    const productsTotal = cart
        .filter((item) => item.checked)
        .reduce((acc, item) => acc + item.product.price * item.count, 0);

    const grandTotal = Math.max(0, productsTotal + shippingCost - discount);

    const anyChecked = cart.some((item) => item.checked);

    const handleCreateOrder = () => {
        toast.info("Create Order clicked (no functionality yet)");
    };

    function getProductDetailUrl(product) {
        const slug = createSlug(product.name);
        const genderParam = product.gender === 'k' ? 'kadin' : 'erkek';
        const categoryName = 'category';
        const categoryId = product.category_id || '0';

        return `/shop/${genderParam}/${categoryName}/${categoryId}/${slug}/${product.id}`;
    }

    return (
        <PageContent>
            <div className="px-4 py-6 lg:px-12 font-monts">
                <h1 className="text-2xl font-bold mb-4">Shopping Cart ({cart.length} Items)</h1>

                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
                        <div className="space-y-4">
                            {cart.map((item) => {
                                const productUrl = getProductDetailUrl(item.product);
                                return (
                                    <div
                                        key={item.product.id}
                                        className="w-full flex flex-col md:flex-row items-center gap-4 bg-white rounded shadow p-4 hover:bg-slate-100"
                                    >
                                        <div>
                                            <input
                                                type="checkbox"
                                                checked={item.checked}
                                                onChange={() => handleToggleChecked(item.product.id)}
                                                className="cursor-pointer"
                                            />
                                        </div>

                                        <div>
                                            <Link to={productUrl}>
                                                <img
                                                    src={item.product.images[0]?.url}
                                                    alt={item.product.name}
                                                    className="w-20 h-20 object-cover rounded"
                                                />
                                            </Link>
                                        </div>

                                        <div className="flex-1">
                                            <Link to={productUrl}>
                                                <p className="font-semibold text-md">{item.product.name}</p>
                                            </Link>
                                            <p className="text-sm text-gray-500">
                                                Price: ₺{item.product.price}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Stock: {item.product.stock}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => handleChangeCount(item, -1)}
                                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                            >
                                                -
                                            </button>
                                            <span>{item.count}</span>
                                            <button
                                                onClick={() => handleChangeCount(item, 1)}
                                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <div>
                                            <button
                                                onClick={() => handleRemoveItem(item.product.id)}
                                                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                            >
                                                <Trash2 />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="bg-white rounded shadow p-4 h-fit sticky top-4">
                            <h2 className="text-lg font-bold mb-4">Order Summary</h2>

                            <div className="flex justify-between mb-2">
                                <span>Products Total</span>
                                <span>₺{productsTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Shipping</span>
                                <span>₺{shippingCost.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Discount</span>
                                <span>-₺{discount.toFixed(2)}</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between mb-4 text-lg font-semibold">
                                <span>Total</span>
                                <span>₺{grandTotal.toFixed(2)}</span>
                            </div>

                            <button
                                onClick={handleCreateOrder}
                                disabled={!anyChecked}
                                className={`w-full py-2 rounded text-white 
                                    ${anyChecked ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-300 cursor-not-allowed"}`}
                            >
                                Create Order
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </PageContent>
    );
};

export default ShoppingCartPage;