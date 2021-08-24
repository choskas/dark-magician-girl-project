import { useState } from "react";
import { Tab, TabsContainer, TabSeparator, TabTitle, TabWrapper } from "../../styles/common/TabPanel";

interface TabPanelProps {
    firstTabContent: any;
    secondTabContent: any;
    firstTabTitle: any;
    secondTabTitle: any;
}

const TabPanel = ({firstTabContent, secondTabContent, firstTabTitle, secondTabTitle}: TabPanelProps) => {
    const [isActiveFirstTab, setIsActiveFirstTab] = useState(true);
    const [isActiveSecondTab, setIsActiveSecondTab] = useState(false);
    return (
        <TabsContainer>
            <TabWrapper>
                <TabTitle isActive={isActiveFirstTab} onClick={() => {setIsActiveFirstTab(true)
                setIsActiveSecondTab(false);
                }}>{firstTabTitle}</TabTitle>
    <TabSeparator />
        <TabTitle isActive={isActiveSecondTab} onClick={() => {setIsActiveSecondTab(true)
        setIsActiveFirstTab(false);
        }}>{secondTabTitle}</TabTitle>
        </TabWrapper>
        <Tab>
            {isActiveFirstTab ?  firstTabContent : secondTabContent}
        </Tab>
        </TabsContainer>
    );
};

export default TabPanel