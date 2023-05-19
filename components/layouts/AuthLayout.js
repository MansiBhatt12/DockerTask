import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AuthLayout({ children }) {
    const [user, setUser] = useState();
    const router = useRouter();

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        const res = await fetch("", {});
        if (res.ok) {
            const json = await res.json();
            setUser(json);
        } else {
            router.push("/login");
        }
    }

    function logout() {
        localStorage.removeItem("auth_token");
        router.push("/");
    }

    return <div>{children}</div>;
}
