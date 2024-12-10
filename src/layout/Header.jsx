import { useState } from "react";
import { Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="font-monts">
            <div className="flex justify-between mt-[40px] mx-[30px] mb-[25px]">
                <div>
                    <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">Bandage</h3>
                </div>
                <nav className="hidden md:flex justify-between items-center px-[30px]">
                    <ul className="flex gap-8 text-gray-500">
                        <li><a href="#home" className="hover:text-black">Home</a></li>
                        <li><a href="#product" className="hover:text-black">Product</a></li>
                        <li><a href="#pricing" className="hover:text-black">Pricing</a></li>
                        <li><a href="#contact" className="hover:text-black">Contact</a></li>
                    </ul>
                </nav>
                <div className="text-[#3C403D] flex gap-[20px] items-center">
                    <UserRound />
                    <Search />
                    <ShoppingCart />
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
        </div>
    )
}

export default Header;
