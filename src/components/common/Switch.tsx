import { SwitchContent, SwitchText } from "../../styles/common/Switch";

interface SwitchProps {
    isActive: boolean;
    onClick: Function;
    text: string;
}

const Switch = ({isActive, onClick, text}: SwitchProps) => (
    <>
    <SwitchText>{text}</SwitchText> 
        <SwitchContent onClick={() => onClick()} isActive={isActive}></SwitchContent>
        </>
)

export default Switch;