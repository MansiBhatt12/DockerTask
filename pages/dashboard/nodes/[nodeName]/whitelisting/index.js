import { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";
import {
    Bars3BottomLeftIcon,
    XMarkIcon,
    Squares2X2Icon,
    CubeIcon,
    CursorArrowRaysIcon,
    KeyIcon,
    DocumentTextIcon,
    BookOpenIcon,
} from "@heroicons/react/24/outline";
import SimpleCard from "../../../../../components/common/SimpleCard";
import Whitelisting from "../../../../../components/nodes/Whitelisting";
import DesktopSidebar from "../../../../../components/dashboard-sidebar/DesktopSidebar";
import PhoneSidebar from "../../../../../components/dashboard-sidebar/PhoneSidebar";

const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: Squares2X2Icon,
        current: false,
    },
    { name: "Nodes", href: "/dashboard/nodes", icon: CubeIcon, current: true },
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

const tabs = [
    { name: "Protocol", href: "protocol", current: false },
    { name: "Networking", href: "networking", current: false },
    { name: "API", href: "api", current: false },
    { name: "Whitelisting", href: "whitelisting", current: true },
    { name: "Resources", href: "resources", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const updateFakeTime = new Date().toDateString();

export default function WhitelistingTab() {
    const router = useRouter();
    const { nodeName } = router.query;

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-40 md:hidden"
                        onClose={setSidebarOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() =>
                                                    setSidebarOpen(false)
                                                }
                                            >
                                                <span className="sr-only">
                                                    Close sidebar
                                                </span>
                                                <XMarkIcon
                                                    className="h-6 w-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <PhoneSidebar navigation={navigation} />
                                </Dialog.Panel>
                            </Transition.Child>
                            <div
                                className="w-14 flex-shrink-0"
                                aria-hidden="true"
                            >
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <DesktopSidebar navigation={navigation} />
                </div>
                <div className="flex flex-col md:pl-64">
                    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-cdnavyblue">
                        <button
                            type="button"
                            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3BottomLeftIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </button>
                    </div>

                    <main className="h-full bg-cdnavyblue">
                        <div className="py-6">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                                <h1 className="text-2xl font-bold text-white">
                                    {nodeName}
                                </h1>
                                <h2 className="text-sm font-medium text-gray-500">
                                    Last Updated on {updateFakeTime}
                                </h2>
                            </div>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                                <div className="py-4">
                                    {/* rendered components */}
                                    <SimpleCard />
                                    <div className="py-3">
                                        {/* some space */}
                                    </div>
                                    <div className="bg-cdprimary rounded-md shadow-sm">
                                        <div className="px-4 py-6 border-b border-cdnavyblue">
                                            <div className="sm:hidden">
                                                <label
                                                    htmlFor="tabs"
                                                    className="sr-only"
                                                >
                                                    Select a tab
                                                </label>
                                                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                                                <select
                                                    id="tabs"
                                                    name="tabs"
                                                    className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                                                    defaultValue={
                                                        tabs.find(
                                                            (tab) => tab.current
                                                        ).name
                                                    }
                                                >
                                                    {tabs.map((tab) => (
                                                        <option key={tab.name}>
                                                            {tab.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="hidden sm:block">
                                                <nav
                                                    className="space-x-1 space-y-2"
                                                    aria-label="Tabs"
                                                >
                                                    {tabs.map((tab) => (
                                                        <Link
                                                            key={tab.name}
                                                            href={`/dashboard/nodes/${nodeName}/${tab.href}`}
                                                            className={classNames(
                                                                tab.current
                                                                    ? "bg-indigo-200 text-indigo-700"
                                                                    : "hover:bg-gray-100 text-gray-500 hover:text-gray-700",
                                                                "px-3 py-2 font-medium text-sm rounded-md inline-flex mx-1"
                                                            )}
                                                            aria-current={
                                                                tab.current
                                                                    ? "page"
                                                                    : undefined
                                                            }
                                                            passHref
                                                        >
                                                            {tab.name}
                                                        </Link>
                                                    ))}
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="px-6 py-8">
                                            {/* nested component */}
                                            <Whitelisting />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
