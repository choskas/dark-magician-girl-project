import { ReactNode, useState } from "react";
import {
  CartCloseIconDrawer,
  CartContent,
  CartDrawerWrapper,
  CartTitle,
  CartTitleWrapper,
  CollapseIconWrapper,
} from "../../styles/common/CartBottomDrawer";

interface BottomDrawerProps {
  children: ReactNode;
  drawerTitle?: string;
}

const CartBottomDrawer = ({
  children,
  drawerTitle = "Mi stock",
}: BottomDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CartDrawerWrapper isOpen={isOpen}>
      <CartTitleWrapper>
        <CartTitle>
        {drawerTitle}
        </CartTitle>
        <CollapseIconWrapper
          src={
            isOpen
              ? "/icons/collpaseArrowClose.png"
              : "/icons/collapseArrow.png"
          }
          onClick={() => setIsOpen(!isOpen)}
        />
      </CartTitleWrapper>
      <CartContent>{children}</CartContent>
    </CartDrawerWrapper>
  );
};

export default CartBottomDrawer;
