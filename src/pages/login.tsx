import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/client";
import InputText from "../components/common/InputText";
import LoginButton from "../components/common/LoginButton";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/index/NavBar";
import { Separator, VerticalSeparatorMini } from "../styles/common/Separtor";
import {
  InputsWrapper,
  LoginButtonsWrapper,
  LoginFormContainer,
  LoginImage,
  LoginImageContainer,
  LoginRegisterWrapper,
  LoginWrapper,
  SubtitleLogin,
  TextLogin,
  TitleContainer,
  TitleLogin,
} from "../styles/login/login";
import { useRouter } from "next/router";
import Select from "../components/common/Select";
import FullScreenLoader from "../components/common/FullScreenLoader";

const Login = () => {
  const router = useRouter();
  const [session, loading] = useSession();

  useEffect(() => {
    if (session && session.user) {
      router.push("/");
    }
  }, [session]);

  const login = () => {
    return (
      <>
        {!session && (
          <>
            <NavBar />
            <LoginWrapper>
              <LoginImageContainer>
                <LoginImage />
              </LoginImageContainer>
              <LoginFormContainer>
                <TitleContainer>
                  <TitleLogin src="/assets/LogoLogin.png"></TitleLogin>
                  <SubtitleLogin>Cotizador de cartas</SubtitleLogin>
                </TitleContainer>
                <InputsWrapper>
                  Las contraseñas ya no son tan seguras, olvidate de anotarlas
                  en un papel o recordarlas, no te preocupes tu cuenta sera
                  mucho mas segura de esta forma. Accede con uno de estos
                  servicios:
                </InputsWrapper>
                <LoginButtonsWrapper>
                  <Separator />
                  <LoginButton
                    icon="/assets/googleIcon.png"
                    onClick={async () => {
                      try {
                        await signIn("google", {
                          callbackUrl: `${process.env.NEXT_PUBLIC_URL_WEB}/auth`,
                        });
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  >
                    Login with Google
                  </LoginButton>
                  <LoginButton
                    onClick={async () => {
                      try {
                        await signIn("facebook", {
                          callbackUrl: `${process.env.NEXT_PUBLIC_URL_WEB}/auth`,
                        });
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                    icon="/assets/facebook.png"
                  >
                    Login with facebook
                  </LoginButton>
                  <LoginButton
                    icon="/assets/discordIcon.png"
                    onClick={async () => {
                      try {
                        await signIn("discord", {
                          callbackUrl: `${process.env.NEXT_PUBLIC_URL_WEB}/auth`,
                        });
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  >
                    Login with Discord
                  </LoginButton>
                  <LoginButton
                    icon="/assets/twitchIcon.png"
                    onClick={async () => {
                      try {
                        await signIn("twitch", {
                          callbackUrl: `${process.env.NEXT_PUBLIC_URL_WEB}/auth`,
                        });
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  >
                    Login with Twitch
                  </LoginButton>
                </LoginButtonsWrapper>
              </LoginFormContainer>
            </LoginWrapper>

            <Footer />
          </>
        )}
      </>
    );
  };

  return login();
};

export default Login;
