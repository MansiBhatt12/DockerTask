import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(4, "Password must be at least 4 characters"),
    name: Yup.string(),
    gender: Yup.string(),
    age: Yup.number(),
    country: Yup.string(),
});

const logoHeader = "/chaindeck-logo-header.svg";

const navigation = [
    // { name: "Home", href: "/" },
    // { name: "Dashboard", href: "/dashboard" },
];

export default function Home() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        name: "string",
        gender: "string",
        age: 0,
        country: "string",
    });
    const [resData, setResData] = useState(null);

    const router = useRouter();

    const handleRegister = async (values) => {
        // e.preventDefault();

        await fetch("http://chaindeck.api.io:30967/signup", {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("res: ", res);
                setResData(res);
                if (res.is_active) router.push("/login");
            })
            .catch((error) => {});
    };

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setUserData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue,
        }));
    };

    return (
        <div className="relative overflow-hidden bg-transparent">
            <div
                className="hidden sm:absolute sm:inset-0 sm:block"
                aria-hidden="true"
            >
                <svg
                    className="absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0 xl:transform-none"
                    width={364}
                    height={384}
                    viewBox="0 0 364 384"
                    fill="none"
                >
                    <defs>
                        <pattern
                            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={364}
                        height={384}
                        fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
                    />
                </svg>
            </div>
            <div className="relative pt-6 pb-16 sm:pb-24">
                <Popover>
                    <nav
                        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
                        aria-label="Global"
                    >
                        <div className="flex flex-1 items-center">
                            <div className="flex w-full items-center justify-between md:w-auto">
                                <Link href="/" passHref>
                                    <span className="sr-only">ChainDeck</span>

                                    <Image
                                        src={logoHeader}
                                        width={180}
                                        height={36}
                                        alt="ChainDech Logo"
                                    />
                                </Link>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        <Bars3Icon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="hidden space-x-10 md:ml-10 md:flex">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="font-medium text-white hover:text-gray-300"
                                        passHref
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:flex">
                            <Link
                                href="/login"
                                className="inline-flex items-center rounded-md border border-transparent bg-cddbmedium px-4 py-2 text-sm font-medium text-white hover:bg-cddblight"
                                passHref
                            >
                                Log in
                            </Link>
                        </div>
                    </nav>

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                        >
                            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                                <div className="flex items-center justify-between px-5 pt-4">
                                    <div>
                                        {/* <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt=""
                                        /> */}
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">
                                                Close menu
                                            </span>
                                            <XMarkIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="space-y-1 px-2 pt-2 pb-3">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <a
                                    href="#"
                                    className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                                >
                                    Log in
                                </a>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>

                <main className="mt-16 sm:mt-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                                <div>
                                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-5xl">
                                        Welcome to the monitoring dashboard!
                                    </h1>
                                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        Track the live metrics of your nodes
                                        within a single interface
                                    </p>
                                </div>
                            </div>
                            <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                                <div className="bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                                    {/* <div className="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10">
                                        <h2 className="text-center text-3xl text-zinc-600 font-bold tracking-tight uppercase">
                                            Register
                                        </h2>
                                    </div> */}
                                    <div className="px-4 py-8 sm:px-10">
                                        <div className="mb-12 sm:mx-auto sm:w-full sm:max-w-md">
                                            <h2 className="text-center text-3xl text-zinc-600 font-bold tracking-tight uppercase">
                                                Register
                                            </h2>
                                        </div>
                                        <Formik
                                            validationSchema={schema}
                                            initialValues={{
                                                email: "",
                                                password: "",
                                                name: "string",
                                                gender: "string",
                                                age: 0,
                                                country: "string",
                                            }}
                                            onSubmit={(values) => {
                                                // Alert the input values of the form that we filled
                                                handleRegister(values);
                                            }}
                                        >
                                            {({
                                                values,
                                                errors,
                                                touched,
                                                handleChange,
                                                handleBlur,
                                                handleSubmit,
                                            }) => (
                                                <div>
                                                    <form
                                                        className="space-y-4"
                                                        noValidate
                                                        onSubmit={handleSubmit}
                                                    >
                                                        <div>
                                                            <label
                                                                htmlFor="email"
                                                                className="block text-sm font-medium text-gray-700"
                                                            >
                                                                Email
                                                            </label>
                                                            <div className="mt-1">
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                    onBlur={
                                                                        handleBlur
                                                                    }
                                                                    value={
                                                                        values.email
                                                                    }
                                                                    placeholder="Enter email address"
                                                                    id="email"
                                                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm form-control"
                                                                />
                                                            </div>
                                                            <p className="mt-1 text-xs text-red-500">
                                                                {errors.email &&
                                                                    touched.email &&
                                                                    errors.email}
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <label
                                                                htmlFor="password"
                                                                className="block text-sm font-medium text-gray-700"
                                                            >
                                                                Password
                                                            </label>
                                                            <div className="mt-1">
                                                                <input
                                                                    type="password"
                                                                    name="password"
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                    onBlur={
                                                                        handleBlur
                                                                    }
                                                                    value={
                                                                        values.password
                                                                    }
                                                                    placeholder="Enter password"
                                                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm form-control"
                                                                />
                                                            </div>
                                                            <p className="mt-1 text-xs text-red-500">
                                                                {errors.password &&
                                                                    touched.password &&
                                                                    errors.password}
                                                            </p>
                                                        </div>

                                                        <div>
                                                            <button
                                                                type="submit"
                                                                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                            >
                                                                Create account
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            )}
                                        </Formik>
                                        {/* <div className="">
                                            <form
                                                className="space-y-6"
                                                onSubmit={handleRegister}
                                            >
                                                <div>
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Email address
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="text"
                                                            autoComplete="email"
                                                            onChange={
                                                                handleInput
                                                            }
                                                            required
                                                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="password"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Password
                                                    </label>
                                                    <div className="mt-1">
                                                        <input
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            autoComplete="current-password"
                                                            onChange={
                                                                handleInput
                                                            }
                                                            required
                                                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        Create account
                                                    </button>
                                                </div>
                                            </form>
                                        </div> */}
                                    </div>
                                    <div className="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10">
                                        <p className="text-xs leading-5 text-gray-500">
                                            By signing up, you agree to our{" "}
                                            <a
                                                href="#"
                                                className="font-medium text-gray-900 hover:underline"
                                            >
                                                Terms
                                            </a>
                                            ,{" "}
                                            <a
                                                href="#"
                                                className="font-medium text-gray-900 hover:underline"
                                            >
                                                Data Policy
                                            </a>{" "}
                                            and{" "}
                                            <a
                                                href="#"
                                                className="font-medium text-gray-900 hover:underline"
                                            >
                                                Cookies Policy
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
