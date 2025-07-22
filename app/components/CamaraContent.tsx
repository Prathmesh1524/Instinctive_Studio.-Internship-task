import CamImg from "../assets/CamImg.png"
import Image from "next/image"
import clsx from 'clsx';
import { RightComp } from "./RIghComponent";

export const CameraContent = () => {

    return (
        <>  <section className="flex h-[60vh] items-center justify-between gap-7 pt-28">
        {/* left image */}
        

        <Image
            src={CamImg}    
            alt="Camera"
            className="h-[70vh] w-auto rounded-2xl object-cover shadow-lg pl-10"
            priority
            />
        
            {/* right panel */}
            <div className="h-[70vh] w-[620px] pr-10">
            <RightComp />
            </div>
        </section>
            
        </>
    )
}