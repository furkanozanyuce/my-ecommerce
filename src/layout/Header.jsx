import { useState } from "react";
import { Heart, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { NavLink, useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Gravatar from 'react-gravatar';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const history = useHistory();

    const user = useSelector((state) => state.client.user);

    const mainPageHandle = () => {
        history.push("/");
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleShopMenu = () => {
        setIsShopMenuOpen(!isShopMenuOpen);
    };

    const toggleLoginMenu = () => {
        setIsLoginOpen(!isLoginOpen);
    };

    return (
        <div className="font-monts">
            <div className="flex justify-between mt-[40px] mx-[30px] mb-[25px]">
                <div>
                    <button onClick={mainPageHandle}><h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">Bandage</h3></button>
                </div>
                <nav className="hidden lg:flex justify-between items-center px-[30px] font-semibold relative">
                    <ul className="flex gap-8 text-gray-500">
                        <NavLink exact to="/" activeClassName="selected" className="hover:text-black">Home</NavLink>
                        <button onClick={toggleShopMenu} className="hover:text-black">Shop↓</button>
                        <NavLink to="/about" activeClassName="selected" className="hover:text-black">About</NavLink>
                        <NavLink to="/blog" activeClassName="selected" className="hover:text-black">Blog</NavLink>
                        <NavLink to="/contact" activeClassName="selected" className="hover:text-black">Contact</NavLink>
                        <NavLink to="/shop" activeClassName="selected" className="hover:text-black">Pages</NavLink>
                    </ul>
                    {isShopMenuOpen && (
                        <div className="gap-24 shadow-lg absolute top-[20px] left-[100px] p-6 pr-[150px] bg-white z-50 justify-center my-8 text-l text-gray-500 hidden md:flex">
                            <div className="flex flex-col gap-3">
                                <p className="text-black font-semibold pb-4">Women</p>
                                <a href="#" className="hover:text-black">Bags</a>
                                <a href="#" className="hover:text-black">Belts</a>
                                <a href="#" className="hover:text-black">Cosmetics</a>
                                <a href="#" className="hover:text-black">Bags</a>
                                <a href="#" className="hover:text-black">Hats</a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-black font-semibold pb-4">Men</p>
                                <a href="/" className="hover:text-black">Bags</a>
                                <a href="#" className="hover:text-black">Belts</a>
                                <a href="#" className="hover:text-black">Bags</a>
                                <a href="#" className="hover:text-black">Contact</a>
                                <a href="#" className="hover:text-black">Hats</a>
                            </div>
                        </div>
                    )}
                </nav>
                <div className="text-[#3C403D] md:text-[#23A6F0] flex gap-[20px] items-center">
                    <div className="flex gap-2 items-center">
                        {user && user.email ? (
                            <Gravatar
                                email={user.email}
                                size={40}
                                default="identicon" // You can choose other default images like 'monsterid', 'retro', etc.
                                className="rounded-full cursor-pointer"
                                onClick={toggleLoginMenu}
                                alt="User Avatar"
                            />
                        ) : (
                            <button onClick={toggleLoginMenu} className="hover:text-gray-500 font-semibold">
                                <UserRound />
                            </button>
                        )}
                        <div className="hidden gap-2 md:flex">
                            {user ? (
                                <p className="font-semibold hover:text-gray-500 cursor-pointer">{user.name}</p>
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
                    <button className="hover:text-gray-500">
                        <ShoppingCart />
                    </button>
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
                    <NavLink to="/shop" activeClassName="selected" className="hover:text-black">Product</NavLink>
                    <NavLink to="/pricing" activeClassName="selected" className="hover:text-black">Pricing</NavLink>
                    <NavLink to="/contact" activeClassName="selected" className="hover:text-black">Contact</NavLink>
                </div>
            )}
            {isLoginOpen && (
                user ? (
                    <div className="flex flex-col items-center space-y-6 my-12 text-[30px] text-gray-500 md:hidden cursor-pointer">
                        <p className="hover:text-black">{user.name}</p>
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
