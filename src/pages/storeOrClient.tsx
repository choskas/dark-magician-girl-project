// @ts-nocheck
import axios from "axios";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/index/NavBar";
import { CardFrame, StartButton } from "../styles/index/MainPage";
import {
  CardFrameStoreOrClient,
  ClientWrapper,
  StoreOrClientWrapper,
  StoreWrapper,
} from "../styles/storeOrClient";

const StoreOrClient = () => {
  const [session, loading] = useSession();
  const router = useRouter();
  const selectRole = async (selectedRole) => {
    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/selectRole`, {
      role: selectedRole,
  
      id: session.user.id,
    });
  };

  
  useEffect(() => {
    if (session && session.user.role === 'store' && !session.user.contact ){
      router.push("/storeExtraData")
      }
  }, [session]);
  return (
    <>
      <NavBar />
      {session && session.user.role === undefined && (
        <StoreOrClientWrapper>
          <ClientWrapper>
            <StartButton
              onClick={async () => {
                await selectRole("client");
                router.push("/auth");
              }}
            >
              ¡Busco cartas!
            </StartButton>
          </ClientWrapper>
          <CardFrameStoreOrClient />
          <StoreWrapper>
            <StartButton
              style={{ height: "auto" }}
              onClick={async () => {
                await selectRole("store");
                router.push("/storeExtraData");
              }}
            >
              ¡Tengo una tienda o quiero vender!
            </StartButton>
          </StoreWrapper>
        </StoreOrClientWrapper>
      )}

      <Footer />
    </>
  );
};

export default StoreOrClient;
