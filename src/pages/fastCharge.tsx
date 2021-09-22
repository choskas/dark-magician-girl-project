import ChargeSection from "../components/fastCharge/ChargeSection"
import TitleFastCharge from "../components/fastCharge/TitleFastCharge"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/index/NavBar"
import { CardFrame } from "../styles/index/MainPage"

const FastCharge = () => (
    <>
    <NavBar />
        <CardFrame />
        <TitleFastCharge />
        <ChargeSection />
    </>
)

export default FastCharge