import { Dot, DotSubtitle, DotTitle, MarkWord, SectionTwoImage, TitleDotContainer } from "../../styles/index/MainPage";

const WhatToDoSection = () => (
    <SectionTwoImage background="/assets/DarkMagicalCirclePink.png">
        <TitleDotContainer>
            <Dot />
            <DotTitle>Busca!</DotTitle>
        </TitleDotContainer>
        <DotSubtitle>¡Da de atla tu Deck ideal en <MarkWord fontSize='32px'>YugiCards!</MarkWord> </DotSubtitle>
        <TitleDotContainer>
            <Dot />
            <DotTitle>Compara!</DotTitle>
        </TitleDotContainer>
        <DotSubtitle width="90%">Compara los precios de las cartas que has dado de alta en <MarkWord fontSize='32px'>YugiCards!</MarkWord> </DotSubtitle>
        <TitleDotContainer>
            <Dot />
            <DotTitle>Selecciona!</DotTitle>
        </TitleDotContainer>
        <DotSubtitle width="90%">Escoge tu mejor opción para comprar tus cartas favoritas usando <MarkWord fontSize='32px'>YugiCards!</MarkWord> </DotSubtitle>
    </SectionTwoImage>
);

export default WhatToDoSection;