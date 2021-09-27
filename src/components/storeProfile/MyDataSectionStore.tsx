import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postStoreImage } from "../../redux/modules/storeCards";
import {
  AccountType,
  MainInfo,
  MainInfoContainer,
  MainInfoSubtitle,
  MainInfoTitle,
  ProfileBold,
  ProfileImage,
  ProfileImageContainer,
  ProfilePersonalInformationWrapper,
  ProfileStoreName,
  ProfileTitle,
} from "../../styles/storeProfile/storeProfileInfo";
import LittleLoader from "../common/LittleLoader";
import UploadImageButton from "../common/UploadImageButton";
interface MyDataSectionStoreProps {
  session: any;
  cards: any;
  decks: any;
}
const MyDataSectionStore = ({
  session,
  cards,
  decks,
}: MyDataSectionStoreProps) => {
  const dispatch = useDispatch();
  const [imageKeyState, setImageKeyState] = useState("darkMagiciansTo.jpeg");
  const imageKey = useSelector(
    (state: any) => state.storeCards.profileImageKey
  );

  useEffect(() => {
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
        getImage={async (file) => {
          setImageKeyState(null);
          var blob = file.slice(0, file.size, file.type);
          const newFile = new File([blob], `store-${session.user.id}.png`, {
            type: file.type,
          });
          const formData = new FormData();
          formData.append("profileImage", newFile);
          formData.append("userId", session.user.id);
          formData.append("imageKey", session.user.profileImageKey);
          const response = await dispatch(postStoreImage(formData));
          setTimeout(() => {
            // @ts-ignore
            setImageKeyState(response.imageKey);
          }, 3000);
        }}
      />
      <ProfileTitle>
        {session.user.name ? session.user.name : "Unknown"}
      </ProfileTitle>
      <ProfileStoreName>
        ({session.user.storeName ? session.user.storeName : "Unknown"})
      </ProfileStoreName>
      <MainInfoContainer>
        <MainInfo>
          <MainInfoTitle>Cartas en venta</MainInfoTitle>
          <MainInfoSubtitle>{cards.length}</MainInfoSubtitle>
        </MainInfo>
        <MainInfo>
          <MainInfoTitle>Bases en venta</MainInfoTitle>
          <MainInfoSubtitle>{decks.length}</MainInfoSubtitle>
          <AccountType>Cuenta: {session.user.role === "store" ? 'Tienda' : 'Duelista'} </AccountType>
        </MainInfo>
      </MainInfoContainer>
      </ProfilePersonalInformationWrapper>
    </>
  );
};

export default MyDataSectionStore;
