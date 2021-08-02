import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import Models from "../../../models";

export default NextAuth({
  providers: [
    Providers.Facebook({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_APP_SECRET,
    }),
    Providers.Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_APP_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_APP_SECRET,
    }),
    Providers.Discord({
      clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET
    }),
    Providers.Twitch({
      clientId: process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_TWITCH_CLIENT_SECRET
    }),
  ],
  adapter: Adapters.TypeORM.Adapter(process.env.NEXT_PUBLIC_MONGO_DB, {
    // @ts-ignore
    models: {
      // @ts-ignore
      User: Models.User,
    },
  }),
  callbacks: {
    /**
     * @param  {string} url      URL provided as callback URL by the client
     * @param  {string} baseUrl  Default base URL of site (can be used as fallback)
     * @return {string}          URL the client will be redirect to
     */
    async redirect(url, baseUrl) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async signIn(user, account, profile) {
      console.log(user, account, profile)
      return true;
    },
    session: async (session, user) => {
      if (user?.role) {
        // @ts-ignore
        session.user.role = user.role;
      }
      // @ts-ignore
      session.user.id = user.id;
      return Promise.resolve(session);
    },
  },
  database: process.env.NEXT_PUBLIC_MONGO_DB,
});
