import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const logoHeader = "/chaindeck-logo-header.svg";

const schema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(4, "Password must be at least 4 characters"),
});

export default function Login() {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [resData, setResData] = useState(null);
    const [authToken, setAuthToken] = useState(undefined);

    const router = useRouter();

    const handleLogin = async (values) => {
        // e.preventDefault();

        await fetch("http://chaindeck.api.io:30967/jwt_login", {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((res) => {
                setResData(res);
                localStorage.setItem("auth_token", res.access_token);
                router.push("/dashboard");
            })
            .catch((error) => console.log("error: ", error));
    };

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setUserData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue,
        }));
    };

    /* useEffect(() => {
        setAuthToken(localStorage.getItem("auth_token"));
        if (!(authToken === "undefined" || authToken === null))
            router.push("/");
    }, [authToken]); */

    return (
        <>
            <div className="mx-2 flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <Image
                    src={logoHeader}
                    width={180}
                    height={100}
                    className="-mt-6 ml-28 mb-20"
                    alt="Logo"
                />
                {/* <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                        Log in to your account
                    </h2>
                </div> */}

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
                        <div className="mb-12 sm:mx-auto sm:w-full sm:max-w-md">
                            <h2 className="text-center text-3xl text-zinc-600 font-bold tracking-tight uppercase">
                                Login
                            </h2>
                        </div>
                        {/* formik */}
                        <Formik
                            validationSchema={schema}
                            initialValues={{ email: "", password: "" }}
                            onSubmit={(values) => {
                                // Alert the input values of the form that we filled
                                handleLogin(values);
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
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                    placeholder="Email address"
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
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                    placeholder="Your password"
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
                                                Login
                                            </button>
                                        </div>
                                    </form>

                                    <div className="mt-8">
                                        <div
                                            className="inset-0 flex items-center"
                                            aria-hidden="true"
                                        >
                                            <div className="w-full border-t-2 border-gray-300" />
                                        </div>
                                    </div>

                                    <div className="mt-8 text-center">
                                        <p>New to Chaindeck? </p>
                                        <Link
                                            href={"/register"}
                                            className="font-semibold text-violet-500"
                                            passHref
                                        >
                                            Create account
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </Formik>

                        {/* normal form */}
                        {/* <form className="space-y-6" onSubmit={handleLogin}>
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
                                        onChange={handleInput}
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
                                        onChange={handleInput}
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
                                    Log in
                                </button>
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>
        </>
    );
}
