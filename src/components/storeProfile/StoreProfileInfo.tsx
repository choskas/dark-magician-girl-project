import { useState } from "react";
import { NoDecksMessage } from "../../styles/profile/myDecks";
import {
  MainInfo,
  StoreMainInfoCardImage,
  MainInfoContainer,
  StoreMainInfoModalCardName,
  StoreMainInfoModalCardRarity,
  StoreMainInfoModalContainer,
  StoreMainInfoModalImage,
  StoreMainInfoModalImageContainer,
  StoreMainInfoSocialContainer,
  StoreMainInfoSocialImage,
  MainInfoSubtitle,
  MainInfoTitle,
  StoreMainInfoUniqueCardsContainer,
  ProfileImage,
  ProfileImageContainer,
  StoreProfileInfoContainer,
  ProfileTitle,
  StoreMainInfoUniqueCardsContainerModal,
  StoreMainInfoSocialLink,
  StoreMainInfoRarityCode,
  StoreMainInfoImageAndCodeContainer,
} from "../../styles/storeProfile/storeProfileInfo";
import Modal from "../common/Modal";
interface StoreProfileInfoProps {
  storeInfo: any;
  storeUniqueCards: Array<any>;
  storeDeckBases: Array<any>;
}

const StoreProfileInfo = ({ storeInfo, storeUniqueCards, storeDeckBases }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isVisibleModalBases, setIsVisibleModalBases] = useState(false);
  const [cardInfo, setCardInfo] = useState(null);
  const [deckBaseInfo, setDeckBaseInfo] = useState(null);
  return (
    <StoreProfileInfoContainer>
      <ProfileImageContainer>
        <ProfileImage
          src={
            storeInfo.image ? storeInfo.image : "/assets/darkMagicianChoco.jpeg"
          }
        />
      </ProfileImageContainer>
      <ProfileTitle>
        {storeInfo.storeName ? storeInfo.storeName : "Unknown"}
      </ProfileTitle>
      <MainInfoContainer>
        <MainInfo>
          <MainInfoTitle>Cartas</MainInfoTitle>
          <MainInfoSubtitle>{storeUniqueCards.length}</MainInfoSubtitle>
        </MainInfo>
        <MainInfo>
          <MainInfoTitle>Bases</MainInfoTitle>
          <MainInfoSubtitle>
            {storeDeckBases && storeDeckBases.length}
          </MainInfoSubtitle>
        </MainInfo>
      </MainInfoContainer>
      <StoreMainInfoSocialContainer>
        {storeInfo.contact.facebookLink && (
          <StoreMainInfoSocialLink
            target="_blank"
            href={storeInfo.contact.facebookLink}
          >
            <StoreMainInfoSocialImage src="/assets/facebook.png" />
          </StoreMainInfoSocialLink>
        )}
        {storeInfo.contact.instagramLink && (
          <StoreMainInfoSocialLink
            target="_blank"
            href={storeInfo.contact.instagramLink}
          >
            <StoreMainInfoSocialImage src="/assets/instagram.png" />
          </StoreMainInfoSocialLink>
        )}
      </StoreMainInfoSocialContainer>
      <MainInfoTitle>Cartas disponibles</MainInfoTitle>
      <StoreMainInfoUniqueCardsContainer>
        {storeUniqueCards.map((item) => (
          <StoreMainInfoCardImage
            onClick={() => {
              setCardInfo(item);
              setIsVisibleModal(true);
            }}
            src={item.image}
            alt={`alt ${item.image}`}
          />
        ))}
      </StoreMainInfoUniqueCardsContainer>
      <MainInfoTitle>Bases disponibles</MainInfoTitle>
      <StoreMainInfoUniqueCardsContainer>
        {storeDeckBases ? (
          storeDeckBases.map((item) => (
            <StoreMainInfoCardImage
              onClick={() => {
                setDeckBaseInfo(item);
                setIsVisibleModalBases(true);
              }}
              src={item.mainCard}
              alt={`alt ${item.mainCard}`}
            />
          ))
        ) : (
          <NoDecksMessage>No hay bases disponibles.</NoDecksMessage>
        )}
      </StoreMainInfoUniqueCardsContainer>
      {cardInfo && (
        <Modal
          isVisible={isVisibleModal}
          onClose={() => setIsVisibleModal(false)}
        >
          <StoreMainInfoModalContainer>
            <StoreMainInfoModalImageContainer>
              <StoreMainInfoModalImage
                src={cardInfo.image}
                alt={`alt ${cardInfo.name}`}
              />
            </StoreMainInfoModalImageContainer>
            <StoreMainInfoModalCardName>
              {cardInfo.name}
            </StoreMainInfoModalCardName>
            <StoreMainInfoModalCardRarity>
              Rareza: {cardInfo.rarityCode}
            </StoreMainInfoModalCardRarity>
            <StoreMainInfoModalCardRarity>
              Precio: ${cardInfo.price}
            </StoreMainInfoModalCardRarity>
          </StoreMainInfoModalContainer>
        </Modal>
      )}

      {deckBaseInfo && (
        <Modal
          isVisible={isVisibleModalBases}
          onClose={() => setIsVisibleModalBases(false)}
        >
          <StoreMainInfoModalContainer>
            <StoreMainInfoUniqueCardsContainerModal>
              {deckBaseInfo.deck.map((item) => (
                <StoreMainInfoImageAndCodeContainer>
                  <StoreMainInfoCardImage
                    src={item.cardImage}
                    alt={`alt ${item.cardImage}`}
                  />
                  {item.setCode && (
                    <StoreMainInfoRarityCode>
                      {item.setCode}
                    </StoreMainInfoRarityCode>
                  )}
                </StoreMainInfoImageAndCodeContainer>
              ))}
            </StoreMainInfoUniqueCardsContainerModal>
            <StoreMainInfoModalCardName>
              Base: {deckBaseInfo.deckName}
            </StoreMainInfoModalCardName>
            <StoreMainInfoModalCardRarity>
              Precio: ${deckBaseInfo.deckPrice}
            </StoreMainInfoModalCardRarity>
          </StoreMainInfoModalContainer>
        </Modal>
      )}
    </StoreProfileInfoContainer>
  );
};

export default StoreProfileInfo;
