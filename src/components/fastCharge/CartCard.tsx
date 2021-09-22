import { useEffect, useState } from "react";
import { CardInfoDescription, CardInfoTitle, CartCardImage, CartCardInfoContainer, CartCardInfoName, CartCardInfoQuantityRarity, CartCardInfoQuantityRarityContainer, CartCardWrapper, CartDeleteContainer, CartDeleteImage } from "../../styles/fastCharge/cartCard"

interface CartCardProps {
    onClickDelete: Function;
    cardName: string;
    cardQuantity: string | number;
    cardRarity?: string;
    cardImage: string;
}

const CartCard = ({onClickDelete, cardName, cardQuantity, cardRarity, cardImage}: CartCardProps) => {
    const [deleteClass, setDeleteClass] = useState('');
    return (
        <>
        <CartCardWrapper className={deleteClass}>
        <CartCardImage src={cardImage}/>
        <CartCardInfoContainer > 
            <CartCardInfoName >
                <CardInfoTitle>Nombre</CardInfoTitle>
                <CardInfoDescription>{cardName}</CardInfoDescription>
            </CartCardInfoName>
            <CartCardInfoQuantityRarityContainer >
                <CartCardInfoQuantityRarity>
                <CardInfoTitle>Cantidad</CardInfoTitle>
                <CardInfoDescription>{cardQuantity}</CardInfoDescription>
                </CartCardInfoQuantityRarity>
                <CartCardInfoQuantityRarity>
                <CardInfoTitle>Rareza</CardInfoTitle>
                <CardInfoDescription>{cardRarity}</CardInfoDescription>
                </CartCardInfoQuantityRarity>
            </CartCardInfoQuantityRarityContainer>
        </CartCardInfoContainer>
        <CartDeleteContainer onClick={() => {
            setDeleteClass('delete');
            setTimeout(() => {
                onClickDelete()
                setDeleteClass('')
            }, 2000)
            }}>
        <CartDeleteImage src="/icons/deleteIcon.png"/>
            </CartDeleteContainer>
    </CartCardWrapper>
    </>
    )
}

export default CartCard