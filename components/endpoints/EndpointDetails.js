import React from "react";

/* this component will be [epId].js */

const endpoint = [
    { title: "Node", value: "my-ipfs-node" },
    { title: "Endpoint ID", value: "1zcvyt4768743hvcm8sdfnvc378w478" },
    { title: "Endpoint Secret", value: "432nudh1h81jncv781bd7613nc90jf8" },
    {
        title: "Endpoint URL",
        value: "http://1zcvyt4768743hvcm8sdfnvc378w478:432nudh1h81jncv781bd7613nc90jf8@ipfs.kotal.co",
    },
];

const EndpointDetails = () => {
    return (
        <div className="flex flex-col space-y-5">
            {endpoint.map((ep, idx) => (
                <div key={idx}>
                    <p className="text-sm font-medium text-cdoffwhite">
                        {ep.title}
                    </p>
                    <p className="truncate text-sm text-cdmidwhite font-mono">
                        {ep.value}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default EndpointDetails;
