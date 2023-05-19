import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";
import formatDate from "../../libs/formatDate";
import formatDateUtc from "../../libs/formatDateUtc";
import subtractDate from "../../libs/subtractDate";

export default function EthGasUsedChart() {
    const [chartData, setChartData] = useState([]);
    const [queryStart, setQueryStart] = useState(null);
    const [queryEnd, setQueryEnd] = useState(null);
    const [queryTime, setQueryTime] = useState([]);

    let data = [];

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
    }, []);

    useEffect(() => {
        fetch(
            `http://chaindeck.api.io:30967/query_range_v1?query=sum by (pod)(eth_exe_block_head_gas_used{pod=~"$pod"}) / sum by (pod)(eth_exe_block_head_gas_limit{pod=~"$pod"})&start_time=${startDate}T${startTime}&end_time=${date}T${timeStamp}&step=300`,
            {
                method: "GET",
                headers: {
                    accept: "application/json",
                    "node-id": "bsc",
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
            })
            .catch((error) => {});
    }, []);

    try {
        for (let num of chartData) {
            let intNum = parseInt(num[1]);
            data.push(intNum);
        }
    } catch (error) {}

    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);

    const options = {
        title: {
            text: "Gas Used",
            textStyle: {
                color: "#ccc",
            },
        },
        grid: { top: 60, right: 40, bottom: 20, left: 40, containLabel: true },
        xAxis: {
            type: "category",
            data: queryTime,
            axisLabel: {
                inside: false,
                color: "#bbb",
            },
        },
        yAxis: {
            type: "value",
            min: minValue,
            max: maxValue,
            axisLabel: {
                color: "#bbb",
            },
        },
        series: [
            {
                data: data,
                type: "line",
            },
        ],
        toolbox: {
            feature: {
                saveAsImage: {},
            },
        },
        tooltip: {
            // trigger: "axis",
        },
    };

    return <ReactECharts option={options} style={{ height: 280 }} />;
}
