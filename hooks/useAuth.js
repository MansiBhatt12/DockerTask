import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;

/* 

import { createContext, useContext, useState } from "react";

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    return {
        user,
    };
}

*/
