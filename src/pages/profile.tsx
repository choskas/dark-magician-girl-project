import { useSession } from "next-auth/client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/index/NavBar";
import { getAllUserDecks } from "../redux/modules/deck";

const Profile = () => {
  const [session, loading] = useSession();
  const dispatch = useDispatch()
  useEffect(() => {
    if (session){
    dispatch(getAllUserDecks(session.user.email))
    }
  }, [session])
  console.log(session)
return (
    <>
    <NavBar />
    profile
    <Footer />
    </>
)};

export default Profile;