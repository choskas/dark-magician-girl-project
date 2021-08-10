import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FullScreenLoader from "../../components/common/FullScreenLoader";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/index/NavBar";
import WhatsAppButton from "../../components/storeProfile/WhatsAppButton";

const StoreProfile = () => {
const router = useRouter();
const [storeInfo, setStoreInfo] = useState(null);
const getStoreInfo = async () => {
    try {
    const id = router.query.id;
    console.log(id, '<<<<')
    const store = await axios.post( `${process.env.NEXT_PUBLIC_BACKEND_URL}/getStoreById`, {id} )
    setStoreInfo(store.data.store);
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
    {storeInfo && (
        <>
    <NavBar />
    <WhatsAppButton phoneNumber={storeInfo.contact.phoneNumber} cardName="nombre" />
    <Footer />
    </>
    )}


    </>
)};

export default StoreProfile;