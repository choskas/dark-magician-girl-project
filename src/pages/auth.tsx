// @ts-nocheck
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";


const Auth = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  useEffect(() => {
    if (session && !session.user.role) {
      router.push("/storeOrClient");
    } else if (session && !session.user.role === 'store'){
      router.push("/storeProfile");
    } else if (session && !session.user.role === 'store'){
      router.push('/profile');
    }
  }, [session]);
  return <>redirecting</>;
};

export default Auth;
