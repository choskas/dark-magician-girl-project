import { ReactNode } from "react";
import { DrawerWrapper } from "../../styles/common/BottomDrawer";

interface BottomDrawerProps {
    isOpen: boolean;
    children: ReactNode;
}

const BottomDrawer = ({isOpen, children} : BottomDrawerProps) => {
    return (
        <DrawerWrapper isOpen={isOpen}>
            {children}
        </DrawerWrapper>
    )
}

export default BottomDrawer;