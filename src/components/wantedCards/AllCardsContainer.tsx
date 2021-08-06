import { useState } from "react";
import {
  AllImagesContainer,
  CardImage,
  CardInfoDescription,
  CardInfoImage,
  CardInfoModalContainer,
} from "../../styles/wantedCards/allCardsContainer";
import LoginButton from "../common/LoginButton";
import Modal from "../common/Modal";

interface AllCardsContainerProps {
  allCards: Array<any>;
  foundCard: Function;
}

const AllCardsContainer = ({ allCards, foundCard }: AllCardsContainerProps) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [cardInfo, setCardInfo] = useState(null);
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
          onClose={() => setIsVisibleModal(false)}
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
            <LoginButton
              onClick={async () => {
                await foundCard({
                  userId: cardInfo.userId,
                  rarityCode: cardInfo.card.rarityCode,
                });
                setIsVisibleModal(false);
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
