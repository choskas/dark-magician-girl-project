import { HaamburgerImage, NavBarText, TextWrapper, Wrapper } from "../../styles/navbar/NavBar";
import Link from 'next/link';
import { LinkTo } from "../../styles/common/Link";

const NavBar = () => (
<Wrapper>
    <Link href="/">
    <LinkTo>YugiCards!</LinkTo>
    </Link>
    <HaamburgerImage src="/assets/hamburger.png"/>
    <TextWrapper>
        <Link href="/deckPrice">
        <LinkTo>
            <NavBarText>Cotiza tu Deck</NavBarText>
        </LinkTo>
        </Link>
        <NavBarText>Donativos</NavBarText>
    </TextWrapper>
</Wrapper>
)

export default NavBar;
