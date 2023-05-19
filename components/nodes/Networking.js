import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Networking = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="flex flex-col space-y-5">
            <div className="lg:w-2/3 w-full">
                <label className="block text-sm font-medium text-cdoffwhite">
                    Ethereum Node URL
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <input
                            type="text"
                            name="nodeurl"
                            id="nodeurl"
                            className="truncate bg-cdblacklite font-mono block w-full rounded-none rounded-l-md border-0 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm read-only:text-gray-300 cursor-not-allowed"
                            defaultValue="https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7"
                            readOnly
                        />
                    </div>
                    <button
                        type="button"
                        className="relative bg-cddarkblue -ml-px inline-flex items-center space-x-2 rounded-r-md border border-cdnavyblue px-4 py-2 text-sm font-medium text-white hover:bg-cdnavyblue focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                        <ClipboardDocumentCheckIcon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                        />
                        <span>Copy</span>
                    </button>
                </div>
            </div>
            <div>
                <p className="text-sm font-medium text-cdoffwhite mb-1">
                    Bootnode
                </p>
                <Switch
                    disabled
                    checked={enabled}
                    onChange={setEnabled}
                    className={classNames(
                        enabled ? "bg-indigo-600" : "bg-cddarkblue",
                        "relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-not-allowed"
                    )}
                >
                    <span
                        aria-hidden="true"
                        className={classNames(
                            enabled ? "translate-x-5" : "translate-x-0",
                            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-cdprimary shadow ring-0 transition duration-200 ease-in-out"
                        )}
                    />
                </Switch>
            </div>
            <div>
                <label className="block text-sm font-medium text-cdoffwhite">
                    Bootnodes
                </label>
                <div className="mt-1">
                    <textarea
                        readOnly
                        rows={4}
                        name="comment"
                        id="comment"
                        className="font-mono block lg:w-1/2 md:w-80 w-full rounded-md border-cdprimary bg-cdblacklite shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm read-only:text-gray-300"
                        defaultValue="Ethereum node URL"
                    />
                </div>
                <p className="mt-1 text-sm text-gray-300">
                    One Ethereum node URL per line
                </p>
            </div>
            <div>
                <label className="block text-sm font-medium text-cdoffwhite">
                    Static Nodes
                </label>
                <div className="mt-1">
                    <textarea
                        readOnly
                        rows={4}
                        name="comment"
                        id="comment"
                        className="font-mono whitespace-pre-line block lg:w-1/2 md:w-80 w-full rounded-md border-cdprimary bg-cdblacklite shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm read-only:text-gray-300"
                        defaultValue="Static Node URL"
                    />
                </div>
                <p className="mt-1 text-sm text-gray-300">
                    One Static Node URL per line
                </p>
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

export default Networking;
