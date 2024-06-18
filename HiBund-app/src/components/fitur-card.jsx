import React from "react";

function FiturCard({ cards }) {
    return (
        <div className="relative mt-14 px-4 sm:px-0"> {/* Container with padding for better layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 -ml-[50px] sm:ml-0"> {/* Shift cards to the left on larger screens */}
                {cards.map((card, index) => (
                    <div key={index} className="col-span-1 transform transition-transform duration-300 hover:scale-105">
                        <div className="w-full h-full flex flex-col bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden 
                                        transition-all duration-300 hover:shadow-2xl hover:border-pink-custom">
                            <img
                                className="w-full h-52 object-cover md:h-40 lg:h-52" /* Adjust height for smaller screens */
                                src={card.img}
                                alt="Article Image"
                            />
                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <div className="flex flex-col space-y-4 items-start">
                                    <div className="text-sm font-medium text-zinc-800">{card.nama}</div>
                                    <div className="text-xl font-medium text-zinc-800 my-2">{card.judul}</div>
                                    <div className="text-xs text-zinc-800/50">{card.text}</div>
                                </div>
                                <button className="text-pink-custom text-xs font-normal mt-2 text-right transition-colors duration-300 hover:text-pink-hover">
                                    {card.next}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FiturCard;