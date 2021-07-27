import NavBar from "../components/index/NavBar"
import Footer from "../components/Footer/Footer";
import DonateSection from "../components/index/DonateSection";
import MainPageFirstSection from "../components/index/MainPageFirstSection"
import WhatToDoSection from "../components/index/WhatToDoSection";
import { CardFrame } from "../styles/index/MainPage";
import { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const getProfile = async () => {
    const response = await axios.get('https://yugicardsbackend.herokuapp.com/profile')
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