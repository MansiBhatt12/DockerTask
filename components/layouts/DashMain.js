import React from "react";
import DashboardIntroduction from "../../components/dashboard/introduction";

const DashMain = () => {
    return (
        <>
            <main className="h-full bg-gray-100">
                <div className="py-6">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <h1 className="text-2xl font-bold text-gray-900">
                            ChainDeck Dashboard
                        </h1>
                    </div>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <div className="py-4">{/* some space */}</div>
                        <DashboardIntroduction />
                    </div>
                </div>
            </main>
        </>
    );
};

export default DashMain;
