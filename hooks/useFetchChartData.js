import { useEffect, useState } from "react";

export const useFetchChartData = (url, nodeId) => {
    const [chartData, setChartData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                accept: "application/json",
                "node-id": `${nodeId}`,
                Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                let data = res[1];
                data = data[0];
                data = data.values;
                setChartData(data);
            })
            .catch((error) => setError(error));
    }, []);

    return {
        chartData,
        error,
    };
};
