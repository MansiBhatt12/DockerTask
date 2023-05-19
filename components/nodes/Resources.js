import React from "react";

const resourceList = [
    {
        label: "Required CPU Cores",
        name: "reqcpu",
        id: "reqcpu",
        defaultValue: 2,
        ext: "Core",
    },
    {
        label: "Maximum CPU Cores",
        name: "maxcpu",
        id: "maxcpu",
        defaultValue: 4,
        ext: "Core",
    },
    {
        label: "Required Memory",
        name: "reqmem",
        id: "reqmem",
        defaultValue: 4,
        ext: "Gigabyte",
    },
    {
        label: "Maximum Memory",
        name: "maxmem",
        id: "maxmem",
        defaultValue: 8,
        ext: "Gigabyte",
    },
    {
        label: "Disk Storage",
        name: "dskstr",
        id: "dskstr",
        defaultValue: 2,
        ext: "Terabyte",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Resources = () => {
    return (
        <div className="flex flex-col space-y-5">
            {resourceList.map((resource) => (
                <div key={resource.id}>
                    <label className="block text-sm font-medium text-white">
                        {resource.label}
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm w-fit">
                        <input
                            type="text"
                            name={resource.name}
                            id={resource.id}
                            className="block w-full rounded-md border-0 bg-cdblacklite text-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm read-only:focus:disabled:"
                            placeholder=""
                            defaultValue={resource.defaultValue}
                            readOnly
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                            <span
                                className="text-gray-300 sm:text-sm"
                                id={resource.id}
                            >
                                {resource.ext}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Resources;
