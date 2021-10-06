import { SpinnerContainer, SpinnerContent1, SpinnerContent2, SpinnerContent3, SpinnerContent4, SpinnerContent5, SpinnerContent6, SpinnerContent7 } from "../styles/common/SpinnerLoader";

interface SpinnerLoaderProps {
  isDesktop: boolean;
}

const SpinnerLoader = ({isDesktop}: SpinnerLoaderProps) => (
  <SpinnerContainer isDesktop={isDesktop}>
    <SpinnerContent1></SpinnerContent1>
    <SpinnerContent2></SpinnerContent2>
    <SpinnerContent3></SpinnerContent3>
    <SpinnerContent4></SpinnerContent4>
    <SpinnerContent5></SpinnerContent5>
    <SpinnerContent6></SpinnerContent6>
    <SpinnerContent7></SpinnerContent7>
  
  </SpinnerContainer>
);

export default SpinnerLoader;
