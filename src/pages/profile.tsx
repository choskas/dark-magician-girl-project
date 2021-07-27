import axios from "axios"
import { useEffect } from "react"

const Profile = () => {
const getProfile = async () => {
    const response = await axios.get('https://yugicardsbackend.herokuapp.com/profile', {withCredentials: true})
    console.log(response)
  }
  useEffect(() => {
    getProfile()
  },[])
return(
    <>
    PROFILE PAGE
    </>
)}

export default Profile;