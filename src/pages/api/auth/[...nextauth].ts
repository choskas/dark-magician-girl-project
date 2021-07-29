import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Facebook({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_APP_SECRET,
    }),
    Providers.Google({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_APP_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_APP_SECRET
      }),
  ],
  callbacks: {
    /**
     * @param  {string} url      URL provided as callback URL by the client
     * @param  {string} baseUrl  Default base URL of site (can be used as fallback)
     * @return {string}          URL the client will be redirect to
     */
    async redirect(url, baseUrl) {
      return url.startsWith(baseUrl)
        ? url
        : baseUrl
    }
  },
  database: process.env.NEXT_PUBLIC_MONGO_DB
})