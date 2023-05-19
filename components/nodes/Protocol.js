import React from "react";

const Protocol = () => {
    return (
        <div className="flex flex-col space-y-5">
            <div>
                <p className="text-sm font-medium text-white">Protocol</p>
                <p className="truncate text-sm text-gray-300">Ethereum</p>
            </div>
            <div>
                <p className="text-sm font-medium text-white">Chain</p>
                <p className="truncate text-sm text-gray-300">Rinkeby</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-white">
                    Client Software
                </label>
                <select
                    disabled
                    id="location"
                    name="location"
                    className="mt-1 block md:w-64 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm cursor-not-allowed"
                    defaultValue="Erigon"
                >
                    <option>Erigon</option>
                    <option>Go Ethereum</option>
                    <option>Hyperledger Besu</option>
                    <option>Open Ethereum</option>
                    <option>Nethermind</option>
                </select>
            </div>
            {/* <div className="flex flex-row-reverse sm:flex-grow">
                <button
                    disabled
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 cursor-not-allowed"
                >
                    Save
                </button>
            </div> */}
        </div>
    );
};

export default Protocol;
