import { LoginButtonContainer, LoginButtonImage } from "../../styles/common/LoginButton";

interface LoginButtonProps {
    icon?: string;
    children: any;
}

const LoginButton = ({children, icon}: LoginButtonProps) => (
    <>
    <LoginButtonImage src={icon} />
    <LoginButtonContainer>{children}</LoginButtonContainer>
    </>
)

export default LoginButton;