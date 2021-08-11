import { useState } from "react";
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
} from "../../styles/storeProfile/storeProfileInfo";
import Modal from "../common/Modal";
interface StoreProfileInfoProps {
  storeInfo: any;
  storeUniqueCards: Array<any>;
  storeDeckBases: Array<any>;
}

const StoreProfileInfo = ({ storeInfo, storeUniqueCards, storeDeckBases }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [cardInfo, setCardInfo] = useState(null);
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
        {storeInfo.name ? storeInfo.name : "Unknown"}
      </ProfileTitle>
      <MainInfoContainer>
        <MainInfo>
          <MainInfoTitle>Cartas</MainInfoTitle>
          <MainInfoSubtitle>
            {storeUniqueCards.length}
          </MainInfoSubtitle>
        </MainInfo>
        <MainInfo>
          <MainInfoTitle>Bases</MainInfoTitle>
          <MainInfoSubtitle>{storeDeckBases.length}</MainInfoSubtitle>
        </MainInfo>
      </MainInfoContainer>
      <StoreMainInfoSocialContainer>
          <StoreMainInfoSocialImage src="/assets/facebook.png"/>
          <StoreMainInfoSocialImage src="/assets/instagram.png"/>
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
          </StoreMainInfoModalContainer>
        </Modal>
      )}
    </StoreProfileInfoContainer>
  );
};

export default StoreProfileInfo;
