import Link from "next/link";
import { useState } from "react";
import { deleteDeck } from "../../redux/modules/deck";
import { TitleContainer } from "../../styles/login/login";
import {
  BigTitleDuelist,
  BigTitleContainer,
  Card,
  DeckPrice,
  DeckWrapper,
  DeleteContainer,
  DeletButton,
  ModalImage,
  ModalImageWrapper,
  ModalWrapper,
  NoDecksMessage,
  Title,
  TitleWrapper,
  GoToText,
  AllDecksWrapper,
} from "../../styles/profile/myDecks";
import {
  CardArchetype,
  CardAtk,
  CardAtkDefWrapper,
  CardDef,
  CardDescription,
  CardDescriptionWrapper,
  CardIcon,
  CardName,
  DrawerText,
  FindThisBaseButtonContainer,
  FoundBaseText,
  MyDeckSectionContainer,
  StoresDrawerLink,
  StoresDrawerText,
} from "../../styles/uniqueCardPrice/CardInformation";
import BottomDrawer from "../common/BottomDrawer";
import LoginButton from "../common/LoginButton";
import Modal from "../common/Modal";

interface MyDeckSectionProps {
  session: object;
  decks: Array<any>;
  addAndGetBases: Function;
  router: Function;
  deleteAndGetDecks: Function;
}

const MyDecksSection = ({
  session,
  decks,
  addAndGetBases,
  router,
  deleteAndGetDecks,
}: MyDeckSectionProps) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [cardInfo, setCardInfo] = useState(null);
  const [isOpenStoresDrawer, setIsOpenStoresDrawer] = useState(false);
  const [storeInfo, setStoreInfo] = useState([]);

  const renderDecks = () => {
    if (decks.length > 0) {
      return decks.map((item, key) => (
        <AllDecksWrapper>
          <TitleContainer>
            <TitleWrapper>
              <Title>{item.deckName}</Title>
              <DeckPrice>${item.deckPrice}</DeckPrice>
            </TitleWrapper>
            <DeleteContainer>
              <DeletButton
                src="/assets/Close.png"
                onClick={() => deleteAndGetDecks({ _id: item._id })}
              />
            </DeleteContainer>
          </TitleContainer>
          <DeckWrapper>
            {item.deck.map((card, key) => (
              <Card
                key={`card-${key}`}
                onClick={() => {
                  setIsVisibleModal(true);
                  setCardInfo(card);
                }}
                src={card.cardImageSmall}
              />
            ))}
            <Modal
              isVisible={isVisibleModal}
              onClose={() => setIsVisibleModal(false)}
            >
              {cardInfo && (
                <ModalWrapper>
                  <ModalImageWrapper>
                    <ModalImage src={cardInfo.cardImage} />
                  </ModalImageWrapper>
                  <CardDescriptionWrapper color="#fff">
                    <CardName>{cardInfo.name}</CardName>
                    <CardAtkDefWrapper>
                      <CardAtk>
                        <CardIcon src="/assets/swords.png" />
                        {cardInfo.atk}
                      </CardAtk>
                      <CardDef>
                        <CardIcon src="/assets/shield.png" />
                        {cardInfo.def}
                      </CardDef>
                    </CardAtkDefWrapper>
                    <CardArchetype>
                      Arquetipo: {cardInfo.archetype}
                    </CardArchetype>
                    <CardDescription>
                      Description: <br /> {cardInfo.desc}
                    </CardDescription>
                  </CardDescriptionWrapper>
                </ModalWrapper>
              )}
            </Modal>
          </DeckWrapper>
          {item.isFound && (
            <>
              <FoundBaseText>
                Han encontrado tu base!, a continuacion puedes elegir ver los
                detalles de las tiendas que lo encontraron dando click en "Ver
                tiendas"
              </FoundBaseText>
              <FindThisBaseButtonContainer>
                <LoginButton
                  onClick={() => {
                    setIsOpenStoresDrawer(!isOpenStoresDrawer);
                    setStoreInfo(item.foundBy);
                  }}
                >
                  Ver tiendas
                </LoginButton>
              </FindThisBaseButtonContainer>
            </>
          )}
          <FindThisBaseButtonContainer>
            <LoginButton
              onClick={() => addAndGetBases({ _id: item._id }, item.isWanted)}
            >
              {item.isWanted ? "Dejar de buscar" : "Buscar esta base"}
            </LoginButton>
          </FindThisBaseButtonContainer>
        </AllDecksWrapper>
      ));
    } else {
      return (
        <>
          <Link href="/deckPrice">
            <GoToText>Ir a crear Deck</GoToText>
          </Link>
        </>
      );
    }
  };
  return (
    <MyDeckSectionContainer>
      <BigTitleContainer>
        <BigTitleDuelist>Mis Decks</BigTitleDuelist>
      </BigTitleContainer>
      {renderDecks()}
      <BottomDrawer
        isOpen={isOpenStoresDrawer}
        onClose={() => setIsOpenStoresDrawer(false)}
      >
        <DrawerText>
          Estas tiendas han encontrado tu deck, da click en su nombre para
          obtener mas informaci??on de contacto:{" "}
        </DrawerText>
        {storeInfo.map((store, key) => (
          <StoresDrawerText key={`store-${key}`}>
            Tienda:{" "}
            <StoresDrawerLink href={`/storeProfile/${store.foundById}`}>
              {store.foundByName}
            </StoresDrawerLink>{" "}
            por ${store.price}
          </StoresDrawerText>
        ))}
      </BottomDrawer>
    </MyDeckSectionContainer>
  );
};

export default MyDecksSection;
