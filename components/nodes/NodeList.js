import Link from "next/link";
import {
    ChevronRightIcon,
    GlobeAltIcon,
    CpuChipIcon,
} from "@heroicons/react/20/solid";

const nodeList = [
    {
        id: 1,
        title: "my-beacon-node",
        location: "Prysm",
        department: "Pyrmont",
    },
    {
        id: 2,
        title: "my-filecoin-node",
        location: "Iotus",
        department: "Calibration",
    },
    {
        id: 3,
        title: "my-ethereum-node",
        location: "Hyperledger Besu",
        department: "Rinkeby",
    },
];

export default function NodeList() {
    return (
        <div className="overflow-hidden bg-cdprimary shadow sm:rounded-md">
            <ul role="list" className="divide-y divide-cdnavyblue">
                {nodeList.map((node) => (
                    <li key={node.id}>
                        <Link
                            href={`/dashboard/nodes/${node.title}`}
                            className="block hover:bg-cdblacklite"
                        >
                            <div className="px-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <div className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <p className="truncate text-sm font-medium text-cdoffwhite">
                                                {node.title}
                                            </p>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between">
                                            <div className="sm:flex">
                                                <p className="flex items-center text-sm text-gray-500">
                                                    <GlobeAltIcon
                                                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                    {node.department}
                                                </p>
                                                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                                    <CpuChipIcon
                                                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                    {node.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <ChevronRightIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
