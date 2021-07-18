import { Dot, DotSubtitle, DotTitle, MarkWord, SectionTwoImage, TitleDotContainer, TitleDotWrapper } from "../../styles/index/MainPage";

const WhatToDoSection = () => (
    <SectionTwoImage background="/assets/DarkMagicalCirclePink.png">
        <TitleDotWrapper>
        <TitleDotContainer>
            <Dot />
            <DotTitle>Busca!</DotTitle>
        </TitleDotContainer>
        <DotSubtitle>¡Da de alta tu Deck ideal en <MarkWord fontSize='32px'>YugiCards!</MarkWord> </DotSubtitle>
        </TitleDotWrapper>
        <TitleDotWrapper>
        <TitleDotContainer>
            <Dot />
            <DotTitle>Compara!</DotTitle>
        </TitleDotContainer>
        <DotSubtitle width="90%">Compara los precios de las cartas que has dado de alta en <MarkWord fontSize='32px'>YugiCards!</MarkWord> </DotSubtitle>
        </TitleDotWrapper>
        <TitleDotWrapper>
        <TitleDotContainer>
            <Dot />
            <DotTitle>Selecciona!</DotTitle>
        </TitleDotContainer>
        <DotSubtitle width="90%">Escoge tu mejor opción para comprar tus cartas favoritas usando <MarkWord fontSize='32px'>YugiCards!</MarkWord> </DotSubtitle>
        </TitleDotWrapper>
    </SectionTwoImage>
);

export default WhatToDoSection;