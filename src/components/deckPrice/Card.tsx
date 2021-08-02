import { CardImage, CardName, CardTitle, CardWrapper, CloseImage } from "../../styles/deckPrice/Card";
import { useDrag } from "react-dnd";
import { toast } from "react-toastify";

interface CardProps {
  image: string;
  name: string;
  foundCards: Array<any>;
  isEditable: boolean;
  onClickDelete?: Function;
  index?: Number;
  isClickedDelete?: boolean;
  setIsClickedDelete?: Function;
  onTouchCard?: Function;
  item?: any;
}

const ItemTypes = {
  CARD: "card",
};

const Card = ({
  image,
  name,
  foundCards,
  isEditable,
  onClickDelete,
  index,
  isClickedDelete,
  setIsClickedDelete,
  onTouchCard,
  item,
}: CardProps) => {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: {
        type: ItemTypes.CARD,
        image,
        name,
        id: item.id,
        level: item.level,
        race: item.race,
        archetype: item.archetype,
        attribute: item.attribute,
        atk: item.atk,
        def: item.def,
        desc: item.desc,
        card_type: item.type,
        card_images: item.card_images,
        card_prices: item.card_prices && item.card_prices,
        set_code: item.set_code && item.set_code,
        set_name: item.set_name && item.set_name,
        set_price: item.set_price && item.set_price,
        set_rarity: item.set_rarity && item.set_rarity,
        set_rarity_code: item.set_rarity_code && item.set_rarity_code,
      },
      options: {
        dropEffect: "copy",
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [foundCards]
  );
  return (
    <CardWrapper ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <CardImage
        src={image}
        onClick={async (e) => {
          if (!isEditable) {
            e.preventDefault();
            await onTouchCard();
            toast("!Carta agregada!");
          }
        }}
      />
      {isEditable && (
        <CloseImage
          src="/assets/Close.png"
          onClick={(e) => {
            e.preventDefault();
            setIsClickedDelete(!isClickedDelete);
            onClickDelete(index);
          }}
          style={{
            float: "right",
            zIndex: 2,
            top: "-145px",
            left: "10px",
            position: "relative",
            cursor: "pointer",
          }}
        />
      )}
      <CardTitle>Card name:</CardTitle>
      <CardName>{name}</CardName>
      <CardTitle>Card Type:</CardTitle>
      <CardName>{item.type}</CardName>
      <CardTitle>Type:</CardTitle>
      <CardName>{item.race}</CardName>
    </CardWrapper>
  );
};

export default Card;
