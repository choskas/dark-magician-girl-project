import { useEffect, useState } from "react";
import { SearchStoreInputWrapper,StoreSocialIconWrapper, StoreCardImageWrapper, StoreCard, StoreCardImage, StoreCity, StoreCityIcon, StoreDescription, StoreInfo, StoreName, StoreSocialIcon } from "../../styles/stores";
import InputText from "../common/InputText";
import ShowMoreButton from "../common/ShowMoreButton";
interface StoresListProps {
    stores: Array<any>;
    router: any;
}
const StoresList = ({stores, router}: StoresListProps) => {
    const [showMoreStores, setShowMoreStores] = useState(10);
    const [storesState, setStoresState] = useState([]);
    const searchStore = (value: string) => {
        if (value.length > 3) {
          const uniqueCardItem = stores.filter((item) => {
            if (item.storeName.toLowerCase().includes(value.toLowerCase())) {
              return item;
            }
          });
          setStoresState(uniqueCardItem);
        }
        if (value.length < 3) {
          setStoresState(stores);
        }
      };

      useEffect(() => {
        setStoresState(stores)
      }, [stores]);
      
    return (
        <>
        <SearchStoreInputWrapper>
            <InputText placeholder="Búsqueda" onChange={(e, value) =>{searchStore(value)}} icon="/assets/Search.png"/>
        </SearchStoreInputWrapper>
        {storesState && storesState.slice(0, showMoreStores).map((item: any, key) => (
        <StoreCard>
            <StoreCardImageWrapper>
        <StoreCardImage src={item.profileImageKey ? `${process.env.NEXT_PUBLIC_BACKEND_URL_ROOT}/images/${item.profileImageKey}` : '/assets/Egypt.png'}/>
        </StoreCardImageWrapper>
        <StoreInfo onClick={() => router.push(`/storeProfile/${item.id}`)}>
            <StoreName>{item.storeName}</StoreName>
            <StoreSocialIconWrapper>
            {item.contact.facebookLink && (<StoreSocialIcon alt={`icon-social-facebook`} src="/icons/facebook.png" />)}
            {item.contact.instagramLink && (<StoreSocialIcon alt={`icon-social-instagram`} src="/icons/instagram.png" />)}
            {item.contact.phoneNumber && ( <StoreSocialIcon alt={`icon-social-whatsapp`} src="/icons/whatsapp.png" />)}   
            </StoreSocialIconWrapper>
            <StoreCity><StoreCityIcon alt="city-icon" src="/icons/cityIcon.png" />{item.city ? item.city : 'Ubicación desconocida'}</StoreCity>
        </StoreInfo>
        </StoreCard>
        ))}
              {storesState && showMoreStores < storesState.length && (
        <ShowMoreButton onClick={() => setShowMoreStores(showMoreStores + 10)} />
      )}
        </>
    )
}

export default StoresList;