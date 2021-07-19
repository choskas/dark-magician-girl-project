import { CardImage, CardName, CardWrapper } from "../../styles/deckPrice/Card";
import { useDrag } from 'react-dnd';
import { FaTimesCircle } from 'react-icons/fa';

interface CardProps {
    image: string;
    name: string;
    foundCards: Array<any>;
    isEditable: boolean;
    onClickDelete?: Function;
    index?: Number;
    isClickedDelete?: boolean;
    setIsClickedDelete?: Function;
}

const ItemTypes = {
    CARD: 'card',
};

const Card = ({image, name, foundCards, isEditable, onClickDelete, index, isClickedDelete, setIsClickedDelete}: CardProps) => {
    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
          type: ItemTypes.CARD,
          item: {
			type: ItemTypes.CARD,
			image,
            name,
		    },
          options: {
            dropEffect: 'copy',
          },
          collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
          }),
        }), [foundCards]
      )
    return (
    <CardWrapper ref={drag} style={{ opacity: isDragging ? 0.5 : 1}}>
        <CardImage src={image} />
        {isEditable && 
        <FaTimesCircle 
            onClick={(e) => {
                e.preventDefault();
                setIsClickedDelete(!isClickedDelete)
                onClickDelete(index)
            }}
            style={{float: 'right', color: 'red', zIndex: 2, top: '-150px', position: 'relative', cursor: 'pointer'}}
        />}
        <CardName>{name}</CardName>
    </CardWrapper>
)};

export default Card;