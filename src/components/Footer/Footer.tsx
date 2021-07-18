import { FooterStyle, FooterSubtitle, FooterTextWrapper, FooterTitle, WitchcraftImage, WitchcraftTextWrapper } from '../../styles/footer/Footer';

const Footer = () => (
    <FooterStyle background="/assets/WitchcrafterCreationPink.png" >
        <WitchcraftTextWrapper>
            <FooterTextWrapper>
                <FooterTitle>
                    YugiCards!
                </FooterTitle>
                <FooterSubtitle>
                    By Choskas & Migueluck
                </FooterSubtitle>
            </FooterTextWrapper>
            <WitchcraftImage src="/assets/witchcraft.png"/>
        </WitchcraftTextWrapper>
    </FooterStyle>
);

export default Footer;