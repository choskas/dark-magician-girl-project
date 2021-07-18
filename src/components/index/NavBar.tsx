import { HaamburgerImage, NavBarText, TextWrapper, Wrapper } from "../../styles/navbar/NavBar";

const NavBar = () => (
<Wrapper>
    YugiCards!
    <HaamburgerImage src="/assets/hamburger.png"/>
    <TextWrapper>
        <NavBarText>Cotiza tu Deck</NavBarText>
        <NavBarText>Donativos</NavBarText>
    </TextWrapper>
</Wrapper>
)

export default NavBar;
