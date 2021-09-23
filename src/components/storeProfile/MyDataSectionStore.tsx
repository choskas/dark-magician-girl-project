import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStoreImage, postStoreImage } from "../../redux/modules/storeCards";
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
    const imageKey = useSelector(
      (state: any) => state.storeCards.storeProfileImageKey
    );
    const profileImg = useSelector((state: any) => state.storeCards.storeProfileImage);

    const getProfileImage = (imageKeyArg) => {
      dispatch(getStoreImage({imageKey: imageKeyArg}))
    }

    useEffect(() => {
      if (session.user.storeProfileImageKey){
        getProfileImage(session.user.storeProfileImageKey)
      }
    }, [])
    return (
      <>
        <ProfileImageContainer>
          <ProfileImage src={profileImg ? profileImg : "/assets/darkMagiciansTo.jpeg"} />
        </ProfileImageContainer>
        <UploadImageButton getImage={async (file) => {
                const formData = new FormData();
                formData.append('storeProfileImage', file)
                formData.append('userId', session.user.id)
                formData.append('imageKey', session.user.storeProfileImageKey);
                const response = await dispatch(postStoreImage(formData));
                // @ts-ignore
                await getProfileImage(response.imageKey);
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
  