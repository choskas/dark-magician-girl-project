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
  interface MyDataSectionStoreProps {
    session: any;
    cards: any;
    decks: any;
  }
  const MyDataSectionStore = ({ session, cards, decks }: MyDataSectionStoreProps) => {
    return (
      <>
        <ProfileImageContainer>
          <ProfileImage src={"/assets/darkMagiciansTo.jpeg"} />
        </ProfileImageContainer>
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
  