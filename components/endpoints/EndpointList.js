import Link from "next/link";
import { CubeIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const endpointList = [
    {
        id: 1,
        title: "beacon-endpoint",
        node: "my-beacon-node",
    },
    {
        id: 2,
        title: "calibration-endpoint",
        node: "my-filecoin-node",
    },
    {
        id: 3,
        title: "rinkeby-endpoint",
        node: "my-ethereum-node",
    },
];

export default function EndpointList() {
    return (
        <div className="overflow-hidden bg-cdprimary shadow sm:rounded-md border border-cdnavyblue">
            <ul role="list" className="divide-y divide-cdnavyblue">
                {endpointList.map((endpoint) => (
                    <li key={endpoint.id}>
                        <Link
                            href={`/dashboard/endpoints/${endpoint.title}`}
                            className="block hover:bg-cdblacklite"
                            passHref
                        >
                            <div className="px-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <div className="px-4 py-4 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <p className="truncate text-sm font-medium text-cdoffwhite">
                                                {endpoint.title}
                                            </p>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between">
                                            <div className="sm:flex">
                                                <p className="flex items-center text-sm text-gray-500">
                                                    <CubeIcon
                                                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                    {endpoint.node}
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
