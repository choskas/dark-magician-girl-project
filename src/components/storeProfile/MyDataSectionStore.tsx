import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postStoreImage } from "../../redux/modules/storeCards";
import {
    MainInfo,
    MainInfoContainer,
    MainInfoSubtitle,
    MainInfoTitle,
    ProfileBold,
    ProfileImage,
    ProfileImageContainer,
    ProfileTitle,
  } from "../../styles/storeProfile/storeProfileInfo";
import UploadImageButton from "../common/UploadImageButton";
  interface MyDataSectionStoreProps {
    session: any;
    cards: any;
    decks: any;
  }
  const MyDataSectionStore = ({ session, cards, decks }: MyDataSectionStoreProps) => {
    const dispatch = useDispatch();
    const [imageKeyState , setImageKeyState] = useState('darkMagiciansTo.jpeg');
    const imageKey = useSelector(
      (state: any) => state.storeCards.storeProfileImageKey
    );

    console.log(imageKeyState, 'olaa')

    useEffect(() => {
      if (session.user.storeProfileImageKey) {
        setImageKeyState(session.user.storeProfileImageKey);
      }
    }, [])
    return (
      <>
        <ProfileImageContainer>
          <ProfileImage src={`${process.env.NEXT_PUBLIC_BACKEND_URL_IMAGE}/images/${imageKeyState}`} />
        </ProfileImageContainer>
        <UploadImageButton getImage={async (file) => {
                setImageKeyState('darkMagiciansTo.jpeg');
                var blob = file.slice(0, file.size, file.type); 
                console.log(file)
                const newFile = new File([blob], `store-${session.user.id}.png`, {type: file.type});
                const formData = new FormData();
                formData.append('storeProfileImage', newFile)
                formData.append('userId', session.user.id)
                formData.append('imageKey', session.user.storeProfileImageKey);
                const response = await dispatch(postStoreImage(formData));
                console.log(response, 'respuesta')
                // @ts-ignore
                setImageKeyState(response.imageKey);
        }} />
        <ProfileTitle>
          {session.user.name ? session.user.name : "Unknown"}
        </ProfileTitle>
        <ProfileTitle>
         <ProfileBold>Tienda: </ProfileBold> {session.user.storeName ? session.user.storeName : "Unknown"}
        </ProfileTitle>
        <MainInfoContainer>
          <MainInfo>
            <MainInfoTitle>Cartas</MainInfoTitle>
            <MainInfoSubtitle>{cards.length}</MainInfoSubtitle>
          </MainInfo>
          <MainInfo>
            <MainInfoTitle>Bases</MainInfoTitle>
            <MainInfoSubtitle>{decks.length}</MainInfoSubtitle>
          </MainInfo>
        </MainInfoContainer>
      </>
    );
  };
  
  export default MyDataSectionStore;
  