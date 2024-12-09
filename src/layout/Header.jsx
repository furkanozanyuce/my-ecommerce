import { useState } from "react";
import { Menu, Search, ShoppingCart, UserRound } from "lucide-react";

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="font-monts min-h-dvh">
            <div className="flex justify-between mt-[40px] mx-[30px]">
                <div>
                    <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">Bandage</h3>
                </div>
                <nav className="hidden md:flex justify-between items-center px-[30px] mt-6">
                    <ul className="flex gap-8 text-gray-500">
                        <li><a href="#home" className="hover:text-black">Home</a></li>
                        <li><a href="#product" className="hover:text-black">Product</a></li>
                        <li><a href="#pricing" className="hover:text-black">Pricing</a></li>
                        <li><a href="#contact" className="hover:text-black">Contact</a></li>
                    </ul>
                </nav>
                <div className="text-[#3C403D] flex gap-[20px] self-center">
                    <UserRound />
                    <Search />
                    <ShoppingCart />
                    <button
                        className="md:hidden"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Menu"
                    >
                        <Menu />
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="flex flex-col items-center space-y-4 mt-6 text-gray-500 md:hidden">
                    <a href="#home" className="hover:text-black">Home</a>
                    <a href="#product" className="hover:text-black">Product</a>
                    <a href="#pricing" className="hover:text-black">Pricing</a>
                    <a href="#contact" className="hover:text-black">Contact</a>
                </div>
            )}
        </div>
    )
}

export default Header;
