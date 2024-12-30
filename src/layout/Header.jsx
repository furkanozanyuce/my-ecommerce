import { useState } from "react";
import { Heart, LogOut, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { NavLink, useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Gravatar from 'react-gravatar';
import { toast } from "react-toastify";

function createSlug(name) {
    return name.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-');
}

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const history = useHistory();

    const user = useSelector((state) => state.client.user);
    const categories = useSelector((state) => state.product.categories);
    const cart = useSelector((state) => state.shoppingCart.cart);

    const mainPageHandle = () => {
        history.push("/");
    }

    const logOutHandle = () => {
        localStorage.removeItem("token");
        toast.info("Logged out!")
        history.push("/login");
        location.reload();
    }

    const ordersHandle = () => {
        history.push("/orders");
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleLoginMenu = () => {
        setIsLoginOpen(!isLoginOpen);
    };

    const handleCreateOrder = () => {
        if (!user) {
            toast.info("You need to log in before you can order!");
        }
        history.push("/create-order")
    };

    function getProductDetailUrl(product) {
        const slug = createSlug(product.name);
        const genderParam = product.gender === 'k' ? 'kadin' : 'erkek';
        const categoryName = 'category';
        const categoryId = product.category_id || '0';
        return `/shop/${genderParam}/${categoryName}/${categoryId}/${slug}/${product.id}`;
    }

    return (
        <div className="px-4 font-monts">
            <div className="flex justify-between mt-[40px] mx-[30px] mb-[25px]">
                <div>
                    <button onClick={mainPageHandle}><h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">Bandage</h3></button>
                </div>
                <nav className="hidden lg:flex justify-between items-center px-[30px] font-semibold relative">
                    <ul className="flex gap-8 text-gray-500">
                        <NavLink exact to="/" activeClassName="selected" className="hover:text-black">Home</NavLink>
                        <div className="relative group">
                            <NavLink to="/shop" activeClassName="selected" className="hover:text-black">
                                Shop↓
                            </NavLink>

                            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity absolute top-[20px] left-0 bg-white shadow-lg p-8 grid  gap-8 z-50">
                                <div className="flex gap-12">
                                    <div>
                                        <Link to="/shop/k" className="text-black font-semibold pb-4 block hover:text-gray-600">
                                            Women
                                        </Link>
                                        <ul className="space-y-2">
                                            {categories
                                                .filter((category) => category.gender === "k")
                                                .map((category) => (
                                                    <li key={category.id}>
                                                        <Link
                                                            to={`/shop/kadin/${category.code.split(":")[1]}/${category.id}`}
                                                            className="text-gray-500 hover:text-black"
                                                        >
                                                            {category.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <Link to="/shop/e" className="text-black font-semibold pb-4 block hover:text-gray-600">
                                            Men
                                        </Link>
                                        <ul className="space-y-2">
                                            {categories
                                                .filter((category) => category.gender === "e")
                                                .map((category) => (
                                                    <li key={category.id}>
                                                        <Link
                                                            to={`/shop/erkek/${category.code.split(":")[1]}/${category.id}`}
                                                            className="text-gray-500 hover:text-black"
                                                        >
                                                            {category.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/about" activeClassName="selected" className="hover:text-black">About</NavLink>
                        <NavLink to="/blog" activeClassName="selected" className="hover:text-black">Blog</NavLink>
                        <NavLink to="/teams" activeClassName="selected" className="hover:text-black">Contact</NavLink>
                        <NavLink to="/product" activeClassName="selected" className="hover:text-black">Product</NavLink>
                    </ul>
                </nav>
                <div className="text-[#3C403D] md:text-[#23A6F0] flex gap-[20px] items-center">
                    <div className="flex gap-2 items-center">
                        {user && user.email ? (
                            <>
                                <div className="relative group flex ">
                                    <button className="hover:text-gray-500 relative">
                                        <Gravatar
                                            email={user.email}
                                            size={40}
                                            default="identicon"
                                            className="rounded-full cursor-pointer"
                                            onClick={toggleLoginMenu}
                                            alt="User Avatar"
                                        />
                                    </button>
                                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 
                           transition-opacity absolute top-[33px] right-2 bg-white shadow-lg p-4 w-60 z-50 hidden md:block">
                                        {!user ? (
                                            <p className="text-sm text-gray-600">You need to log in</p>
                                        ) : (
                                            <>
                                                <Link to="/profile" className="hover:text-black">{user.name}</Link>
                                                <div className="flex flex-col gap-1 justify-between mt-4">
                                                    <button onClick={ordersHandle} className="flex items-center gap-4 hover:text-black">
                                                        Orders
                                                    </button>
                                                    <button onClick={logOutHandle} className="flex items-center gap-4 hover:text-black">
                                                        Log Out <LogOut />
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="relative group flex ">
                                    <button onClick={toggleLoginMenu} className="hover:text-gray-500 font-semibold">
                                        <UserRound />
                                    </button>
                                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 
                           transition-opacity absolute top-[20px] right-0 bg-white shadow-lg p-4 w-64 z-50 hidden md:block">
                                        <p className="text-sm text-gray-600">You need to log in</p>
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="hidden gap-2 md:flex">
                            {user ? (
                                <Link to="/profile" className="font-semibold hover:text-gray-500 cursor-pointer">{user.name}</Link>
                            ) : (
                                <>
                                    <Link to="/login" className="hover:text-gray-500 font-semibold">Login</Link>
                                    <p>|</p>
                                    <Link to="/signup" className="hover:text-gray-500 font-semibold">Register</Link>
                                </>
                            )}
                        </div>
                    </div>
                    <button className="hover:text-gray-500">
                        <Search />
                    </button>
                    <div className="relative group flex ">
                        <button className="hover:text-gray-500 relative">
                            <Link to="/cart"><ShoppingCart /></Link>
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full px-1">
                                    {cart.length}
                                </span>
                            )}
                        </button>

                        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 
                           transition-opacity absolute top-[20px] right-0 bg-white shadow-lg p-4 w-64 z-50">
                            {cart.length === 0 ? (
                                <p className="text-sm text-gray-600">Your cart is empty.</p>
                            ) : (
                                <>
                                    <h4 className="font-semibold mb-2">My Cart ({cart.length} items)</h4>
                                    <ul className="space-y-2 max-h-72 overflow-y-auto">
                                        {cart.map((item, index) => {
                                            const productDetailUrl = getProductDetailUrl(item.product);
                                            return (
                                                <li key={index} className="flex items-center gap-2 hover:bg-slate-100">
                                                    <Link to={productDetailUrl}>
                                                        <img
                                                            src={item.product.images[0]?.url}
                                                            alt={item.product.name}
                                                            className="w-12 h-12 object-cover rounded"
                                                        />
                                                    </Link>
                                                    <div className="flex-1">
                                                        <   Link to={productDetailUrl}>
                                                            <p className="font-semibold text-sm">{item.product.name}</p>
                                                        </Link>
                                                        <p className="text-xs text-gray-500">Count: {item.count}</p>
                                                        <p className="text-xs text-gray-500">₺{item.product.price}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <div className="flex justify-between mt-4">
                                        <Link
                                            to="/cart"
                                            className="bg-gray-300 text-white px-3 py-1 rounded text-sm hover:bg-gray-400"
                                        >
                                            View Cart
                                        </Link>
                                        <button onClick={handleCreateOrder} className="bg-orange-500 text-white px-3 py-1 rounded text-sm hover:bg-orange-600">
                                            Checkout
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <button className="hidden md:block hover:text-gray-500">
                        <Heart />
                    </button>
                    <button
                        className="lg:hidden hover:text-gray-500"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Menu"
                    >
                        <Menu />
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="flex flex-col items-center space-y-6 my-16 text-[30px] text-gray-500 lg:hidden">
                    <NavLink exact to="/" activeClassName="selected" className="hover:text-black">Home</NavLink>
                    <NavLink to="/shop" activeClassName="selected" className="hover:text-black">Shop</NavLink>
                    <NavLink to="/product" activeClassName="selected" className="hover:text-black">Product</NavLink>
                    <NavLink to="/pricing" activeClassName="selected" className="hover:text-black">Pricing</NavLink>
                    <NavLink to="/contact" activeClassName="selected" className="hover:text-black">Contact</NavLink>
                </div>
            )}
            {isLoginOpen && (
                user ? (
                    <div className="flex flex-col items-center space-y-6 my-12 text-[30px] text-gray-500 md:hidden cursor-pointer">
                        <Link to="/profile" className="hover:text-black">{user.name}</Link>
                        <button onClick={ordersHandle} className="flex items-center gap-4 hover:text-black">
                            Orders
                        </button>
                        <button onClick={logOutHandle} className="flex items-center gap-4 hover:text-black">
                            Log Out <LogOut />
                        </button>
                    </div>
                ) :
                    <div className="flex flex-col items-center space-y-6 my-12 text-[30px] text-gray-500 md:hidden">
                        <NavLink exact to="/login" activeClassName="selected" className="hover:text-black">Login</NavLink>
                        <NavLink to="/signup" activeClassName="selected" className="hover:text-black">Register</NavLink>
                    </div>
            )}
        </div>
    )
}

export default Header;
