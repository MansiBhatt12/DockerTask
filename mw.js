// export { default } from "next-auth/middleware";

// export const config = { matcher: ["/dashboard/:path*"] };

/* testing */

/* import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const secret =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export default function middleware(req) {
    const { cookies } = req;

    const jwt = cookies.OursiteJWT;
    const url = req.url;

    if (url.includes("/dashboard")) {
        if (jwt) {
            try {
                verify(jwt, secret);

                return NextResponse.redirect("/");
            } catch (e) {
                return NextResponse.redirect("/auth/login");
            }
        }
    }

    if (url.includes("/dashboard")) {
        if (jwt === undefined) {
            return NextResponse.redirect("/auth/login");
        }

        try {
            verify(jwt, secret);

            return NextResponse.next();
        } catch (e) {
            return NextResponse.redirect("/auth/login");
        }
    }

    return NextResponse.next();
}
 */
