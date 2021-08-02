import axios from "axios";
import { useSession } from "next-auth/client";

const StoreOrClient = () => {
  const [session, loading] = useSession();
  const selectRole = async (selectedRole) => {
    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/selectRole`, {
      role: selectedRole,
      // @ts-ignore
      id: session.user.id,
    });
  };
  return (
    <>
      sotre or client
      <button onClick={() => selectRole("client")}>Im user</button>
      <button onClick={() => selectRole("store")}>Im store</button>
    </>
  );
};

export default StoreOrClient;
