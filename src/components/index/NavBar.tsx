// @ts-nocheck
import {
  CollapseOption,
  HaamburgerImage,
  NavBarCollapse,
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
import { useSession, signOut } from 'next-auth/client'
import socket, { disconnectSocket, initiateSocket } from "../../config/socketConfig";

const NavBar = () => {
  const router = useRouter();
  const [session, isLoading] = useSession();
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  const dropdownOptions = () =>
    session ? (
      <>
        <CollapseOption onClick={() => session && session.user.role === 'client' ? router.push('/profile') : router.push('/storeProfile')}> Mi perfil </CollapseOption>
        <CollapseOption onClick={() => router.push('/uniqueCardPrice')}>Búsqueda de cartas</CollapseOption>
        <CollapseOption onClick={() => router.push('/onSale')}>Ahora en venta</CollapseOption>
        {session && session.user.role === 'store' ? <CollapseOption onClick={() => router.push('/wantedCards')}>Cartas que están buscando</CollapseOption> : <></> }
        {session && session.user.role === 'store' ? <CollapseOption onClick={() => router.push('/storeProfile/editStoreProfile')}>Editar información</CollapseOption> : <></> }
        <CollapseOption onClick={() => router.push('/deckPrice')}>{session && session.user.role === 'store' ? 'Arma tu base' : 'Arma tu deck' } </CollapseOption>
        <CollapseOption onClick={() => {
          disconnectSocket();
          signOut({ callbackUrl: process.env.NEXT_PUBLIC_URL_WEB 
          })}}>Salir</CollapseOption>
      </>
    ) : (
      <>
        <CollapseOption onClick={() => router.push('/login')}> Acceder </CollapseOption>
        <CollapseOption onClick={() => router.push('/uniqueCardPrice')}>Búsqueda de cartas</CollapseOption>
        <CollapseOption onClick={() => router.push('/deckPrice')}> Cotizar deck </CollapseOption>
      </>
    );
    const connectToSocket = async () => {
      if (session && !socket) {
        const { user } = session;
        const message = initiateSocket(user);
      }
     
    }
    useEffect(() => {
      connectToSocket();
    }, [socket]);
  return (
    <Wrapper>
      <Link href="/">
        <LinkTo>Cards Seeker!</LinkTo>
      </Link>
      <HaamburgerImage
        alt={isLoading === false && session ? "img-profile" : "hamburger icon"}
        src={isLoading === false && session ? session.user.image : "/assets/hamburger.png"}
        style={isLoading === false && session ? { width: "40px", height: "40px" } : {}}
        onClick={async (e) => {
          e.preventDefault();
          setIsOpenCollapse(!isOpenCollapse);
        }}
      />
      <NavBarCollapse isOpen={isOpenCollapse}>
        {dropdownOptions()}
      </NavBarCollapse>
      <TextWrapper>
        {session ? (
          <>
            <ProfileInfoWrapper
              onClick={(e) => {
                e.preventDefault();
                setIsOpenCollapse(!isOpenCollapse);
              }}
            >
              <NavBarText>Hola, {session.user.name}</NavBarText>
              <UserImage src={session.user.image} />
            </ProfileInfoWrapper>
            <NavBarCollapse isOpen={isOpenCollapse}>
              {dropdownOptions()}
            </NavBarCollapse>
          </>
        ) : (
          <>
            <Link href="/deckPrice">
              <LinkTo>
                <NavBarText>Cotiza tu Deck</NavBarText>
              </LinkTo>
            </Link>
            <NavBarText onClick={() => router.push('/login')}>Inicia sesión</NavBarText>
          </>
        )}
      </TextWrapper>
    </Wrapper>
  );
};

export default NavBar;
