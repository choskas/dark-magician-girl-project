// @ts-nocheck
import axios from "axios";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import InputText from "../../components/common/InputText";
import LoginButton from "../../components/common/LoginButton";
import Footer from "../../components/Footer/Footer";
import useField from "../../components/hooks/useField";
import NavBar from "../../components/index/NavBar";
import {
  EndButtonWrapper,
  FormWrapper,
  InputWrapper,
  PageDescription,
  SectionTitle,
} from "../../styles/storeExtraData";

const EditStoreProfile = () => {
  const [session, loading] = useSession();
  const router = useRouter();
  const [storeName, setStoreName] = useState("");
  const [addressStreet, setAddressStreet] = useState("");
  const [addressExtNumber, setAddressExtNumber] = useState("");
  const [addressPostalCode, setAddressPostalCode] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [facebookLink, setFaccebookLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const editExtraInfo = async () => {
    try {
      const data = {
        // @ts-ignore
        id: session.user.id,
        storeName:
          storeName !== ""
            ? storeName
            : session.user.name,
        street: addressStreet,
        postalCode: addressPostalCode,
        number: addressExtNumber,
        city: addressCity,
        facebookLink: facebookLink,
        instagramLink: instagramLink,
        twitterLink: twitterLink,
        phoneNumber: `52${whatsapp}`,
      };
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/updateStoreExtraInfo`,
        data
      );
      toast(response.data.message)
      router.push("/storeProfile");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (session) {
      setStoreName(session.user.storeName);
      setAddressStreet(session.user.address.street);
      setAddressCity(session.user.address.city);
      setAddressPostalCode(session.user.address.postalCode);
      setAddressExtNumber(session.user.address.number);
      setFaccebookLink(session.user.contact.facebookLink);
      setInstagramLink(session.user.contact.instagramLink);
      setTwitterLink(session.user.contact.twitterLink);
      setWhatsapp(session.user.contact.phoneNumber);
    }
  }, [session]);

  return (
    <>
      {session && (
        <>
          <NavBar />
          <PageDescription>Edita tu información a continuación</PageDescription>
          <FormWrapper>
            <InputWrapper>
              <InputText
                placeholder="Nombre de la tienda"
                value={storeName}
                onChange={(e, value) => {
                  setStoreName(value);
                }}
              />
            </InputWrapper>
            <InputWrapper>
              <InputText
                placeholder="Dirección"
                value={addressStreet}
                onChange={(e, value) => {
                  setAddressStreet(value);
                }}
              />
            </InputWrapper>
            <InputWrapper>
              <InputText
                placeholder="Número"
                value={addressExtNumber}
                onChange={(e, value) => {
                  setAddressExtNumber(value);
                }}
              />
            </InputWrapper>
            <InputWrapper>
              <InputText
                placeholder="Código postal"
                value={addressPostalCode}
                onChange={(e, value) => {
                  setAddressPostalCode(value);
                }}
              />
            </InputWrapper>
            <InputWrapper>
              <InputText
                placeholder="Municipio/Delegación"
                value={addressCity}
                onChange={(e, value) => {
                  setAddressCity(value);
                }}
              />
            </InputWrapper>
            <SectionTitle>Contacto</SectionTitle>
            <InputWrapper>
              <InputText
                placeholder="Link de tu Facebook"
                value={facebookLink}
                onChange={(e, value) => {
                  setFaccebookLink(value);
                }}
              />
            </InputWrapper>
            <InputWrapper>
              <InputText
                placeholder="Link de tu Instagram"
                value={instagramLink}
                onChange={(e, value) => {
                  setInstagramLink(value);
                }}
              />
            </InputWrapper>
            <InputWrapper>
              <InputText
                placeholder="Link de tu Twitter"
                value={twitterLink}
                onChange={(e, value) => {
                  setTwitterLink(value);
                }}
              />
            </InputWrapper>
            <InputWrapper>
              <InputText
                placeholder="Whatsapp"
                value={whatsapp}
                onChange={(e, value) => {
                  setWhatsapp(value);
                }}
              />
            </InputWrapper>
          </FormWrapper>
          <EndButtonWrapper>
            <LoginButton
              type="submit"
              onClick={() => {
                if (
                  facebookLink ||
                  instagramLink ||
                  twitterLink ||
                  whatsapp
                ) {
                  editExtraInfo();
                } else {
                  toast("Debes llenar al menos un campo de contacto");
                }
              }}
            >
              Terminar
            </LoginButton>
          </EndButtonWrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default EditStoreProfile;
