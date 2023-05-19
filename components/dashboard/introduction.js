import { useEffect, useState } from "react";
import formatDate from "../../libs/formatDate";
import formatDateUtc from "../../libs/formatDateUtc";
import SingleItemChartCard from "../card/SingleItemChartCard";
import ChartCard from "../echarts/ChartCard";
import BlockHeightChart from "../echarts/BlockHeightChart";
import GasLimitChart from "../echarts/GasLimitChart";
import TransactionProcessedChart from "../echarts/TransactionProcessedChart";
import PeersCountChart from "../echarts/PeersCountChart";
import GasUsedChart from "../echarts/GasUsedChart";
import subtractDate from "../../libs/subtractDate";
import timeGenerator from "../../libs/timeGenerator";
import SuggestedGasPriceChart from "../echarts/SuggestedGasPriceChart";
import TransactionPoolChart from "../echarts/TransactionPoolChart";
import BlockSizeChart from "../echarts/BlockSizeChart";
import SyncDistanceChart from "../echarts/SyncDistanceChart";
import SyncPercentChart from "../echarts/SyncPercentChart";
import SimpleLoader from "../common/SimpleLoader";

export default function DashboardIntroduction({
    nodeId,
    isLoading,
    setIsLoading,
    setNodeId,
    fetching,
    setFetching,
}) {
    const [queryStart, setQueryStart] = useState(null);
    const [networkId, setNetworkId] = useState(0);
    const [chainId, setChainId] = useState(0);
    const [syncStatus, setSyncStatus] = useState(0);
    // const [nodeId, setNodeId] = useState("bsc");
    // const [isLoading, setIsLoading] = useState(0);

    const utcDate = formatDateUtc();
    const date = formatDate(utcDate);
    const timeStamp = utcDate.replace(/:[^:]*$/, "").split("T")[1];

    let subtractTime = subtractDate();
    let startDate = formatDate(subtractTime);
    let startTime = subtractTime.replace(/:[^:]*$/, "").split("T")[1];

    timeGenerator(queryStart);

    useEffect(() => {
        setQueryStart(localStorage.getItem("start_time"));
        localStorage.setItem("start_time", subtractTime);
        localStorage.setItem("end_time", utcDate);
        // localStorage.setItem("data", JSON.stringify(cData));
        // setNodeId(localStorage.getItem("node_id"));
    }, []);

    /* chain id */
    useEffect(() => {
        setIsLoading(isLoading + 1);
        setFetching(true);
        fetch(
            `http://chaindeck.api.io:30967/query_range_v1?query=eth_exe_chain_id{pod=~"$pod"}&start_time=${startDate}T${startTime}&end_time=${date}T${timeStamp}&step=2400`,
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
                setChainId(data[0]);
                setFetching(false);
                setIsLoading(isLoading - 1);
            })
            .catch((error) => {});
    }, [nodeId, setNodeId]);

    /* network id */
    useEffect(() => {
        setIsLoading(isLoading + 1);
        setFetching(true);
        fetch(
            `http://chaindeck.api.io:30967/query_range_v1?query=eth_exe_network_id{pod=~"$pod"}&start_time=${startDate}T${startTime}&end_time=${date}T${timeStamp}&step=2400`,
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
                setNetworkId(data[0]);
                setFetching(false);
                setIsLoading(isLoading - 1);
            })
            .catch((error) => {});
    }, [nodeId, setNodeId]);

    /* sync status */
    useEffect(() => {
        setIsLoading(isLoading + 1);
        setFetching(true);
        fetch(
            `http://chaindeck.api.io:30967/query_range_v1?query=eth_con_sync_is_syncing{pod=~"$pod"}&start_time=${startDate}T${startTime}&end_time=${date}T${timeStamp}&step=300`,
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
                setSyncStatus(data[0]);
                setFetching(false);
                setIsLoading(isLoading - 1);
            })
            .catch((error) => {});
    }, [nodeId, setNodeId]);

    return (
        <div>
            {isLoading > 0 && <SimpleLoader />}
            <div
                className={`rounded-md px-6 py-6 ${
                    isLoading > 0 && "opacity-25 select-none"
                }`}
            >
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <ChartCard>
                        <SingleItemChartCard
                            title="Sync Status"
                            value={syncStatus[1] == 0 ? "Synced" : "Syncing"}
                            fetching={fetching}
                        />
                    </ChartCard>

                    <div className="grid grid-cols-2 gap-8">
                        <ChartCard>
                            <SingleItemChartCard
                                title={"Execution Chain ID"}
                                value={chainId[1]}
                                fetching={fetching}
                            />
                        </ChartCard>
                        <ChartCard>
                            <SingleItemChartCard
                                title={"Execution Network ID"}
                                value={networkId[1]}
                                fetching={fetching}
                            />
                        </ChartCard>
                    </div>

                    <ChartCard>
                        <TransactionProcessedChart
                            nodeId={nodeId}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            fetching={fetching}
                            setFetching={setFetching}
                        />
                    </ChartCard>

                    <ChartCard>
                        <PeersCountChart
                            nodeId={nodeId}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            fetching={fetching}
                            setFetching={setFetching}
                        />
                    </ChartCard>

                    <div className="col-span-2">
                        <ChartCard>
                            <BlockHeightChart
                                nodeId={nodeId}
                                isLoading={isLoading}
                                setIsLoading={setIsLoading}
                                fetching={fetching}
                                setFetching={setFetching}
                            />
                        </ChartCard>
                    </div>

                    <ChartCard>
                        <GasUsedChart
                            nodeId={nodeId}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            fetching={fetching}
                            setFetching={setFetching}
                        />
                    </ChartCard>

                    <ChartCard>
                        <GasLimitChart
                            nodeId={nodeId}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            fetching={fetching}
                            setFetching={setFetching}
                        />
                    </ChartCard>

                    <ChartCard>
                        <SyncPercentChart
                            nodeId={nodeId}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            fetching={fetching}
                            setFetching={setFetching}
                        />
                    </ChartCard>

                    <ChartCard>
                        <SyncDistanceChart
                            nodeId={nodeId}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            fetching={fetching}
                            setFetching={setFetching}
                        />
                    </ChartCard>

                    <ChartCard>
                        <SuggestedGasPriceChart
                            nodeId={nodeId}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            fetching={fetching}
                            setFetching={setFetching}
                        />
                    </ChartCard>

                    {/* <ChartCard>
                    <EthGasUsedChart />
                </ChartCard> */}

                    <ChartCard>
                        <BlockSizeChart
                            nodeId={nodeId}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            fetching={fetching}
                            setFetching={setFetching}
                        />
                    </ChartCard>

                    <ChartCard>
                        <TransactionPoolChart
                            nodeId={nodeId}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            fetching={fetching}
                            setFetching={setFetching}
                        />
                    </ChartCard>
                </div>
            </div>
        </div>
    );
}
