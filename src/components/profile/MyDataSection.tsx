import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllArchetypesCatalog, updateFavouriteArchetype } from "../../redux/modules/deck";
import { postProfileImage } from "../../redux/modules/storeCards";
import { CancelButton, ConfirmButton } from "../../styles/common/Buttons";
import {
  ModalArchetypeButtonWrapper,
  ModalArchetypeContainer,
  ModalArchetypeInputWrapper,
  ModalArchetypeSubtitle,
  ModalArchetypeTitle,
} from "../../styles/profile/modalArchetype";
import {
  AccountType,
  AccountTypeDuelist,
  MainInfo,
  MainInfoContainer,
  MainInfoSubtitle,
  MainInfoTitle,
  ProfileArchetype,
  ProfileImage,
  ProfileImageContainer,
  ProfilePersonalInformationWrapper,
  ProfileTitle,
} from "../../styles/storeProfile/storeProfileInfo";
import { CardInfoModalArchetypeContainer, CardInfoModalContainer } from "../../styles/wantedCards/allCardsContainer";
import InputText from "../common/InputText";
import LittleLoader from "../common/LittleLoader";
import LoginButton from "../common/LoginButton";
import Popover from "../common/Popover";
import Select from "../common/Select";
import UploadImageButton from "../common/UploadImageButton";
interface MyDataSectionProps {
  session: any;
  cards: any;
  decks: any;
}
const MyDataSection = ({ session, cards, decks }: MyDataSectionProps) => {
  const dispatch = useDispatch();
  const [imageKeyState, setImageKeyState] = useState("darkMagiciansTo.jpeg");
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [selectedArchetype, setSelectedArchetype] = useState('');
  const archetypesCatalog = useSelector(
    (state: any) => state.deck.archetypesCatalog
  );
  const onClickConfirmArchetype = () => {
    // favouriteArchetype
    dispatch(updateFavouriteArchetype({
      userId: session.user.id,
      favouriteArchetype: selectedArchetype,
    }));
    window.location.reload();
  }
  useEffect(() => {
    dispatch(getAllArchetypesCatalog());
    if (session.user.profileImageKey) {
      setImageKeyState(session.user.profileImageKey);
    }
  }, []);
  return (
    <>
      <ProfileImageContainer>
        {imageKeyState ? (
          <ProfileImage
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL_ROOT}/images/${imageKeyState}`}
          />
        ) : (
          <LittleLoader message="Cambianto tu imagen..." />
        )}
      </ProfileImageContainer>
      <ProfilePersonalInformationWrapper>
        <UploadImageButton
          text="Cambiar imagen de perfil"
          getImage={async (file) => {
            setImageKeyState(null);
            var blob = file.slice(0, file.size, file.type);
            const newFile = new File([blob], `duelist-${session.user.id}.png`, {
              type: file.type,
            });
            const formData = new FormData();
            formData.append("profileImage", newFile);
            formData.append("userId", session.user.id);
            formData.append("imageKey", session.user.profileImageKey);
            const response = await dispatch(postProfileImage(formData));
            setTimeout(() => {
              // @ts-ignore
              setImageKeyState(response.imageKey);
            }, 3000);
          }}
        />
        {isVisibleModal && (
          <CardInfoModalArchetypeContainer>
            <Popover width={'90%'} isVisible={isVisibleModal}>     
              <ModalArchetypeContainer>
                <ModalArchetypeTitle>
                  Selecciona tu arquetipo
                </ModalArchetypeTitle>
                <ModalArchetypeSubtitle>
                  Selecciona el arquetipo con el que juegas Yugioh!
                </ModalArchetypeSubtitle>
                <ModalArchetypeInputWrapper>     
                  <Select
                    setValue={setSelectedArchetype}
                    value={selectedArchetype}
                    options={archetypesCatalog.map((item) => {
                      return {
                        name: `${item.archetype_name}`,
                        value: `${item.archetype_name}`,
                      };
                    })}
                    onChange={(e, value) => setSelectedArchetype(value)}
                    placeholder="Arquetipo"
                  />
                </ModalArchetypeInputWrapper>
                <ModalArchetypeButtonWrapper><CancelButton onClick={() => setIsVisibleModal(false)}> No quiero agregar mi arquetipo </CancelButton></ModalArchetypeButtonWrapper>
                <ModalArchetypeButtonWrapper><ConfirmButton onClick={() => onClickConfirmArchetype()}>Agregar arquetipo</ConfirmButton></ModalArchetypeButtonWrapper>
              </ModalArchetypeContainer>
            </Popover>
          </CardInfoModalArchetypeContainer>
        )}
        <ProfileTitle>
          {session.user.name ? session.user.name : "Unknown"}
        </ProfileTitle>
        <ProfileArchetype onClick={() => setIsVisibleModal(!isVisibleModal)}>
          {session.user.favouriteArchetype ? session.user.favouriteArchetype : '"Sin arquetipo"'}
        </ProfileArchetype>
        <MainInfoContainer>
          <MainInfo>
            <MainInfoTitle>Buscando</MainInfoTitle>
            <MainInfoSubtitle>{cards.length}</MainInfoSubtitle>
          </MainInfo>
          <MainInfo>
            <MainInfoTitle>Decks</MainInfoTitle>
            <MainInfoSubtitle>{decks.length}</MainInfoSubtitle>
          </MainInfo>
        </MainInfoContainer>
        <AccountTypeDuelist>
          Cuenta: {session.user.role === "store" ? "Tienda" : "Duelista"}
        </AccountTypeDuelist>
      </ProfilePersonalInformationWrapper>
    </>
  );
};

export default MyDataSection;
