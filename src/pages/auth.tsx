import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

const Auth = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  useEffect(() => {
    // @ts-ignore
    if (session && session.user.role === undefined) {
      router.push("/storeOrClient");
    } else {
      router.push("/profile");
    }
  }, [session]);
  return <>redirecting</>;
};

export default Auth;
