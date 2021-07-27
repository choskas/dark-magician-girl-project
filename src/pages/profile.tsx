import axios from "axios"
import { useEffect } from "react"

const Profile = () => {
const getProfile = async () => {
    const response = await fetch('https://yugicardsbackend.herokuapp.com/profile', {credentials: 'include'})
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