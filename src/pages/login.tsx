import { useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login";
import InputText from "../components/common/InputText";
import LoginButton from "../components/common/LoginButton";
import Footer from "../components/Footer/Footer";
import { useDispatch } from "react-redux";
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
import { signUpFacebookAction } from "../redux/modules/auth";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [isActiveLogin, setIsActiveLogin] = useState(true);
  const [isActiveRegister, setIsActiveRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");

  const dispatch = useDispatch();
  // LOGIN WITH FACEBOOK
  const responseFacebook = async (response) => {
    await dispatch(
      signUpFacebookAction({
        email: response.email,
        password: "-",
        facebookId: response.userID,
        name: response.name,
        image: response.picture.data.url,
      })
    );
    router.push('/')
  };
  // LOGIN WITH FACEBOOK

  return (
    <>
      <NavBar />
      {!isLoggedIn && (
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
              <InputText placeholder="Correo electronico" onChange={() => {}} />
              <InputText placeholder="Contraseña" onChange={() => {}} />
            </InputsWrapper>
            <LoginButtonsWrapper>
              <LoginButton>Iniciar sesión</LoginButton>
              <Separator />
              <LoginButton
                onClick={() => {
                  const facebookButton = document.getElementsByClassName(
                    "facebook-button"
                  )[0] as HTMLElement;
                  facebookButton.click();
                }}
                icon="/assets/facebook.png"
              >
                Login with facebook
              </LoginButton>
              <FacebookLogin
                appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
                autoload={true}
                callback={responseFacebook}
                cssClass="facebook-button"
                fields="name,email,picture"
              />
            </LoginButtonsWrapper>
          </LoginFormContainer>
        </LoginWrapper>
      )}

      <Footer />
    </>
  );
};

export default Login;
