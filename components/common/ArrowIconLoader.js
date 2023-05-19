import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function ArrowIconLoader() {
    return (
        <span className="absolute top-0 right-0 text-gray-500">
            <ArrowPathIcon
                className="text-gray-500 h-6 w-6 animate-spin"
                aria-hidden="true"
            />
        </span>
    );
}
