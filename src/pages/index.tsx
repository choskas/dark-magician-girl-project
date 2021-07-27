import NavBar from "../components/index/NavBar"
import Footer from "../components/Footer/Footer";
import DonateSection from "../components/index/DonateSection";
import MainPageFirstSection from "../components/index/MainPageFirstSection"
import WhatToDoSection from "../components/index/WhatToDoSection";
import { CardFrame } from "../styles/index/MainPage";
import { useEffect } from "react";

const HomePage = () => {
  const getProfile = async () => {
    const response = await fetch('https://yugicardsbackend.herokuapp.com/profile', {credentials : 'same-origin'})
    console.log(response)
  }
  useEffect(() => {
    getProfile()
  },[])
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
      <Footer />
      </>
    ); 
  }
  
  export default HomePage