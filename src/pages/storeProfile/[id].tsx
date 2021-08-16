import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FullScreenLoader from "../../components/common/FullScreenLoader";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/index/NavBar";
import StoreProfileInfo from "../../components/storeProfile/StoreProfileInfo";
import WhatsAppButton from "../../components/storeProfile/WhatsAppButton";
import { getAllUniqueCardsById } from "../../redux/modules/storeCards";
import store from "../../redux/store";

const StoreProfile = () => {
const router = useRouter();
const dispatch = useDispatch();
const selectedCard = useSelector((state: any) => state.wantedCards.selectedCard);
const [storeInfo, setStoreInfo] = useState(null);
const storeUniqueCards = useSelector((state: any) => state.storeCards.uniqueCards);
const storeDeckBases = useSelector((state: any) => state.storeCards.deckBases);
const getStoreInfo = async () => {
    try {
    const id = router.query.id;
    const store = await axios.post( `${process.env.NEXT_PUBLIC_BACKEND_URL}/getStoreById`, {id} )
    setStoreInfo(store.data.store);
    await dispatch(getAllUniqueCardsById({userId: id}));
    } catch (error) {
        console.log(error);
    }
}
useEffect(() => {
    if(router.query.id){
    getStoreInfo()
    }
}, [router.query])
return (
    <>
    {storeInfo ? (
        <>
    <NavBar />
    <StoreProfileInfo storeDeckBases={storeDeckBases} storeUniqueCards={storeUniqueCards} storeInfo={storeInfo} />
    {storeInfo.contact.phoneNumber && (
    <WhatsAppButton phoneNumber={storeInfo.contact.phoneNumber} cardName={selectedCard && selectedCard.name} />
    )}

    <Footer />
    </>
    ) : <FullScreenLoader />}


    </>
)};

export default StoreProfile;