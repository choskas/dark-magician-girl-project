import { useState } from "react";
import { foundBaseSocket, foundCardSocket } from "../../config/socketConfig";
import {
  StoreMainInfoCardImage,
  StoreMainInfoModalCardName,
  StoreMainInfoModalCardRarity,
  StoreMainInfoModalContainer,
  StoreMainInfoUniqueCardsContainerModal,
} from "../../styles/storeProfile/storeProfileInfo";
import {
  AllImagesContainer,
  CardImage,
  CardInfoButtonWrapper,
  CardInfoDescription,
  CardInfoImage,
  CardInfoInputWrapper,
  CardInfoModalContainer,
  IHaveItButtonContainer,
} from "../../styles/wantedCards/allCardsContainer";
import BottomDrawer from "../common/BottomDrawer";
import InputText from "../common/InputText";
import LoginButton from "../common/LoginButton";
import Modal from "../common/Modal";
import Popover from "../common/Popover";

interface AllBasesContainerProps {
  allBases: Array<any>;
  session: any;
  foundBaseFunc: Function;
}

const AllWantedBases = ({
  allBases,
  session,
  foundBaseFunc,
}: AllBasesContainerProps) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isVisiblePriceDrawer, setIsVisiblePriceDrawer] = useState(false);
  const [baseInfo, setBaseInfo] = useState(null);
  const [price, setPrice] = useState(null);
  return (
    <AllImagesContainer>
      {allBases &&
        allBases.map((item) => (
          <CardImage
            onClick={() => {
              setIsVisibleModal(!isVisibleModal);
              setBaseInfo(item);
            }}
            src={item.mainCard}
            alt={`alt ${item.mainCard}`}
          />
        ))}
      {baseInfo && (
        <Modal
          isVisible={isVisibleModal}
          onClose={() => {
            setIsVisibleModal(false);
            setIsVisiblePriceDrawer(false);
          }}
        >
          <CardInfoModalContainer>
            <StoreMainInfoUniqueCardsContainerModal>
              {baseInfo.deck.map((item) => (
                <StoreMainInfoCardImage
                  src={item.cardImage}
                  alt={`alt ${item.cardImage}`}
                />
              ))}
            </StoreMainInfoUniqueCardsContainerModal>
            <StoreMainInfoModalCardName>
              Base: {baseInfo.deckName}
            </StoreMainInfoModalCardName>

            {isVisiblePriceDrawer && (
              <Popover isVisible={isVisiblePriceDrawer}>
                <>
                  <CardInfoInputWrapper>
                    <InputText
                      value={price}
                      placeholder="Tu mejor precio"
                      onChange={(e, value) => {
                        var reg = new RegExp("^[0-9]*$");
                        if (reg.test(value)) {
                          setPrice(value);
                        }
                      }}
                    />
                  </CardInfoInputWrapper>
                  <CardInfoButtonWrapper>
                    <LoginButton
                      onClick={async () => {
                        await foundBaseFunc({
                          _id: baseInfo._id,
                          foundBy: {
                            foundById: session.user.id,
                            foundByName: session.user.storeName,
                            price,
                          },
                        });
                        setIsVisibleModal(false);
                        setIsVisiblePriceDrawer(false);
                        setPrice(null);
                        foundBaseSocket(baseInfo);
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
                        setPrice(null);
                      }}
                    >
                      Cancelar
                    </LoginButton>
                  </CardInfoButtonWrapper>
                </>
              </Popover>
            )}
            <IHaveItButtonContainer>
              <LoginButton
                onClick={async () => {
                  setIsVisiblePriceDrawer(!isVisiblePriceDrawer);
                }}
              >
                ¡Lo tengo!
              </LoginButton>
            </IHaveItButtonContainer>
          </CardInfoModalContainer>
        </Modal>
      )}
    </AllImagesContainer>
  );
};

export default AllWantedBases;
