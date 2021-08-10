import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWantedCardsById } from "../../redux/modules/wantedCards";
import Link from "next/link";
import {
  BigTitle,
  ModalImage,
  ModalImageWrapper,
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

const SearchedCardsSection = () => {
  const dispatch = useDispatch();
  const cards = useSelector(
    (state: any) => state.wantedCards.allWantedCardsById
  );
  const [session, loading] = useSession();
  const [cardInfo, setCardInfo] = useState(null);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const getCardsById = async (id) => {
    await dispatch(getAllWantedCardsById(id));
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
      <ModalFoundByTitle>
        Estatús: 
      </ModalFoundByTitle>
      <ModalFoundBy>
      {cardInfo.isFound ? "Encontrada" : "Buscando"}
      </ModalFoundBy>
      {cardInfo.isFound && (
        <>
          <ModalFoundByTitle>Encontrada por:</ModalFoundByTitle>
          <ModalFoundByContainer>
            {cardInfo.foundBy.map((item) => (
              <Link href={`/storeProfile/${item.foundById}`}>
                <ModalFoundBy>{item.foundByName}</ModalFoundBy>
              </Link>
            ))}
          </ModalFoundByContainer>
        </>
      )}
    </Modal>
  );

  useEffect(() => {
    if (session) {
      // @ts-ignore
      getCardsById({ userId: session.user.id });
    }
  }, [session]);

  return (
    <>
      <BigTitle>Mis busquedas</BigTitle>
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
    </>
  );
};

export default SearchedCardsSection;
