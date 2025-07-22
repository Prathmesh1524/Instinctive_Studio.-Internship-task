import Image from "next/image";
import rightImg from "../assets/rightimg.png";
import rightLogo from "../assets/rightlogo.png";
import { FaCheckDouble } from "react-icons/fa6";
import listimg1 from "../assets/ListImg1.png"
import listimg2 from "../assets/ListImg2.png"
import listimg3 from "../assets/ListImg3.png"
import listimg4 from "../assets/ListImg4.png"
import { FaChevronRight } from "react-icons/fa";
import { StaticImageData } from "next/image";
import titleimg from "../assets/titleicon.png"
import timeimg from "../assets/time.png"
import camimg from "../assets/camlogo.png"


export const RightComp = () => {


  type ListType = {
    img: StaticImageData;
    alt: string;
    text: string;
    href: string;
    title: string;
    TimeDate: string;

  };
  return (
    <div className="flex flex-col h-full border border-slate-500 p-6 text-white shadow-2xl bg-[#111] rounded-lg space-y-6">

      {/* Header Row */}
      <div className="flex justify-between items-start">
        {/* Left: Icon + Text */}
        <div className="flex items-center gap-3">
          <Image
            src={rightImg}
            alt="icon"
            width={28}
            height={24}
            className=""
          />
          <span className="font-semibold text-base">
            15 Unresolved Incidents
          </span>
        </div>

        {/* Right: Logo + Resolved Badge */}
        <div className="flex items-center gap-3">
          <Image
            src={rightLogo}
            alt="logo"
            width={42}
            height={38}
            className=""
          />
          <div className="flex items-center gap-2 border px-3 py-1.5 rounded-full bg-black text-xs border-slate-400">
            <FaCheckDouble className="text-green-500 text-sm" />
            <span className="text-white">4 resolved incidents</span>
          </div>
        </div>
      </div>


      {/* <div className="gap-3">
        <p>📋 Incident list goes here...</p>
        <div>
       {ListItems.map((items,index)=>(
        <div key={index} className="flex justify-between gap-4 ">
          <Image className="gap-3" src={items.img} alt={items.alt}></Image>
          <div>

              <div>
                title
              </div>
          <div>{items.text}</div>
          </div>
          <div className="flex justify-end gap-3 text-amber-400">
          Resolve 
          <FaChevronRight  className="mt-2"/>
          </div>

        </div>
       ))}
        </div>
      </div> */}
      <div className="">

        {ListItems.map((item: ListType, index: number) => (
          <div
            key={index}
            className="flex items-center gap-6 p-3 hover:shadow-amber-50 hover:shadow-md cursor-pointer transition duration-200"
          ><div className="min-w-[70px] h-[70px]">
              <Image
                src={item.img}
                alt={item.alt}
                width={70}
                height={70}
                className="rounded-xl  w-full h-full"
              />
            </div>

            <div className="flex-1">
              {/* Title with Icon */}
              <div className="flex items-center gap-x-2">
                <Image
                  src={titleimg}
                  alt="Title Icon"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <div className="text-white text-xl font-bold">
                  {item.title || "Incident Title"}
                </div>
              </div>
             
                <div className="flex items-center mt-1 gap-x-2">
                <Image
                  src={camimg}
                  alt="cam Icon"
                  width={9}         
                  height={9}
                  className="object-contain"
                />
                      <div className="text-gray-400 text-sm mt-1">{item.text}</div>
              </div>
              <div className="flex items-center gap-x-2 mt-1">
                <Image
                  src={timeimg}
                  alt="Time Icon"
                  width={10}         
                  height={10}
                  className="object-contain"
                />
                <div className="text-gray-400 text-sm">{item.TimeDate}</div>
              </div>
            </div>


            {/* Action Button */}
            <button className="flex items-center gap-1 px-3 py-1.5 hover:cursor-pointer text-amber-400 font-semibold text-sm rounded-full  transition">
              Resolve <FaChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};



const ListItems = [
  { img: listimg1, alt: "img1", text: "Shop Floor Camera A", TimeDate: "14:35 - 14:37 on 7-Jul-2025", href: "/", title: "Unauthorised Access" },
  { img: listimg2, alt: "img", text: "Shop Floor Camera A", TimeDate: "14:35 - 14:37 on 7-Jul-2025", href: "/", title: "Gun Threat" },
  { img: listimg3, alt: "img1", text: "Shop Floor Camera A", TimeDate: "14:35 - 14:37 on 7-Jul-2025", href: "/", title: "Unauthorised Access" },
  { img: listimg4, alt: "img1", text: "Shop Floor Camera A", TimeDate: "14:35 - 14:37 on 7-Jul-2025", href: "/", title: "Unauthorised Access" },
]
