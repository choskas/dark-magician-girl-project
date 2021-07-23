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
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const NavBar = () => {
  const user = useSelector((state: any) => state.auth.userData);
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  return (
    <Wrapper>
      <Link href="/">
        <LinkTo>YugiCards!</LinkTo>
      </Link>
      <HaamburgerImage
        src={user.picture ? user.picture : '/assets/hamburger.png'}
        style={user.picture ? { width: "40px", height: "40px" } : {}}
        onClick={() => setIsOpenCollapse(!isOpenCollapse)}
      />
      <NavBarCollapse isOpen={isOpenCollapse}>
      <CollapseOption> Mis decks </CollapseOption>
      </NavBarCollapse>
      <TextWrapper>
        {user.email ? (
          <>
          <ProfileInfoWrapper onClick={() => setIsOpenCollapse(!isOpenCollapse)}>
            <NavBarText>Hola, {user.userName}</NavBarText>
            <UserImage src={user.picture} />
          </ProfileInfoWrapper>
          <NavBarCollapse isOpen={isOpenCollapse}> 
            <CollapseOption> Mis decks </CollapseOption>
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
