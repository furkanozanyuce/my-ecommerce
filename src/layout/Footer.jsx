import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {

    return (
        <div className="font-monts min-h-dvh w-[414px]">
            <div className="flex flex-col py-[40px] px-[30px] bg-[#FAFAFA] gap-[20px]">
                <div>
                    <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42] ml-[3px]">Bandage</h3>
                </div>
                <div className="text-[#23A6F0] flex gap-[20px]">
                    <Facebook />
                    <Instagram />
                    <Twitter />
                </div>
            </div>
            <div className="py-[40px] px-[30px]">
                <div>
                    <h5 className="font-bold text-[#252B42] leading-6 text-base tracking-[0.1px]">Company Info</h5>
                    <nav className="list-none font-bold text-[#737373] text-sm leading-6 tracking-[0.2px]">
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </nav>
                </div>
                <div>
                    <h5 className="font-bold text-[#252B42] leading-6 text-base tracking-[0.1px]">Legal</h5>
                    <nav className="list-none font-bold text-[#737373] text-sm leading-6 tracking-[0.2px]">
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </nav>
                </div>
                <div>
                    <h5 className="font-bold text-[#252B42] leading-6 text-base tracking-[0.1px]">Features</h5>
                    <nav className="list-none font-bold text-[#737373] text-sm leading-6 tracking-[0.2px]">
                        <li>Business Marketing</li>
                        <li>User Analytic</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </nav>
                </div>
                <div>
                    <h5 className="font-bold text-[#252B42] leading-6 text-base tracking-[0.1px]">Resources</h5>
                    <nav className="list-none font-bold text-[#737373] text-sm leading-6 tracking-[0.2px]">
                        <li>IOS & Android</li>
                        <li>Watch a Demo</li>
                        <li>Customers</li>
                        <li>API</li>
                    </nav>
                </div>
                <div>
                    <h5 className="font-bold text-[#252B42] leading-6 text-base tracking-[0.1px]">Get In Touch</h5>
                    <div className="flex w-[321px] h-[58px]">
                        <input type="text" placeholder="    Your Email" className="border-[1px] border-[#E6E6E6]" />
                        <button className="bg-[#23A6F0] text-white text-sm font-normal leading-7 w-[204px]">Subscribe</button>
                    </div>
                    <p>Lore imp sum dolor Amit</p>
                </div>
            </div>
            <div className="flex flex-col py-[55px] font-bold text-[#737373] text-sm leading-6 tracking-[0.2px] text-center	bg-[#FAFAFA]">
                <p>Made With Love By</p>
                <p>Finland All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer;