import Image from "next/image";
import Link from "next/link";

const logoHeader = "/chaindeck-logo-header.svg";

export default function Error() {
    return (
        <>
            <div className="flex min-h-screen flex-col pt-16 pb-12">
                <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        <Image
                            src={logoHeader}
                            width={180}
                            height={100}
                            className=""
                            alt="Logo"
                        />
                    </div>
                    <div className="py-16">
                        <div className="text-center">
                            <p className="text-xl text-white">
                                404 | Page not found!
                            </p>
                            <div className="mt-6">
                                <Link href="/" passHref>
                                    <span className="text-base font-medium text-indigo-400 hover:text-indigo-500">
                                        Go back home
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
                {/* <footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
                    <nav className="flex justify-center space-x-4">
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-500 hover:text-gray-600"
                        >
                            Contact Support
                        </a>
                        <span
                            className="inline-block border-l border-gray-300"
                            aria-hidden="true"
                        />
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-500 hover:text-gray-600"
                        >
                            Status
                        </a>
                        <span
                            className="inline-block border-l border-gray-300"
                            aria-hidden="true"
                        />
                        <a
                            href="#"
                            className="text-sm font-medium text-gray-500 hover:text-gray-600"
                        >
                            Twitter
                        </a>
                    </nav>
                </footer> */}
            </div>
        </>
    );
}
