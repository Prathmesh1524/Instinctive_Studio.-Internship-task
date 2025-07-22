import Image from "next/image"
import Logo from "../assets/Logo.png"
import dash1 from "../assets/dash1.png"
import dash2 from "../assets/dash2.png"
import dash3 from "../assets/dash3.png"
import dash4 from "../assets/dash5.png"
import dash5 from "../assets/dash4.png"
import userimg from "../assets/UserIm.png"
import Link from "next/link"

import { FaAngleDown } from "react-icons/fa6";

import type { StaticImageData } from "next/image";

type NavItem = {
    img: StaticImageData; // if you're using `import dash1 from "@/assets/img.png"`
    alt: string;
    text: string;
    href: string;
  };
export const Navbar = () => {
    return(
        <>
      <div className="flex justify-between px-6 ">
        <div>
            <Image className="mt-5 ml-10" src={Logo} alt="logo"></Image>
        </div>
        <div className="dashtext flex  gap-10 ml-11 ">
            {navitems.map((items:NavItem,index:number)=>(
                <div key={index} className="flex items-center gap-1.5">
                    <Image src={items.img} alt={items.alt}></Image>
                    <Link href={items.href}>{items.text}</Link>
                </div>
            ))}
      
        </div>
        <div className="">
          <div className="flex gap-5 w-70 mb-3">
                <Image src={userimg} alt="userimg" className="rounded-full h-12 w-26"/>
                Mohammed Ajhas
                ajhas@mandlac.com
                <FaAngleDown  className="text-4xl mr-12 mt-2"/>
       </div>
           
        </div>
      </div>
        </>
    )
}



const navitems= [
    {img:dash1, alt:"img1",text:"Dashbord", href:"/"},
    {img:dash2, alt:"img",text:"cameras", href:"/"},
    {img:dash3, alt:"img1",text:"Scendce", href:"/"},
    {img:dash4, alt:"img1",text:"Incedentes", href:"/"},
    {img:dash5, alt:"img1",text:"Users", href:"/"},

]