import styled from "styled-components";

interface PopoverWrapperProps {
  isVisible: boolean;
  width: string;
}

export const PopoverWrapper = styled.div<PopoverWrapperProps>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  width: ${({ width }) => (width ? width : "200px")};
  height: auto;
  background: #fff;
  color: black;
  z-index: 3;
  position: absolute;
  padding: 5px 10px;
  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  animation-name: zoom;
  animation-duration: 0.6s;
`;
