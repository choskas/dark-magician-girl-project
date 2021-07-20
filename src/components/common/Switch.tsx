import {
  CheckBox,
  Image,
  ImageWrapper,
  SliderRound,
  SwitchContent,
  SwitchText,
  SwitchWrapper,
  Text,
} from "../../styles/common/Switch";

interface SwitchProps {
  isActive: boolean;
  onClick: Function;
  text?: string;
  onImage: string;
  offImage: string;
  onText: string;
  offText: string;
}

const Switch = ({
  isActive,
  onClick,
  text,
  onImage,
  offImage,
  onText,
  offText,
}: SwitchProps) => (
  <>
    <SwitchText>{text}</SwitchText>
    <SwitchWrapper>
      <ImageWrapper>
        <Image src={onImage} />
        <Text>{onText}</Text>
      </ImageWrapper>
      <SwitchContent>
        <CheckBox onClick={() => onClick()} isActive={isActive} />
        <SliderRound isActive={isActive}></SliderRound>
      </SwitchContent>
      <ImageWrapper>
        <Image src={offImage} />
        <Text>{offText}</Text>
      </ImageWrapper>
    </SwitchWrapper>
  </>
);

export default Switch;
