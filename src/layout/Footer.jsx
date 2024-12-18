import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {

    return (
        <div className="font-monts px-4 bg-[#FAFAFA] ">
            <div className="flex flex-col py-[40px] px-[30px]  gap-[20px] md:flex-row justify-between border-b-2">
                <div>
                    <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] ml-[3px]">Bandage</h3>
                </div>
                    <ul className="text-[#23A6F0] flex gap-[20px]">
                        <li className="hover:text-[#252B42]"><a href="#"><Facebook /></a></li>
                        <li className="hover:text-[#252B42]"><a href="#"><Instagram /></a></li>
                        <li className="hover:text-[#252B42]"><a href="#"><Twitter /></a></li>
                    </ul>
            </div>
            <div className="py-[40px] px-[30px] flex flex-col gap-[20px] md:flex-row justify-between">
                <div className="flex flex-col gap-[15px]">
                    <h5 className="font-bold text-[#252B42] leading-6 text-base tracking-[0.1px]">Company Info</h5>
                    <nav className="list-none font-bold text-[#737373] text-sm leading-6 tracking-[0.2px]">
                        <ul>
                            <li className="hover:text-[#23A6F0]"><a href="#">About Us</a></li>
                            <li className="hover:text-[#23A6F0]"><a href="#">Carrier</a></li>
                            <li className="hover:text-[#23A6F0]"><a href="#">We are hiring</a></li>
                            <li className="hover:text-[#23A6F0]"><a href="#">Blog</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <h5 className="font-bold text-[#252B42] leading-6 text-base tracking-[0.1px]">Legal</h5>
                    <nav className="list-none font-bold text-[#737373] text-sm leading-6 tracking-[0.2px]">
                        <ul>
                            <li className="hover:text-[#23A6F0]"><a href="#">About Us</a></li>
                            <li className="hover:text-[#23A6F0]"><a href="#">Carrier</a></li>
                            <li className="hover:text-[#23A6F0]"><a href="#">We are hiring</a></li>
                            <li className="hover:text-[#23A6F0]"><a href="#">Blog</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <h5 className="font-bold text-[#252B42] leading-6 text-base tracking-[0.1px]">Features</h5>
                    <nav className="list-none font-bold text-[#737373] text-sm leading-6 tracking-[0.2px]">
                        <ul>
                            <li className="hover:text-[#23A6F0]"><a href="#">Business Marketing</a></li>
                            <li className="hover:text-[#23A6F0]"><a href="#">User Analytic</a></li>
                            <li className="hover:text-[#23A6F0]"><a href="#">Live Chat</a></li>
                            <li className="hover:text-[#23A6F0]"><a href="#">Unlimited Support</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <h5 className="font-bold text-[#252B42] leading-6 text-base tracking-[0.1px]">Resources</h5>
                    <nav className="list-none font-bold text-[#737373] text-sm leading-6 tracking-[0.2px]">
                        <ul>
                            <li className="hover:text-[#23A6F0]"><a href="#">IOS & Android</a></li>
                            <li className="hover:text-[#23A6F0]"><a href="#">Watch a Demo</a></li>
                            <li className="hover:text-[#23A6F0]"><a href="#">Customers</a></li>
                            <li className="hover:text-[#23A6F0]"><a href="#">API</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col gap-[15px]">
                    <h5 className="font-bold text-[#252B42] leading-6 text-base tracking-[0.1px]">Get In Touch</h5>
                    <div className="flex h-[58px]">
                        <input type="text" placeholder="Your Email" className="border-[1px] border-[#E6E6E6] rounded-l-md px-4 py-2" />
                        <button className="bg-[#23A6F0] text-white text-md font-normal leading-7 w-[120px] hover:bg-[#252B42] transition rounded-r-md">Subscribe</button>
                    </div>
                    <p className="font-normal text-xs leading-7	tracking-[0.2px] text-[#737373]">Lore imp sum dolor Amit</p>
                </div>
            </div>
            <div className="border-t-2 flex flex-col py-[40px] px-[30px] font-bold text-[#737373] text-sm leading-6 tracking-[0.2px] text-center md:flex-row gap-[5px]">
                <p>Made With Love By</p>
                <p>Finland All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer;
