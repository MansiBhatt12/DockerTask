import React, { Fragment } from "react";
import Link from "next/link";
import {
    Squares2X2Icon,
    CubeIcon,
    CursorArrowRaysIcon,
    KeyIcon,
    DocumentTextIcon,
    BookOpenIcon,
} from "@heroicons/react/24/outline";

const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: Squares2X2Icon,
        current: true,
    },
    { name: "Nodes", href: "/dashboard/nodes", icon: CubeIcon, current: false },
    {
        name: "Endpoints",
        href: "/dashboard/endpoints",
        icon: CursorArrowRaysIcon,
        current: false,
    },
    { name: "Keys", href: "/dashboard/keys", icon: KeyIcon, current: false },
    {
        name: "Contracts",
        href: "/dashboard/contracts",
        icon: DocumentTextIcon,
        current: false,
    },
    {
        name: "Address Book",
        href: "/dashboard/address-book",
        icon: BookOpenIcon,
        current: false,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const DashSidebar = () => {
    return (
        <>
            <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
                <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
                    {/* <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                    /> */}
                </div>
                <div className="flex flex-1 flex-col overflow-y-auto">
                    <nav className="flex-1 space-y-1 px-2 py-4">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} passHref>
                                <span
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                                    )}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current
                                                ? "text-gray-300"
                                                : "text-gray-400 group-hover:text-gray-300",
                                            "mr-3 flex-shrink-0 h-6 w-6"
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default DashSidebar;
