import { useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login";
import InputText from "../components/common/InputText";
import LoginButton from "../components/common/LoginButton";
import Footer from "../components/Footer/Footer";
import { useDispatch } from 'react-redux';
import NavBar from "../components/index/NavBar";
import { Separator, VerticalSeparatorMini } from "../styles/common/Separtor";
import {
  InputsWrapper,
  LoginButtonsWrapper,
  LoginImage,
  LoginRegisterWrapper,
  SubtitleLogin,
  TextLogin,
  TitleContainer,
  TitleLogin,
} from "../styles/login/login";
import { signInAction } from "../redux/modules/auth";

const Login = () => {
  const [isActiveLogin, setIsActiveLogin] = useState(true);
  const [isActiveRegister, setIsActiveRegister] = useState(false);
  // LOGIN WITH FACEBOOK
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    dispatch(signInAction(response))
  };

  //LOGIN WITH FACEBOOK
  const dispatch = useDispatch();
  return (
    <>
      <NavBar />
      {!isLoggedIn && (
        <>
          <LoginImage src="/assets/MagicianGirlLogin.png" />
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
                const facebookButton =
                  document.getElementsByClassName("facebook-button")[0] as HTMLElement;
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
        </>
      )}

      <Footer />
    </>
  );
};

export default Login;
