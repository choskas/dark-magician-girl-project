// @ts-nocheck
import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteWantedCard,
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
  ModalText,
  SearchedCardContainer,
  SearchedCardImage,
  SearchedIcon,
} from "../../styles/profile/searchedCardsStyles";
import Modal from "../common/Modal";
import LoginButton from "../common/LoginButton";

interface SearchedCardsSectionProps {
  cards: any;
}

const SearchedCardsSection = ({ cards }: SearchedCardsSectionProps) => {
  const dispatch = useDispatch();
  const [session, loading] = useSession();
  const [cardInfo, setCardInfo] = useState(null);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const getCardsById = async (id) => {
    await dispatch(getAllWantedCardsById(id));
  };

  const deleteCardFunc = async (data: any) => {
    await dispatch(deleteWantedCard(data));
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
        <ModalFoundByTitle>Estatús:</ModalFoundByTitle>
        <ModalFoundBy>
          {cardInfo.isFound ? "Encontrada" : "Buscando"}
        </ModalFoundBy>
        {cardInfo.isFound && (
          <>
            <ModalFoundByTitle>Encontrada por:</ModalFoundByTitle>
            <ModalFoundByContainer>
              {cardInfo.foundBy.map((item) => (
                <Link href={`/storeProfile/${item.foundById}`}>
                  <ModalFoundBy
                    onClick={() => dispatch(selectedCardFunc(cardInfo))}
                  >
                    {item.foundByName} por ${item.price}
                  </ModalFoundBy>
                </Link>
              ))}
            </ModalFoundByContainer>
          </>
        )}
        <LoginButton
          onClick={() =>
            deleteCardFunc({
              userId: session.user.id,
              rarityCode: cardInfo.rarityCode,
            })
          }
        >
          Borrar carta
        </LoginButton>
      </ModalContainerUniqueCard>
    </Modal>
  );

  useEffect(() => {
    if (session) {
      getCardsById({ userId: session.user.id });
    }
  }, [session]);

  return (
    <>
      <BigTitle>Mis busquedas</BigTitle>
      {cards.length !== 0 ? (
        <CardsWrapper>
          {cards &&
            cards.map((item) => (
              <SearchedCardContainer
                onClick={() => {
                  setCardInfo(item);
                  setIsVisibleModal(true);
                }}
                title={item.isFound ? "¡Encontrada!" : "¡Buscando!"}
              >
                <SearchedCardImage src={item.image} alt={`alt ${item.image}`} />
                <SearchedIcon
                  src={
                    item.isFound ? "/icons/comprobado.png" : "/icons/loupe.png"
                  }
                />
              </SearchedCardContainer>
            ))}
          {cardInfo && renderModal()}
        </CardsWrapper>
      ) : (
        <NoDecksMessage>No tienes busquedas aun.</NoDecksMessage>
      )}
    </>
  );
};

export default SearchedCardsSection;
