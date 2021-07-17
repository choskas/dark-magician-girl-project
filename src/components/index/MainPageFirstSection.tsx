import { DarkMagicianGirl, MainImage, MainTitle, StartButton, Subtitle } from "../../styles/index/MainPage";

const MainPageFirstSection = () => (
    <MainImage background="radial-gradient(50% 50% at 50% 48.99%, rgba(0, 0, 0, 0) 5.73%, rgba(3, 41, 96, 0.5) 100%), url(/assets/BGCards.png)">
        <MainTitle>YugiCards!</MainTitle>
        <Subtitle>¡Cotizar tu deck nunca 
        fue tan facil!</Subtitle>
        <StartButton>¡Comenzar!</StartButton>
        <DarkMagicianGirl src="/assets/darkMagicianGirl.png" />
    </MainImage>
);

export default MainPageFirstSection;
