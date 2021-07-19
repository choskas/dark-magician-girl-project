import { CardImage, CardName, CardWrapper } from "../../styles/deckPrice/Card";
import { useDrag } from "react-dnd";
import { FaTimesCircle } from "react-icons/fa";
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
        card_type: item.type,
        card_images: item.card_images,
        card_prices: item.card_prices ? item.card_prices : null,
        set_code: item.set_code ? item.set_code : null,
        set_name: item.set_name ? item.set_name : null,
        set_price: item.set_price ? item.set_price : null,
        set_rarity: item.set_rarity ? item.set_rarity : null,
        set_rarity_code: item.set_rarity_code ? item.set_rarity_code : null,
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
          e.preventDefault();
          await onTouchCard();
          toast("!Carta agregada!");
        }}
      />
      {isEditable && (
        <FaTimesCircle
          onClick={(e) => {
            e.preventDefault();
            setIsClickedDelete(!isClickedDelete);
            onClickDelete(index);
          }}
          style={{
            float: "right",
            color: "red",
            zIndex: 2,
            top: "-150px",
            position: "relative",
            cursor: "pointer",
          }}
        />
      )}
      <CardName>{name}</CardName>
    </CardWrapper>
  );
};

export default Card;
