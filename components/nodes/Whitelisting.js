import React from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Whitelisting = () => {
    return (
        <div className="flex flex-col space-y-5">
            <div>
                <label className="block text-sm font-medium text-white">
                    Hosts
                </label>
                <div className="mt-1">
                    <textarea
                        readOnly
                        rows={4}
                        name="hosts"
                        id="hosts"
                        className="font-mono block lg:w-1/2 md:w-80 w-full rounded-md border-0 bg-cdblacklite shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm read-only:text-gray-300"
                        defaultValue={""}
                    />
                </div>
                <p className="mt-1 text-sm text-gray-300">
                    One hostname per line to allow access to JSON RPC server
                    (Server enforced)
                </p>
            </div>
            <div>
                <label className="block text-sm font-medium text-white">
                    CORS Domains
                </label>
                <div className="mt-1">
                    <textarea
                        readOnly
                        rows={4}
                        name="corsdomains"
                        id="corsdomains"
                        className="font-mono whitespace-pre-line block lg:w-1/2 md:w-80 w-full rounded-md border-0 bg-cdblacklite shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm read-only:text-gray-300"
                        defaultValue={""}
                    />
                </div>
                <p className="mt-1 text-sm text-gray-300">
                    One hostname per line to allow access to JSON RPC server
                    (Browser enforced)
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

export default Whitelisting;
