import {
  MainInfo,
  MainInfoContainer,
  MainInfoSubtitle,
  MainInfoTitle,
  ProfileImage,
  ProfileImageContainer,
  ProfileTitle,
} from "../../styles/storeProfile/storeProfileInfo";
interface MyDataSectionProps {
  session: any;
  cards: any;
  decks: any;
}
const MyDataSection = ({ session, cards, decks }: MyDataSectionProps) => {
  return (
    <>
      <ProfileImageContainer>
        <ProfileImage src={"/assets/darkMagiciansTo.jpeg"} />
      </ProfileImageContainer>
      <ProfileTitle>
        {session.user.name ? session.user.name : "Unknown"}
      </ProfileTitle>
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
    </>
  );
};

export default MyDataSection;
