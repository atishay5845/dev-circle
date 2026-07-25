import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Body = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
       {/* //any child will be rendered */}
    </div>
  )
}
export default Body;