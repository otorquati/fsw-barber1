import NextAuth from "next-auth";
import { authOptions } from "@/app/_lib/auth";

const handler = await NextAuth(authOptions);

export { handler as GET, handler as POST };
