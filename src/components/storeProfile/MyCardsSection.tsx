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
import { getAllUniqueCardsById } from "../../redux/modules/storeCards";

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

  const renderModal = () => (
    <Modal
      isVisible={isVisibleModal}
      onClose={() => {
        setCardInfo(null);
        setIsVisibleModal(false);
      }}
    >
      <ModalImageWrapper>
        <ModalImage src={cardInfo && cardInfo.image} />
      </ModalImageWrapper>
      <ModalFoundByTitle>{cardInfo.name}</ModalFoundByTitle>
      <ModalFoundByTitle>Precio:</ModalFoundByTitle>
      <ModalFoundBy>{cardInfo.price}</ModalFoundBy>
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
