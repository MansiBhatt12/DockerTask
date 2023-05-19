import { Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const schema = Yup.object().shape({
    query: Yup.string().required("Query is a required field"),
});

export default function SqlQuery() {
    const [resData, setResData] = useState([]);
    const [authToken, setAuthToken] = useState(undefined);
    const [query, setQuery] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setAuthToken(localStorage.getItem("auth_token"));
    }, []);

    const handleRunQuery = async (values) => {
        setIsLoading(true);
        setQuery(values);
        try {
            await fetch(`http://chaindeck.api.io:30967/query`, {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
                },
                body: JSON.stringify(values),
            })
                .then((res) => res.json())
                .then((res) => {
                    setResData(res[1]);
                    setIsLoading(false);
                });
        } catch (error) {
            if (error) {
                setIsLoading(false);
                // setError("Error has occured");
            }
        }

        // .catch((error) => setError(error));
    };

    return (
        <div>
            <div className="mb-12 text-zinc-200">
                <div className="my-2">
                    <Formik
                        validationSchema={schema}
                        initialValues={{ query: "" }}
                        onSubmit={(values, { resetForm }) => {
                            // Alert the input values of the form that we filled
                            handleRunQuery(values);
                            resetForm({ values: "" });
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
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="query"
                                                className="block font-medium leading-6 text-gray-200"
                                            >
                                                Run your SQL query
                                            </label>
                                        </div>
                                        <div className="mt-1">
                                            <textarea
                                                rows={4}
                                                type="text"
                                                name="query"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.query}
                                                id="query"
                                                className="block w-full rounded-md border-0 bg-cddblight text-gray-300 font-mono shadow-sm ring-1 ring-inset ring-cddarkblue placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        <p className="mt-1 text-xs text-red-500">
                                            {errors.query}
                                        </p>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none my-4"
                                        >
                                            Run Query
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </Formik>
                </div>
                <div className="bg-cddbdark px-4 py-6 rounded-lg mt-4 overflow-hidden break-words">
                    {isLoading ? (
                        <p className="mx-4">query is running...</p>
                    ) : resData.length === 0 && error === null ? (
                        <p className="mx-4">No result found!</p>
                    ) : (
                        !error && (
                            <div className="mx-4 space-y-4">
                                <ul className="text-zinc-300 space-y-2">
                                    {typeof resData === "string" ? (
                                        <li>{resData}</li>
                                    ) : (
                                        resData.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))
                                    )}
                                </ul>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
