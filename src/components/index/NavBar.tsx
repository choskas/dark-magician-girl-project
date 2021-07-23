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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { logOut } from "../../redux/modules/auth";
import { useRouter } from "next/router";

const NavBar = () => {
  const user = useSelector((state: any) => state.auth.userData);
  const dispatch = useDispatch();
  const router = useRouter();
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  const logout = () => {
    dispatch(logOut());
  };
  const dropdownOptions = (isLoggedIn = false) =>
    isLoggedIn ? (
      <>
        <CollapseOption> Mi perfil </CollapseOption>
        <CollapseOption onClick={() => logout()}>Salir</CollapseOption>
      </>
    ) : (
      <>
        <CollapseOption onClick={() => router.push('/login')}> Acceder </CollapseOption>
        <CollapseOption onClick={() => router.push('/deckPrice')}> Cotizar deck </CollapseOption>
      </>
    );
  return (
    <Wrapper>
      <Link href="/">
        <LinkTo>YugiCards!</LinkTo>
      </Link>
      <HaamburgerImage
        src={user.picture ? user.picture : "/assets/hamburger.png"}
        style={user.picture ? { width: "40px", height: "40px" } : {}}
        onClick={(e) => {
          e.preventDefault();
          setIsOpenCollapse(!isOpenCollapse);
        }}
      />
      <NavBarCollapse isOpen={isOpenCollapse}>
        {user.email ? dropdownOptions() : dropdownOptions(false)}
      </NavBarCollapse>
      <TextWrapper>
        {user.email ? (
          <>
            <ProfileInfoWrapper
              onClick={(e) => {
                e.preventDefault();
                setIsOpenCollapse(!isOpenCollapse);
              }}
            >
              <NavBarText>Hola, {user.userName}</NavBarText>
              <UserImage src={user.picture} />
            </ProfileInfoWrapper>
            <NavBarCollapse isOpen={isOpenCollapse}>
              {user.email ? dropdownOptions() : dropdownOptions(false)}
            </NavBarCollapse>
          </>
        ) : (
          <>
            <Link href="/deckPrice">
              <LinkTo>
                <NavBarText>Cotiza tu Deck</NavBarText>
              </LinkTo>
            </Link>
            <NavBarText>Donativos</NavBarText>
          </>
        )}
      </TextWrapper>
    </Wrapper>
  );
};

export default NavBar;
