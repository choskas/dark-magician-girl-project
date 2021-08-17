import {
  LoginButtonContainer,
  LoginButtonImage,
} from "../../styles/common/LoginButton";

interface LoginButtonProps {
  icon?: string;
  children: any;
  onClick?: Function;
  type?: JSX.IntrinsicElements["button"]["type"];
  disabled?: boolean;
}

const LoginButton = ({
  children,
  icon,
  onClick,
  type = "button",
  disabled = false,
}: LoginButtonProps) => (
  <>
    {icon && <LoginButtonImage src={icon} />}
    <LoginButtonContainer
      disabled={disabled}
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
