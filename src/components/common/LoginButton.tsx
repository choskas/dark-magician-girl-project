import { LoginButtonContainer, LoginButtonImage } from "../../styles/common/LoginButton";

interface LoginButtonProps {
    icon?: string;
    children: any;
    onClick?: Function;
}

const LoginButton = ({children, icon, onClick}: LoginButtonProps) => (
    <>
    <LoginButtonImage src={icon} />
    <LoginButtonContainer onClick={() => onClick()}>{children}</LoginButtonContainer>
    </>
)

export default LoginButton;