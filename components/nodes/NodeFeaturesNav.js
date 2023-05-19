import Link from "next/link"
import { useRouter } from "next/router"
import Protocol from './Protocol'

const tabs = [
    { name: 'Protocol', href: 'protocol', current: true },
    { name: 'Networking', href: 'networking', current: false },
    { name: 'API', href: '#', current: false },
    { name: 'Whitelisting', href: '#', current: false },
    { name: 'Resources', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NodeFeaturesNav() {
    const router = useRouter()
    const { nodeName } = router.query

    return (
        <div className="border border-gray-200 bg-white rounded-md shadow-sm">
            <div className="px-4 py-6 border-b border-gray-200">
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">
                        Select a tab
                    </label>
                    {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                    <select
                        id="tabs"
                        name="tabs"
                        className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                        defaultValue={tabs.find((tab) => tab.current).name}
                    >
                        {tabs.map((tab) => (
                            <option key={tab.name}>{tab.name}</option>
                        ))}
                    </select>
                </div>
                <div className="hidden sm:block">
                    <nav className="space-x-1 space-y-2" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.name}
                                href={`/dashboard/nodes/${nodeName}/${tab.href}`}
                                className={classNames(
                                    tab.current ? 'bg-indigo-200 text-indigo-700' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700',
                                    'px-3 py-2 font-medium text-sm rounded-md inline-flex mx-1'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                                passHref
                            >
                                {tab.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
            <div className="px-6 py-8">
                {/* nested component */}
                <Protocol />
                {/* <component /> */}
            </div>
        </div>
    )
}
