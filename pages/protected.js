import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useFetchChartData } from "../hooks/useFetchChartData";

export default function Protected() {
    // const [decoded, setDecoded] = useState();

    // const router = useRouter();

    /* const handleSignout = (e) => {
        e.preventDefault();

        localStorage.removeItem("auth_token");
        router.push("/");
    }; */

    /* function parseJwt(token) {
        if (!token) {
            return;
        }
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace("-", "+").replace("_", "/");
        return JSON.parse(window.atob(base64));
    } */

    /* useEffect(() => {
        setDecoded(localStorage.getItem("auth_token"));
        console.log(localStorage.getItem("auth_token"));
    }, []); */

    /* useEffect(() => {
        fetch(
            "http://chaindeck.api.io:30967/query_range_v1?query=eth_exe_net_peer_count&start_time=26-02-2023T12%3A00&end_time=26-02-2023T12%3A15&step=300",
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    "node-id": "polygon",
                    Authorization: `Bearer ${localStorage.getItem(
                        "auth_token"
                    )}`,
                },
            }
        )
            .then((res) => res.json())
            .then((res) => console.log(res));
    }, []); */

    const data = useFetchChartData(
        "http://chaindeck.api.io:30967/query_range_v1?query=eth_exe_net_peer_count&start_time=26-02-2023T12%3A00&end_time=26-02-2023T12%3A15&step=300",
        "bsc"
    );

    return (
        <div className="text-white">
            <>
                <h3>This page is protected!</h3>

                <button
                    type="submit"
                    className="flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Log out
                </button>
            </>
        </div>
    );
}
