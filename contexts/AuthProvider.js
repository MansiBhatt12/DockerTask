import { createContext } from "react";
import { useCredentials } from "../hooks/useCredentials";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const contexts = useCredentials();

    return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;
