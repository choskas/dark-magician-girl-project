import { CardImage, CardName, CardWrapper } from "../../styles/deckPrice/Card";
import { useDrag } from 'react-dnd';

interface CardProps {
    image: string;
    name: string;
}

const ItemTypes = {
    CARD: 'card',
};

const Card = ({image, name}) => {
    const showCopyIcon = true;
    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
          type: ItemTypes.CARD,
          item: {
			type: ItemTypes.CARD,
			image,
            name,
		    },
          options: {
            dropEffect: showCopyIcon ? 'copy' : 'move',
          },
          collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
          }),
        }),
      )
    return (
    <CardWrapper ref={drag} style={{ opacity: isDragging ? 0.5 : 1}}>
        <CardImage src={image} />
        <CardName>{name}</CardName>
    </CardWrapper>
)};

export default Card;