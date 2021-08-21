import Link from "next/link";
import { LinkTo } from "../../styles/common/Link";
import {
  FooterIcon,
  FooterIconWrapper,
  FooterPrivacyLink,
  FooterStyle,
  FooterSubtitle,
  FooterTextWrapper,
  FooterTitle,
  WitchcraftImage,
  WitchcraftImageDesk,
  WitchcraftTextWrapper,
} from "../../styles/footer/Footer";

const Footer = () => (
  <FooterStyle background="/assets/WitchcrafterCreationPink.png">
    <WitchcraftTextWrapper>
      <FooterTextWrapper>
        <FooterIconWrapper>
          <FooterIcon src="/assets/facebook.png" />
          <FooterIcon src="/assets/instagram.png" />
        </FooterIconWrapper>
        <FooterTitle>Cards Seeker!</FooterTitle>
        <FooterSubtitle>By Choskas & Migueluck</FooterSubtitle>
        <Link href="/privacyNotice">
          <LinkTo>
            <FooterPrivacyLink>Aviso de privacidad</FooterPrivacyLink>
          </LinkTo>
        </Link>
      </FooterTextWrapper>
      <WitchcraftImage src="/assets/witchcraft.png" />
      <WitchcraftImageDesk src="/assets/witchcraftDesk.png" />
    </WitchcraftTextWrapper>
  </FooterStyle>
);

export default Footer;
