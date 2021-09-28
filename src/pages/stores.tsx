import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/index/NavBar";
import StoresHeader from "../components/stores/StoresHeader";
import StoresList from "../components/stores/StoresList";
import { getAllStores } from "../redux/modules/storeCards";
import { StoresWrapper } from "../styles/stores";

const Stores = () => {
    const dispatch = useDispatch()
    const router = useRouter();
    const stores = useSelector((state: any) => state.storeCards.allStores)
    useEffect(() => {
        dispatch(getAllStores());
    }, [])
return (
    <>
    <NavBar />
    <StoresWrapper>
    <StoresHeader />
    <StoresList stores={stores} router={router} />
    </StoresWrapper>
    </>
)};

export default Stores;