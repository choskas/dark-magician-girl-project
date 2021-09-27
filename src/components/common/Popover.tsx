import { PopoverWrapper } from "../../styles/common/Popover";

interface PopoverProps {
    children: any;
    isVisible: boolean;
    width?: string;
}

const Popover = ({children, isVisible, width = '200px'}: PopoverProps) => {
    
    return(
<PopoverWrapper width={width} isVisible={isVisible}>
    {children}
</PopoverWrapper>
)
};

export default Popover;