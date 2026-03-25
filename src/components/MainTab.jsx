import React from "react";

function MainTab({items}) {
    return (
        <div
            className="py-16 relative overflow-hidden text-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Rectangle 116.png')" }}>
            <img
                src="/Frame.png"
                className="absolute left-0 top-0 h-full w-20 object-cover hidden md:block"
            />

            <img
                src="/Frame.png"
                className="absolute right-0 top-0 h-full w-20 object-cover hidden md:block"
            />

            {/* main content*/}
            <div className="max-w-6xl mx-auto border border-[#C5A059] p-8 relative bg-black/50">

                <img
                    src="/appitizer.png"
                    className="absolute -top-6 left-2 w-16 sm:w-20 md:w-28 lg:w-32"
                />

                <img
                    src="/1 41.png"
                    className="absolute -top-6 right-2 w-16 sm:w-20 md:w-28 lg:w-32"
                />

                {/*Appetizer*/}
                <div className="flex flex-col md:flex-row gap-10 mb-12 items-start p-10">

                    <div className="md:w-1/3 flex">

                        <h2 className="text-4xl font-bold tracking-widest">
                            <span >APPETIZERS</span>
                        </h2>

                        <div className="hidden md:block h-52 w-[1px] bg-gray-500 mt-2 ms-10"></div>

                    </div>
                    <div className="md:w-2/3 space-y-6">

                        {items.length === 0 ? (
                            <p className="text-gray-400">No items found</p>
                        ) : (
                            items.map((item) => (
                                <div key={item._id}>

                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold whitespace-nowrap">
                                            {item.name}
                                        </span>

                                        <div className="flex-1 border-b border-dotted border-gray-500"></div>

                                        <span className="text-[#C5A059]">
                                            ₹{item.price}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 mt-1">
                                        {item.description}
                                    </p>

                                </div>
                            ))
                        )}

                    </div>

                </div>

                {/*Salads*/}
                <div className="border border-gray-600 p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-20 relative">

                    <div className="flex items-center gap-6">
                        <span className="bg-red-500 px-4 py-2 font-bold">
                            SALADS
                        </span>
                        <div className="hidden md:block h-12 w-[1px] bg-gray-500"></div>
                    </div>

                    <div className="space-y-3 w-full md:w-1/2">
                        <div className="flex items-center gap-2">
                            <span>HOUSE SALAD WITH BEANS</span>
                            <div className="flex-1 border-b border-dotted border-gray-500"></div>
                            <span className="text-[#C5A059]">$06</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span>CAESAR SALAD</span>
                            <div className="flex-1 border-b border-dotted border-gray-500"></div>
                            <span className="text-[#C5A059]">$08</span>
                        </div>
                    </div>

                    <img src="/sa 1.png" className="w-20 sm:w-24 md:w-28" />
                </div>

                <img
                    src="/salad 1.png"
                    className="absolute -bottom-8 left-2 w-20 sm:w-24 md:w-28 lg:w-36"
                />

            </div>

            {/*timing*/}
            <div className="max-w-6xl mx-auto mt-16 px-4">

                <div className="border border-gray-700 rounded-xl bg-black/80 px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

                    <div className="text-center md:text-left">
                        <p className="text-xs text-[#C5A059] italic">
                            Be there on time
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold tracking-widest">
                            <span className="text-red-500">OPEN</span>ING HOURS
                        </h2>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 text-center">

                        <div>
                            <p className="text-xs text-gray-400">MONDAY-THURSDAY</p>
                            <p className="text-[#00AEEF] text-sm font-semibold">
                                12 PM - 12 AM
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">FRIDAY-SATURDAY</p>
                            <p className="text-[#00AEEF] text-sm font-semibold">
                                12 PM - 01 AM
                            </p>
                        </div>

                        <div>
                            <p className="text-xs text-gray-400">SUNDAY</p>
                            <p className="text-[#00AEEF] text-sm font-semibold">
                                12 PM - 11 PM
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default MainTab;