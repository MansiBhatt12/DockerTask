/* import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            type: "credentials",
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials;

                if (
                    email !== "rakib.hasan@techvzero.com" ||
                    password !== "abcd"
                ) {
                    throw new Error("Invalid credentials");
                }

                return { name: "Rakib", email: "rakib.hasan@techvzero.com" };
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
});
 */
