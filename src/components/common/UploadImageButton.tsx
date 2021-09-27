import { useRef, useState } from "react";
import {
  AddImageButton,
  FormUploadButton,
  InputUpload,
  UploadErrorText,
} from "../../styles/common/UploadImageButton";

interface UploadImageButtonProps {
  getImage: Function;
  text?: string;
}

const UploadImageButton = ({ getImage, text = 'Cambiar imagen de tienda' }: UploadImageButtonProps) => {
  const refInput = useRef(null);
  const [uploadError, setUploadError] = useState(null);

  const uploadImage = (e: any) => {
    setUploadError(null);
    const file = e.target.files[0];
    if (file) {
      const fileSize = e.target.files[0].size / 1024 / 1024;
      if (fileSize >= 3) {
        setUploadError("Tu imagen debe de ser menor a 3mb");
        return;
      }
      getImage(file);
    }
  };
  return (
    <>
      <FormUploadButton>
        <InputUpload
          ref={refInput}
          accept="image/png, image/jpeg"
          type="file"
          onChange={uploadImage}
        />
        <AddImageButton
          type="submit"
          onClick={(e: any) => {
            e.preventDefault();
            refInput.current.click();
          }}
        >
          {text}
        </AddImageButton>
      </FormUploadButton>
      {uploadError && <UploadErrorText> {uploadError} </UploadErrorText>}
    </>
  );
};

export default UploadImageButton;
