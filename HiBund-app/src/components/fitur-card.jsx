import React from "react";

function FiturCard({ cards }) {
    return (
        <div className="grid grid-cols-3 gap-3 mt-14">
            {cards.map((card, index) => (
                <div key={index} className="col-span-1">
                    <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden mt-4">
                        <img className="w-full h-52 object-cover rounded-t-xl" src={card.img} alt="Article Image"/>
                        <div className="p-4 flex flex-col justify-between flex-grow">
                            <div className="flex flex-col space-y-4 items-start">
                                <div className="text-sm font-medium text-zinc-800">{card.nama}</div>
                                <div className="text-xl font-medium text-zinc-800 my-2">{card.judul}</div>
                                <div className="text-xs text-zinc-800/50">{card.text}</div>
                            </div>
                            <button className="text-pink-500 text-xs font-normal mt-2 text-right">{card.next}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FiturCard;
