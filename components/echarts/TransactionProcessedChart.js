import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import formatDate from "../../libs/formatDate";
import formatDateUtc from "../../libs/formatDateUtc";
import subtractDate from "../../libs/subtractDate";
import timeGenerator from "../../libs/timeGenerator";
import ArrowIconLoader from "../common/ArrowIconLoader";

export default function TransactionProcessedChart({
    nodeId,
    isLoading,
    setIsLoading,
    fetching,
    setFetching,
}) {
    const [chartData, setChartData] = useState([]);
    const [queryStart, setQueryStart] = useState(null);
    const [queryEnd, setQueryEnd] = useState(null);
    const [queryTime, setQueryTime] = useState([]);

    let data = [];
    // let xData = [];
    // let queryTime;

    const utcDate = formatDateUtc();
    const date = formatDate(utcDate);
    const timeStamp = utcDate.replace(/:[^:]*$/, "").split("T")[1];

    let subtractTime = subtractDate();
    let startDate = formatDate(subtractTime);
    let startTime = subtractTime.replace(/:[^:]*$/, "").split("T")[1];

    useEffect(() => {
        setQueryStart(localStorage.getItem("start_time"));
        setQueryEnd(localStorage.getItem("end_time"));
        setQueryTime(JSON.parse(localStorage.getItem("data")));
    }, [nodeId]);

    useEffect(() => {
        setFetching(true);
        setIsLoading(isLoading + 1);
        fetch(
            `http://chaindeck.api.io:30967/query_range_v1?query=eth_exe_block_head_transactions_in_block{pod=~"$pod"}&start_time=${startDate}T${startTime}&end_time=${date}T${timeStamp}&step=300`,
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    "node-id": nodeId,
                    Authorization: `Bearer ${localStorage.getItem(
                        "auth_token"
                    )}`,
                },
            }
        )
            .then((res) => res.json())
            .then((res) => {
                let data = res[1];
                data = data[0];
                data = data?.values;
                setChartData(data);
                setFetching(false);
                setIsLoading(isLoading - 1);
            })
            .catch((error) => {});
    }, [nodeId]);

    // queryTime = timeGenerator(queryStart);

    try {
        for (let num of chartData) {
            let intNum = parseInt(num[1]);
            data.push(intNum);
            // xData.push(num[0]);
        }
    } catch (error) {}

    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);

    const options = {
        title: {
            text: "Transaction Processed",
            subtext: data.length === 0 && "No data",
            textStyle: {
                color: "#ccc",
            },
            subtextStyle: {
                fontSize: 14,
            },
        },
        grid: { top: 60, right: 40, bottom: 20, left: 40, containLabel: true },
        xAxis: {
            show: data.length !== 0,
            type: "category",
            data: queryTime,
            axisLabel: {
                inside: false,
                color: "#bbb",
            },
        },
        yAxis: {
            show: data.length !== 0,
            type: "value",
            min: minValue,
            max: maxValue + 20,
            axisLabel: {
                color: "#bbb",
            },
        },
        series: [
            {
                data: data,
                type: "line",
                // smooth: true,
                step: "start",
            },
        ],
        toolbox: {
            show: data.length !== 0 && !fetching,
            feature: {
                saveAsImage: {},
            },
        },
        tooltip: {
            show: data.length !== 0,
            trigger: "axis",
        },
    };

    return (
        <div className="relative">
            {fetching && <ArrowIconLoader />}
            <ReactECharts option={options} style={{ height: 280 }} />
        </div>
    );
}
