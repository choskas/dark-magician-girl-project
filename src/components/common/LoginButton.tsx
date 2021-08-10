import {
  LoginButtonContainer,
  LoginButtonImage,
} from "../../styles/common/LoginButton";

interface LoginButtonProps {
  icon?: string;
  children: any;
  onClick?: Function;
  type?: JSX.IntrinsicElements["button"]["type"];
}

const LoginButton = ({
  children,
  icon,
  onClick,
  type = "button",
}: LoginButtonProps) => (
  <>
    {icon && <LoginButtonImage src={icon} />}
    <LoginButtonContainer
      type={type}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </LoginButtonContainer>
  </>
);

export default LoginButton;
