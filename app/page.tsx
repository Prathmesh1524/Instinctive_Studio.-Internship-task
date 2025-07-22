import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { CameraContent } from "./components/CamaraContent";

export default function Home() {
  return (

   <div className="h-screen body">
    <div className="border-1 border-bottom pt-5 border-white/15">
      <Navbar/>
    </div>
    <div >

    <CameraContent/>
    </div>
   </div>
  );
}
