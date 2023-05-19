import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Image from "next/image";

const logoHeader = "/chaindeck-logo-header.svg";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function DesktopSidebar({ navigation }) {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("auth_token");
        router.push("/login");
    };

    return (
        <>
            <div className="flex min-h-0 flex-1 flex-col bg-transparent">
                <div className="flex h-16 flex-shrink-0 items-center px-4">
                    <Image
                        src={logoHeader}
                        width={180}
                        height={100}
                        className="mx-auto mt-8"
                        alt="Logo"
                    />
                    {/* <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                    /> */}
                </div>
                <div className="flex flex-1 flex-col overflow-y-auto mt-4">
                    <nav className="flex-1 space-y-1 px-2 py-4">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} passHref>
                                <span
                                    className={classNames(
                                        item.current
                                            ? "bg-cddbmedium text-white"
                                            : "text-gray-400 hover:bg-cddbmedium hover:text-white",
                                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                                    )}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current
                                                ? "text-white"
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

                    <div
                        className="ml-2 mb-4 space-y-1 p-2 hover:bg-cddbmedium text-gray-400 hover:text-white cursor-pointer rounded-md group"
                        onClick={handleLogout}
                    >
                        <span className="flex">
                            <ArrowRightOnRectangleIcon
                                className="text-gray-400 group-hover:text-white mr-3 flex-shrink-0 h-6 w-6"
                                aria-hidden="true"
                            />
                            <span className="text-gray-400 group-hover:text-white mr-3 flex-shrink-0 h-6 w-6">
                                Logout
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
