import {
  BigTitle,
  Card,
  DeckPrice,
  DeckWrapper,
  NoDecksMessage,
  Title,
  TitleWrapper,
} from "../../styles/profile/myDecks";

interface MyDeckSectionProps {
  session: object;
  decks: Array<any>;
}

const MyDecksSection = ({ session, decks }: MyDeckSectionProps) => {
  const renderDecks = () => {
    if (decks.length > 0) {
      return decks.map((item) => (
        <>
        <TitleWrapper>
          <Title>{item.deckName}</Title>
          <DeckPrice>${item.deckPrice}</DeckPrice>
          </TitleWrapper>
          <DeckWrapper>
            {item.deck.map((card) => (
              <Card src={card.card_images[0].image_url_small} />
            ))}
          </DeckWrapper>
        </>
      ));
    } else {
      return <NoDecksMessage>No tienes decks aun.</NoDecksMessage>;
    }
  };
  return (
    <>
      <BigTitle>Mis Decks</BigTitle>
      {renderDecks()}
    </>
  );
};

export default MyDecksSection;
