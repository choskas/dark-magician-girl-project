import { useState } from "react";
import {
  AllImagesContainer,
  CardImage,
  CardInfoButtonWrapper,
  CardInfoDescription,
  CardInfoImage,
  CardInfoInputWrapper,
  CardInfoModalContainer,
} from "../../styles/wantedCards/allCardsContainer";
import BottomDrawer from "../common/BottomDrawer";
import InputText from "../common/InputText";
import LoginButton from "../common/LoginButton";
import Modal from "../common/Modal";
import Popover from "../common/Popover";

interface AllCardsContainerProps {
  allCards: Array<any>;
  foundCard: Function;
  session: any;
}

const AllCardsContainer = ({ allCards, foundCard, session }: AllCardsContainerProps) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [ isVisiblePriceDrawer ,setIsVisiblePriceDrawer] = useState(false);
  const [cardInfo, setCardInfo] = useState(null);
  const [price, setPrice] = useState(null);
  return (
    <AllImagesContainer>
      {allCards &&
        allCards.map((item) => (
          <CardImage
            onClick={() => {
              setIsVisibleModal(!isVisibleModal);
              setCardInfo(item);
            }}
            src={item.card.image}
            alt={`alt ${item.card.image}`}
          />
        ))}
      {cardInfo && (
        <Modal
          isVisible={isVisibleModal}
          onClose={() => {
            setIsVisibleModal(false);
            setIsVisiblePriceDrawer(false);
          }}
        >
          <CardInfoModalContainer>
            <CardInfoImage
              src={cardInfo.card.image}
              alt={`alt ${cardInfo.card.image}`}
            ></CardInfoImage>
            <CardInfoDescription>
              Nombre: {cardInfo.card.name}
            </CardInfoDescription>
            <CardInfoDescription>
              Rareza: {cardInfo.card.rarityCode}
            </CardInfoDescription>

            {isVisiblePriceDrawer && (
            <Popover isVisible={isVisiblePriceDrawer}>
            <>
         <CardInfoInputWrapper>
             <InputText value={price} placeholder="Tu mejor precio" onChange={(e, value)=>{
               var reg = new RegExp('^[0-9]*$');
               if (reg.test(value)){
                 setPrice(value);
               }
             }} />
             </CardInfoInputWrapper>
             <CardInfoButtonWrapper>
             <LoginButton
             onClick={async () => {
               await foundCard({
                 userId: cardInfo.userId,
                 rarityCode: cardInfo.card.rarityCode,
                 price,
                 foundBy: session.user.id,
                 foundByName: session.user.name,
               });
               setIsVisibleModal(false);
               setIsVisiblePriceDrawer(false);
             }}
           >
             Mandar
           </LoginButton>
           </CardInfoButtonWrapper>
           <CardInfoButtonWrapper>
           <LoginButton
             onClick={async () => {
               setIsVisibleModal(false);
               setIsVisiblePriceDrawer(false);
             }}
           >
             Cancelar
           </LoginButton>
           </CardInfoButtonWrapper>
           </>
            </Popover>
          )}
            <LoginButton
              onClick={async () => {
                setIsVisiblePriceDrawer(!isVisiblePriceDrawer);
              }}
            >
              ¡La tengo!
            </LoginButton>
          </CardInfoModalContainer>
 
        </Modal>
      )}
    </AllImagesContainer>
  );
};

export default AllCardsContainer;
