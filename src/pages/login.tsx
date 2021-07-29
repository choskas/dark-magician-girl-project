import { useState } from "react";
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

const Login = () => {
  const router = useRouter();
  const [isActiveLogin, setIsActiveLogin] = useState(true);
  const [isActiveRegister, setIsActiveRegister] = useState(false);
  const [session, loading] = useSession();

  const login = () => {
    if (!session && !loading) {
      return (
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
              <LoginRegisterWrapper>
                <TextLogin
                  isActive={isActiveLogin}
                  onClick={() => {
                    setIsActiveRegister(false);
                    setIsActiveLogin(true);
                  }}
                >
                  Login
                </TextLogin>
                <VerticalSeparatorMini></VerticalSeparatorMini>
                <TextLogin
                  isActive={isActiveRegister}
                  onClick={() => {
                    setIsActiveRegister(true);
                    setIsActiveLogin(false);
                  }}
                >
                  Registrar
                </TextLogin>
              </LoginRegisterWrapper>
              <InputsWrapper>
                <InputText
                  placeholder="Correo electronico"
                  onChange={() => {}}
                />
                <InputText placeholder="Contraseña" onChange={() => {}} />
              </InputsWrapper>
              <LoginButtonsWrapper>
                <LoginButton>Iniciar sesión</LoginButton>
                <Separator />
                <LoginButton
                  onClick={async () => {
                    
                    await signIn("facebook", {
                      callbackUrl: `${process.env.NEXT_PUBLIC_URL_WEB}/profile`,
                    });
                  }}
                  icon="/assets/facebook.png"
                >
                  Login with facebook
                </LoginButton>
              </LoginButtonsWrapper>
            </LoginFormContainer>
          </LoginWrapper>

          <Footer />
        </>
      );
    } else {
      setTimeout(() => {
        router.push("/");
      }, 2000);
      return <>You are logged in</>;
    }
  };

  return login();
};

export default Login;
