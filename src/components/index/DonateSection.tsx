import { AnotherDarkMagician, AnotherDarkMagicianDesk, DonateButton, DonateImageText, DonateSectionImage, DonationDescription, DonationTextWrapper, DonationTitle } from "../../styles/index/MainPage";

const DonateSection = () => (
    <DonateSectionImage background="/assets/GirlMagicianChocoBlue.png">
        <DonateImageText>
            <AnotherDarkMagician src="/assets/AnotherDarkMagician.png" />
            <AnotherDarkMagicianDesk src="/assets/AnotherDarkMagicianDesk.png" />
            <DonationTextWrapper>
                <DonationTitle>¡Apoyanos para seguir desarrollando!</DonationTitle>
                <DonationDescription>
                    Somos 2 fanáticos de Yugioh! que queremos crear nuevas
                    herramientas para mejorar nuestra experiencia de juego, tu apoyo nos ayudará a que 
                    sigamos inventando herramientas funcionales y divertidas para la comunidad. 
                </DonationDescription>
                <DonateButton>Yo si valoro su esfuerzo XD</DonateButton>
            </DonationTextWrapper>
        </DonateImageText>
    </DonateSectionImage>
);

export default DonateSection;