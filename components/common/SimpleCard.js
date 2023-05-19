const nodeInfo = [
    { title: "Last Block Number", count: 7980020 },
    { title: "Transactions Today", count: 134569 },
    { title: "Connected Peers", count: 21 },
];

// const updatedTime = new Date().toDateString();

export default function SimpleCard() {
    return (
        <div>
            {/* <h2 className="text-sm font-medium text-gray-500">Last Updated on {updatedTime}</h2> */}
            <ul
                role="list"
                className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
            >
                {nodeInfo.map((info) => (
                    <li
                        key={info.title}
                        className="col-span-1 flex rounded-md shadow-sm"
                    >
                        <div className="flex flex-1 items-center justify-between truncate rounded-md bg-cdprimary">
                            <div className="flex-1 truncate px-6 py-6 text-sm">
                                <p className="font-medium text-cdoffwhite">
                                    {info.title}
                                </p>
                                <p className="text-cdoffwhite text-4xl font-medium mt-2">
                                    {info.count}
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
