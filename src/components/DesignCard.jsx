import React from 'react';
import { Button } from "@/components/ui/button"

const DesignCard = () => {
    return (
        <div className="relative w-full font-monts">
            <div className="overflow-hidden">
                <div
                    className="relative h-192 bg-cover bg-center"
                    style={{
                        backgroundImage: "url(/images/neural1.jpg)",
                    }}
                >
                    <div className="absolute inset-0 flex flex-col items-center md:items-end justify-center md:ml-[100px] text-center px-4 lg:px-12">
                        <h3 className="text-xs sm:text-sm uppercase text-white mb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            SUMMER 2020
                        </h3>
                        <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            Part of the Neural Universe
                        </h1>
                        <p className="text-sm sm:text-lg text-white mb-6 px-8 md:px-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                            We know how large objects will act, but things on a small scale.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Button variant="mine" size="mine">
                                BUY NOW
                            </Button>
                            <Button variant="mineAlso" size="mine">
                                READ MORE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignCard;
