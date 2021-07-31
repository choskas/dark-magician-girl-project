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
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from 'next-auth/client'

const NavBar = () => {
  const router = useRouter();
  const [session, isLoading] = useSession();
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  const dropdownOptions = (isLoggedIn = false) =>
    isLoggedIn ? (
      <>
        <CollapseOption onClick={() => router.push('/profile')}> Mi perfil </CollapseOption>
        <CollapseOption onClick={() => router.push('/uniqueCardPrice')}>¿Cuánto cuesta esta carta?</CollapseOption>
        <CollapseOption onClick={() => signOut({ callbackUrl: process.env.NEXT_PUBLIC_URL_WEB })}>Salir</CollapseOption>
      </>
    ) : (
      <>
        <CollapseOption onClick={() => router.push('/login')}> Acceder </CollapseOption>
        <CollapseOption onClick={() => router.push('/uniqueCardPrice')}>¿Cuánto cuesta esta carta?</CollapseOption>
        <CollapseOption onClick={() => router.push('/deckPrice')}> Cotizar deck </CollapseOption>
      </>
    );
  return (
    <Wrapper>
      <Link href="/">
        <LinkTo>YugiCards!</LinkTo>
      </Link>

      <HaamburgerImage
        src={isLoading === false && session ? session.user.image : "/assets/hamburger.png"}
        style={isLoading === false && session ? { width: "40px", height: "40px" } : {}}
        onClick={(e) => {
          e.preventDefault();
          setIsOpenCollapse(!isOpenCollapse);
        }}
      />
      <NavBarCollapse isOpen={isOpenCollapse}>
        {session ? dropdownOptions(true) : dropdownOptions(false)}
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
              {session.user ? dropdownOptions(true) : dropdownOptions(false)}
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
