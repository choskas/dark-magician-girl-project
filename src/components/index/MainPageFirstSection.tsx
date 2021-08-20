import Link from "next/link";
import { LinkTo } from "../../styles/common/Link";
import {
  CardFrameVertical,
  DarkMagician,
  DarkMagicianGirl,
  MainImage,
  MainImageDesktop,
  MainTitle,
  MainTitleDesktop,
  MainWrapperDesktop,
  StartButton,
  StartButtonDesktop,
  Subtitle,
  SubtitleDesktop,
} from "../../styles/index/MainPage";

const MainPageFirstSection = () => (
  <>
    <MainWrapperDesktop>
      <DarkMagician />
      <CardFrameVertical />
      <MainImageDesktop background="radial-gradient(50% 50% at 50% 48.99%, rgba(0, 0, 0, 0) 5.73%, rgba(3, 41, 96, 0.5) 100%), url(/assets/BGCards.png)">
        <MainTitleDesktop>Cards Seeker!</MainTitleDesktop>
        <SubtitleDesktop>¡Cotizar tu deck nunca fue tan facil!</SubtitleDesktop>
        <Link href="/deckPrice">
          <LinkTo>
            <StartButtonDesktop>¡Comenzar!</StartButtonDesktop>
          </LinkTo>
        </Link>
      </MainImageDesktop>
    </MainWrapperDesktop>
    <MainImage background="radial-gradient(50% 50% at 50% 48.99%, rgba(0, 0, 0, 0) 5.73%, rgba(3, 41, 96, 0.5) 100%), url(/assets/BGCards.png)">
      <MainTitle>Cards Seeker!</MainTitle>
      <Subtitle>¡Cotizar tu deck nunca fue tan facil!</Subtitle>
      <Link href="/deckPrice">
        <LinkTo>
          <StartButton>¡Comenzar!</StartButton>
        </LinkTo>
      </Link>
      <DarkMagicianGirl src="/assets/darkMagicianGirl.png" />
    </MainImage>
  </>
);

export default MainPageFirstSection;
