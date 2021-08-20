import NavBar from "../components/index/NavBar";
import Footer from "../components/Footer/Footer";
import DonateSection from "../components/index/DonateSection";
import MainPageFirstSection from "../components/index/MainPageFirstSection";
import WhatToDoSection from "../components/index/WhatToDoSection";
import { CardFrame } from "../styles/index/MainPage";

const HomePage = () => {
  console.log('this is dev')
  return (
    <>
      <NavBar />
      <CardFrame />
      <MainPageFirstSection />
      <CardFrame />
      <WhatToDoSection />
      <CardFrame />
      <DonateSection />
      <CardFrame />
      <Footer />
    </>
  );
};

export default HomePage;
