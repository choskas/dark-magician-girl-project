import { ReactNode } from "react";
import {
  CloseIconDrawer,
  DrawerWrapper,
} from "../../styles/common/BottomDrawer";

interface BottomDrawerProps {
  isOpen: boolean;
  children: ReactNode;
  onClose?: Function;
}

const BottomDrawer = ({ isOpen, children, onClose }: BottomDrawerProps) => {
  return (
    <DrawerWrapper isOpen={isOpen}>
      {onClose && (
        <CloseIconDrawer onClick={() => onClose()} src="/assets/Close.png" />
      )}
      {children}
    </DrawerWrapper>
  );
};

export default BottomDrawer;
