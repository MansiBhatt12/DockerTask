import React from "react";
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function PhoneSidebar({ navigation }) {
    return (
        <>
            <div className="flex flex-shrink-0 items-center px-4">
                <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                />
            </div>
            <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="space-y-1 px-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current
                                    ? "bg-cdprimary text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                            )}
                            passHref
                        >
                            <item.icon
                                className={classNames(
                                    item.current
                                        ? "text-gray-300"
                                        : "text-gray-400 group-hover:text-gray-300",
                                    "mr-4 flex-shrink-0 h-6 w-6"
                                )}
                                aria-hidden="true"
                            />
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
