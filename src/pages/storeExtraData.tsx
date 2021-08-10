import axios from "axios";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import InputText from "../components/common/InputText";
import LoginButton from "../components/common/LoginButton";
import Footer from "../components/Footer/Footer";
import useField from "../components/hooks/useField";
import NavBar from "../components/index/NavBar";
import {
  EndButtonWrapper,
  FormWrapper,
  InputWrapper,
  PageDescription,
  SectionTitle,
} from "../styles/storeExtraData";

const StoreExtraData = () => {
  const [session, loading] = useSession();
  const router = useRouter();
  const storeNameField = useField({ type: "text", name: "storeName" });
  const addressStreetField = useField({ type: "text", name: "street" });
  const addressExtNumber = useField({ type: "text", name: "extNumber" });
  const addressPostalCodeField = useField({ type: "text", name: "postalCode" });
  const addressCityField = useField({ type: "text", name: "city" });
  const facebookLinkField = useField({ type: "text", name: "facebook" });
  const instagramLinkField = useField({ type: "text", name: "instagram" });
  const twitterLinkField = useField({ type: "text", name: "twitter" });
  const whatsappLinkField = useField({ type: "text", name: "whatsapp" });

  const sendExtraInfo = async () => {
    try {
      const data = {
        // @ts-ignore
        id: session.user.id,
        storeName: storeNameField.value,
        street: addressStreetField.value,
        postalCode: addressPostalCodeField.value,
        number: addressExtNumber.value,
        city: addressCityField.value,
        facebookLink: facebookLinkField.value,
        instagramLink: instagramLinkField.value,
        twitterLink: twitterLinkField.value,
        phoneNumber: `52${whatsappLinkField.value}`,
      };
      await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/storeExtraInfo`, data);
      router.push('/storeProfile');
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <PageDescription>
        Como parte de tu registro de "vendedor" es necesario que llenes este
        formulario para saber si tienes una tienda, en caso de solo querer
        vender (sin una tienda) solo llena tus datos de "contacto", para que se
        puedan contactar contigo.
      </PageDescription>
      <FormWrapper>
        <InputWrapper>
          <InputText placeholder="Nombre de la tienda" {...storeNameField} />
        </InputWrapper>
        <InputWrapper>
          <InputText placeholder="Dirección" {...addressStreetField} />
        </InputWrapper>
        <InputWrapper>
          <InputText placeholder="Número" {...addressExtNumber} />
        </InputWrapper>
        <InputWrapper>
          <InputText placeholder="Código postal" {...addressPostalCodeField} />
        </InputWrapper>
        <InputWrapper>
          <InputText placeholder="Municipio/Delegación" {...addressCityField} />
        </InputWrapper>
        <SectionTitle>Contacto</SectionTitle>
        <InputWrapper>
          <InputText placeholder="Link de tu Facebook" {...facebookLinkField} />
        </InputWrapper>
        <InputWrapper>
          <InputText
            placeholder="Link de tu Instagram"
            {...instagramLinkField}
          />
        </InputWrapper>
        <InputWrapper>
          <InputText placeholder="Link de tu Twitter" {...twitterLinkField} />
        </InputWrapper>
        <InputWrapper>
          <InputText placeholder="Whatsapp" {...whatsappLinkField} />
        </InputWrapper>
      </FormWrapper>
      <EndButtonWrapper>
        <LoginButton
          type="submit"
          onClick={() => {
            if (facebookLinkField.value || instagramLinkField.value || twitterLinkField.value || whatsappLinkField.value) {
                sendExtraInfo();
            } else {
                toast('Debes llenar al menos un campo de contacto')
            }
          }}
        >
          Terminar
        </LoginButton>
      </EndButtonWrapper>
      <Footer />
    </>
  );
};

export default StoreExtraData;
