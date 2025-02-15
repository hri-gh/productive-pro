// auth.config.ts
import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"

export default {
    providers: [GitHub],
    callbacks: {
        // authorized: async ({ auth }) => {
        //     // Logged in users are authenticated, otherwise redirect to login page
        //     return !!auth
        // },
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.AUTH_SECRET
} satisfies NextAuthConfig
