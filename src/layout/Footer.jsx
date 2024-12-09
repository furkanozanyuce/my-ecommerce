import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {

    return (
        <div className="font-monts min-h-dvh w-[414px]">
            <div className="flex justify-between mt-[40px] mx-[30px]">
                <div>
                    <h3 className="font-bold text-2xl leading-8 tracking-[0.1px] text-[#252B42]">Bandage</h3>
                </div>
                <div className="text-[#3C403D] flex gap-[20px] self-center">
                    <Facebook />
                    <Instagram />
                    <Twitter />
                </div>
            </div>
        </div>
    )
}

export default Footer;
