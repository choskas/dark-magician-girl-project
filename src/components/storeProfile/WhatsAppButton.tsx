import { WhatsappButtonStyle, WhatsAppImage } from "../../styles/storeProfile";

interface WhatsAppButtonProps {
    phoneNumber: string;
    cardName: string;
    selectedBase: any;
    isBase: boolean;
}

const WhatsAppButton = ({phoneNumber, cardName, isBase, selectedBase}: WhatsAppButtonProps) => {
  return (
    <>
      <WhatsappButtonStyle target="_blank" href={isBase ? `https://wa.me/${phoneNumber}?text=Me%20gustaría%20saber%20el%20precio%20de%20la%20base%20${selectedBase}` : `https://wa.me/${phoneNumber}?text=Me%20gustaría%20saber%20el%20precio%20de%20la%20carta%20${cardName}`}>
        <WhatsAppImage src="/icons/whatsapp.png" />
      </WhatsappButtonStyle>
    </>
  );
};

export default WhatsAppButton;
