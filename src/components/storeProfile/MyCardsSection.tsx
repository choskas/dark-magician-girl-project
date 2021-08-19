// @ts-nocheck
import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllWantedCardsById,
  selectedCardFunc,
} from "../../redux/modules/wantedCards";
import Link from "next/link";
import {
  BigTitle,
  ModalContainerUniqueCard,
  ModalImage,
  ModalImageWrapper,
  NoDecksMessage,
} from "../../styles/profile/myDecks";
import {
  CardsWrapper,
  ModalFoundBy,
  ModalFoundByContainer,
  ModalFoundByTitle,
  SearchedCardContainer,
  SearchedCardImage,
  SearchedIcon,
} from "../../styles/profile/searchedCardsStyles";
import Modal from "../common/Modal";
import {
  deleteUniqueCard,
  getAllUniqueCardsById,
} from "../../redux/modules/storeCards";
import LoginButton from "../common/LoginButton";

interface MyCardsSectionProps {
  cards: any;
}

const MyCardsSection = ({ cards }: MyCardsSectionProps) => {
  const dispatch = useDispatch();
  const [session, loading] = useSession();
  const [cardInfo, setCardInfo] = useState(null);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const getCardsById = async (id) => {
    await dispatch(getAllUniqueCardsById(id));
  };

  const deleteCardFunc = async (data) => {
    await dispatch(deleteUniqueCard(data));
    setIsVisibleModal(false);
    await getCardsById({ userId: session.user.id });
  };

  const renderModal = () => (
    <Modal
      isVisible={isVisibleModal}
      onClose={() => {
        setCardInfo(null);
        setIsVisibleModal(false);
      }}
    >
      <ModalContainerUniqueCard>
        <ModalImageWrapper>
          <ModalImage src={cardInfo && cardInfo.image} />
        </ModalImageWrapper>
        <ModalFoundByTitle>{cardInfo.name}</ModalFoundByTitle>
        <ModalFoundByTitle>Precio:</ModalFoundByTitle>
        <ModalFoundBy>{cardInfo.price}</ModalFoundBy>
        <LoginButton
          onClick={() => {
            deleteCardFunc({
              cardId: cardInfo.cardId,
              userId: session.user.id,
            });
          }}
        >
          Borrar carta
        </LoginButton>
      </ModalContainerUniqueCard>
    </Modal>
  );

  useEffect(() => {
    if (!loading) {
      // @ts-ignore
      getCardsById({ userId: session.user.id });
    }
  }, [loading]);

  return (
    <>
      <BigTitle>Cartas</BigTitle>
      {cards.length >= 1 ? (
        <CardsWrapper>
          {cards.map((item) => (
            <SearchedCardContainer
              onClick={() => {
                setCardInfo(item);
                setIsVisibleModal(true);
              }}
              title={item.isFound ? "¡Encontrada!" : "¡Buscando!"}
            >
              <SearchedCardImage src={item.image} alt={`alt ${item.image}`} />
            </SearchedCardContainer>
          ))}
          {cardInfo && renderModal()}
        </CardsWrapper>
      ) : (
        <NoDecksMessage>No tienes ninguna carta.</NoDecksMessage>
      )}
    </>
  );
};

export default MyCardsSection;
