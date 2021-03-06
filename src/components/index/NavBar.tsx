// @ts-nocheck
import {
  CloseIconNavBar,
  CollapseOption,
  CollapseOptionMyProfile,
  HaamburgerImage,
  NavBarCollapse,
  NavBarProfileImageContainer,
  NavBarText,
  ProfileInfoWrapper,
  TextWrapper,
  UserImage,
  Wrapper,
} from "../../styles/navbar/NavBar";
import Link from "next/link";
import { LinkTo } from "../../styles/common/Link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/client";
import socket, {
  disconnectSocket,
  initiateSocket,
} from "../../config/socketConfig";
import LittleLoader from "../common/LittleLoader";
import SpinnerLoader from "../SpinnerLoader";
import { ProfileImage } from "../../styles/storeProfile/storeProfileInfo";

const NavBar = () => {
  const router = useRouter();
  const [session, isLoading] = useSession();
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  const dropdownOptions = () =>
    session ? (
      <>
      <CloseIconNavBar onClick={() => setIsOpenCollapse(false)} src="/icons/xMark.png" alt="close-icon"/>
      <NavBarProfileImageContainer>
      <ProfileImage src={`${process.env.NEXT_PUBLIC_BACKEND_URL_ROOT}/images/${session.user.profileImageKey}`} alt="img-profile" />
      </NavBarProfileImageContainer>
        <CollapseOptionMyProfile
          onClick={() =>
            session && session.user.role === "client"
              ? router.push("/profile")
              : router.push("/storeProfile")
          }
        >
          
          Mi perfil
        </CollapseOptionMyProfile>
        <CollapseOption onClick={() => router.push("/uniqueCardPrice")}>
          Búsqueda de cartas
        </CollapseOption>
        <CollapseOption onClick={() => router.push("/stores")}>
          
          Tiendas
        </CollapseOption>
        <CollapseOption onClick={() => router.push("/onSale")}>
          Ahora en venta
        </CollapseOption>
        {session && session.user.role === "store" ? (
          <CollapseOption onClick={() => router.push("/wantedCards")}>
            Cartas que están buscando
          </CollapseOption>
        ) : (
          <></>
        )}
        {session && session.user.role === "store" ? (
          <CollapseOption
            onClick={() => router.push("/storeProfile/editStoreProfile")}
          >
            Editar información
          </CollapseOption>
        ) : (
          <></>
        )}
        {session && session.user.role === "store" ? (
          <CollapseOption onClick={() => router.push("/fastCharge")}>
            Carga rapida
          </CollapseOption>
        ) : (
          <></>
        )}
        <CollapseOption onClick={() => router.push("/deckPrice")}>
          {session && session.user.role === "store"
            ? "Arma tu base"
            : "Arma tu deck"}
        </CollapseOption>
        <CollapseOption
          onClick={() => {
            disconnectSocket();
            signOut({ callbackUrl: process.env.NEXT_PUBLIC_URL_WEB });
          }}
        >
          Salir
        </CollapseOption>
      </>
    ) : (
      <>
       <CloseIconNavBar onClick={() => setIsOpenCollapse(false)} src="/icons/xMark.png" alt="close-icon"/>
        <NavBarProfileImageContainer>
        <ProfileImage src={`/assets/darkMagiciansTo.jpeg`} alt="img-profile" />
       </NavBarProfileImageContainer>
        <CollapseOption onClick={() => router.push("/login")}>
          
          Acceder
        </CollapseOption>
        <CollapseOption onClick={() => router.push("/uniqueCardPrice")}>
          Búsqueda de cartas
        </CollapseOption>
        <CollapseOption onClick={() => router.push("/deckPrice")}>
          
          Cotizar deck
        </CollapseOption>
      </>
    );
  const connectToSocket = async () => {
    if (session && !socket) {
      const { user } = session;
      const message = initiateSocket(user);
    }
  };
  const getImageProfile = () => {
    let image = "/assets/hamburger.png";
    if (!isLoading && session && session.user.profileImageKey) {
      image = `${process.env.NEXT_PUBLIC_BACKEND_URL_ROOT}/images/${session.user.profileImageKey}`;
    } else if (!isLoading && session && !session.user.profileImageKey) {
      image = session.user.image;
    }
    return image;
  };
  useEffect(() => {
    connectToSocket();
  }, [socket]);

  return (
    <Wrapper>
      <Link href="/">
        <LinkTo>Cards Seeker!</LinkTo>
      </Link>
      {isLoading ? (
        <SpinnerLoader />
      ) : (
        <HaamburgerImage
          alt={
            isLoading === false && session ? "img-profile" : "hamburger icon"
          }
          src={getImageProfile()}
          style={
            isLoading === false && session
              ? { width: "40px", height: "40px", fontSize: "12px" }
              : {}
          }
          onClick={async (e) => {
            e.preventDefault();
            setIsOpenCollapse(!isOpenCollapse);
          }}
        />
      )}
      <NavBarCollapse isOpen={isOpenCollapse}>
        {dropdownOptions()}
      </NavBarCollapse>
      <TextWrapper>
        {!isLoading && session ? (
          <>
            <ProfileInfoWrapper
              onClick={(e) => {
                e.preventDefault();
                setIsOpenCollapse(!isOpenCollapse);
              }}
            >
              <NavBarText>Hola, {session.user.name}</NavBarText>
              <UserImage src={getImageProfile()} />
            </ProfileInfoWrapper>
            <NavBarCollapse isOpen={isOpenCollapse}>
              {dropdownOptions()}
            </NavBarCollapse>
          </>
        ) : (
          <>
            {isLoading ? (
              <SpinnerLoader isDesktop={true} />
            ) : (
              <>
                <Link href="/deckPrice">
                  <LinkTo>
                    <NavBarText>Cotiza tu Deck</NavBarText>
                  </LinkTo>
                </Link>
                <NavBarText onClick={() => router.push("/login")}>
                  Inicia sesión
                </NavBarText>
              </>
            )}
          </>
        )}
      </TextWrapper>
    </Wrapper>
  );
};

export default NavBar;
