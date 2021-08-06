import { PopoverWrapper } from "../../styles/common/Popover";

const Popover = ({children, isVisible}) => {
    
    return(
<PopoverWrapper isVisible={true}>
    {children}
</PopoverWrapper>
)
};

export default Popover;