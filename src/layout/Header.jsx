import { useState } from "react";
import { Heart, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleShopMenu = () => {
        setIsShopMenuOpen(!isShopMenuOpen);
    };

    return (
        <div className="font-monts">
            <div className="flex justify-between mt-[40px] mx-[30px] mb-[25px]">
                <div>
                    <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">Bandage</h3>
                </div>
                <nav className="hidden md:flex justify-between items-center px-[30px] font-semibold">
                    <ul className="flex gap-8 text-gray-500">
                        <NavLink exact to="/" activeClassName="selected" className="hover:text-black">Home</NavLink>
                        <button onClick={toggleShopMenu} className="hover:text-black">Shop↓</button>
                        <NavLink to="/about" activeClassName="selected" className="hover:text-black">About</NavLink>
                        <NavLink to="/blog" activeClassName="selected" className="hover:text-black">Blog</NavLink>
                        <NavLink to="/contact" activeClassName="selected" className="hover:text-black">Contact</NavLink>
                        <NavLink to="/pages" activeClassName="selected" className="hover:text-black">Pages</NavLink>
                    </ul>
                </nav>
                <div className="text-[#3C403D] md:text-[#23A6F0] flex gap-[20px] items-center">
                    <button className="hover:text-gray-500 flex gap-2 font-semibold">
                        <UserRound />
                        <p className="hidden lg:block">Login / Register</p>
                    </button>
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
                        className="md:hidden hover:text-gray-500"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Menu"
                    >
                        <Menu />
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="flex flex-col items-center space-y-6 my-16 text-[30px] text-gray-500 md:hidden">
                    <NavLink exact to="/" activeClassName="selected" className="hover:text-black">Home</NavLink>
                    <NavLink to="/shop" activeClassName="selected" className="hover:text-black">Product</NavLink>
                    <NavLink to="/pricing" activeClassName="selected" className="hover:text-black">Pricing</NavLink>
                    <NavLink to="/contact" activeClassName="selected" className="hover:text-black">Contact</NavLink>
                </div>
            )}
            {isShopMenuOpen && (
                <div className="gap-24 justify-center my-8 text-xl text-gray-500 hidden md:flex">
                    <div className="flex flex-col gap-2">
                        <p className="text-black font-semibold">Women</p>
                        <a href="#" className="hover:text-black">Bags</a>
                        <a href="#" className="hover:text-black">Belts</a>
                        <a href="#" className="hover:text-black">Cosmetics</a>
                        <a href="#" className="hover:text-black">Bags</a>
                        <a href="#" className="hover:text-black">Hats</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-black font-semibold">Men</p>
                        <a href="/" className="hover:text-black">Bags</a>
                        <a href="#" className="hover:text-black">Belts</a>
                        <a href="#" className="hover:text-black">Bags</a>
                        <a href="#" className="hover:text-black">Contact</a>
                        <a href="#" className="hover:text-black">Hats</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header;
