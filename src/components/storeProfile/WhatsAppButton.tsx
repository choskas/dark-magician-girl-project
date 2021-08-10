import { WhatsappButtonStyle, WhatsAppImage } from "../../styles/storeProfile";

interface WhatsAppButtonProps {
    phoneNumber: string;
    cardName: string;
}

const WhatsAppButton = ({phoneNumber, cardName}) => {
  return (
    <>
      <WhatsappButtonStyle target="_blank" href={`https://wa.me/${phoneNumber}?text=Me%20gustaría%20saber%20el%20precio%20de%20la%20carta%20${cardName}`}>
        <WhatsAppImage src="/icons/whatsapp.png" />
      </WhatsappButtonStyle>
    </>
  );
};

export default WhatsAppButton;
