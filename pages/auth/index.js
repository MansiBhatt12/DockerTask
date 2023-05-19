import { useEffect } from "react";
import dynamic from 'next/dynamic'
import SuperTokens, { redirectToAuth } from 'supertokens-auth-react'

const SuperTokensComponentNoSSR = dynamic(
    new Promise((res) => res(SuperTokens.getRoutingComponent)), { ssr: false }
)

export default function Auth() {
    useEffect(() => {
        if (SuperTokens.canHandleRoute() === false) {
            redirectToAuth()
        }
    }, [])

    return (
        <SuperTokensComponentNoSSR />
    )
}