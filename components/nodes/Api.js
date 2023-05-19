import React, { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Api = () => {
    const [enabled, setEnabled] = useState(true);

    return (
        <div className="flex flex-col space-y-5">
            <div>
                <label className="block text-sm font-medium text-white mb-1">
                    Enable JSON RPC Server
                </label>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={classNames(
                        enabled ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-not-allowed"
                    )}
                    disabled
                >
                    <span
                        aria-hidden="true"
                        className={classNames(
                            enabled ? "translate-x-5" : "translate-x-0",
                            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                    />
                </Switch>
            </div>
            <div className="lg:w-2/3 w-full">
                <label className="block text-sm font-medium text-white mb-1">
                    JSON RPC Server Port
                </label>
                <div className="mt-1 flex rounded-md">
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <input
                            type="number"
                            name="rpcport"
                            id="rpcport"
                            className="truncate font-mono block w-fit rounded bg-cdblacklite border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm read-only:text-gray-300"
                            defaultValue="8545"
                            readOnly
                        />
                    </div>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-white mb-1">
                    JSON RPC API
                </label>
                <fieldset className="space-y-2">
                    <div className="relative flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="net"
                                aria-describedby="net"
                                name="net"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-not-allowed"
                                readOnly
                                checked
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="net"
                                className="font-medium text-gray-300"
                            >
                                Net
                            </label>
                        </div>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="trace"
                                aria-describedby="trace"
                                name="trace"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-not-allowed"
                                readOnly
                                checked
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="trace"
                                className="font-medium text-gray-300"
                            >
                                Trace
                            </label>
                        </div>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="eth"
                                aria-describedby="eth"
                                name="eth"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-not-allowed"
                                readOnly
                                checked
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="eth"
                                className="font-medium text-gray-300"
                            >
                                Eth
                            </label>
                        </div>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="debug"
                                aria-describedby="debug"
                                name="debug"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-not-allowed"
                                readOnly
                                checked
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="debug"
                                className="font-medium text-gray-300"
                            >
                                Debug
                            </label>
                        </div>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="web3"
                                aria-describedby="web3"
                                name="web3"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-not-allowed"
                                readOnly
                                checked
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="web3"
                                className="font-medium text-gray-300"
                            >
                                Web3
                            </label>
                        </div>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="erigon"
                                aria-describedby="erigon"
                                name="erigon"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-not-allowed"
                                readOnly
                                checked
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="erigon"
                                className="font-medium text-gray-300"
                            >
                                Erigon
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="relative">
                <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                >
                    <div className="w-full border-t border-cdnavyblue" />
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-cdprimary px-2 text-sm font-medium text-gray-300">
                        WebSocket Server Options
                    </span>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-white mb-1">
                    Enable WebSocket Server
                </label>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={classNames(
                        enabled ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-not-allowed"
                    )}
                    disabled
                >
                    <span
                        aria-hidden="true"
                        className={classNames(
                            enabled ? "translate-x-5" : "translate-x-0",
                            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                    />
                </Switch>
            </div>
            <div className="lg:w-2/3 w-full">
                <label className="block text-sm font-medium text-white mb-1">
                    WebSocket Server Port
                </label>
                <div className="mt-1 flex rounded-md">
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <input
                            type="number"
                            name="rpcport"
                            id="rpcport"
                            className="truncate font-mono block w-fit rounded border-0 bg-cdblacklite focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm read-only:text-gray-300"
                            defaultValue="8546"
                            readOnly
                        />
                    </div>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-white mb-1">
                    WebSocket Server API
                </label>
                <fieldset className="space-y-2">
                    <div className="relative flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="net"
                                aria-describedby="net"
                                name="net"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-not-allowed"
                                readOnly
                                checked
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="net"
                                className="font-medium text-gray-300"
                            >
                                Net
                            </label>
                        </div>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="trace"
                                aria-describedby="trace"
                                name="trace"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-not-allowed"
                                readOnly
                                checked
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="trace"
                                className="font-medium text-gray-300"
                            >
                                Trace
                            </label>
                        </div>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="eth"
                                aria-describedby="eth"
                                name="eth"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-not-allowed"
                                readOnly
                                checked
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="eth"
                                className="font-medium text-gray-300"
                            >
                                Eth
                            </label>
                        </div>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="debug"
                                aria-describedby="debug"
                                name="debug"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-not-allowed"
                                readOnly
                                checked
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="debug"
                                className="font-medium text-gray-300"
                            >
                                Debug
                            </label>
                        </div>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="web3"
                                aria-describedby="web3"
                                name="web3"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-not-allowed"
                                readOnly
                                checked
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="web3"
                                className="font-medium text-gray-300"
                            >
                                Web3
                            </label>
                        </div>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id="erigon"
                                aria-describedby="erigon"
                                name="erigon"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-not-allowed"
                                readOnly
                                checked
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="erigon"
                                className="font-medium text-gray-300"
                            >
                                Erigon
                            </label>
                        </div>
                    </div>
                </fieldset>
            </div>
            {/* <div className="flex flex-row-reverse sm:flex-grow">
                <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-not-allowed disabled:opacity-50"
                    disabled
                >
                    Save
                </button>
            </div> */}
        </div>
    );
};

export default Api;
