import DonateSection from "../components/index/DonateSection";
import MainPageFirstSection from "../components/index/MainPageFirstSection"
import NavBar from "../components/index/NavBar"
import WhatToDoSection from "../components/index/WhatToDoSection";
import { CardFrame } from "../styles/index/MainPage";

const HomePage = () => {
    return (
      <>
      <NavBar/>
      <CardFrame />
      <MainPageFirstSection />
      <CardFrame />
      <WhatToDoSection />
      <CardFrame />
      <DonateSection />
      <CardFrame />
      </>
    ); 
  }
  
  export default HomePage