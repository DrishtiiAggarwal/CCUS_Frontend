import Image from "next/image";
import world from "@/assets/images/world_map.png"
import world_small from "@/assets/images/world_map_small.png"
import ccus_image from "@/assets/images/ccus_image.png"
 
export default function Home() {
  return (
    <div className="text-white">
      <Image src={world} alt="worldmap" className="max-sm:hidden"/>
      <Image src={world_small} alt="worldmap" className="sm:hidden"/>
      <div className="p-10 max-md:px-5">
        <div className="text-4xl text-center font-medium mb-10">Carbon Capture <span className="text-[#85E0A3]">and</span> utilization</div>
        <Image src={ccus_image} alt="ccus_image" className="mx-auto w-full"/>
        <div className="my-5 text-2xl">What is CCUS and <span className="text-[#FFAFA3]">CCUS worldwide</span>?</div>
        <p className="text-xl text-justify"><span className="text-[#FFC470]">Carbon capture</span> involves the capturing of anthropogenic waste CO2, transporting it to a storage site and depositing it into sinks such a geological reservoirs or aquifers, where it cannot enter the atmosphere. <span className="text-[#FFC470]">Carbon Capture and Storage</span> (CCS) /CCUS can be applied to large point sources such as fossil fuel energy facilities like the natural gas-powered plants located in Trinidad. After capturing the CO2 , it is then compressed and transported for geological storage. Pipelines are preferred for transporting large amounts of CO2 for distances around 1000km. If the volume of CO2 is smaller than a few million tonnes per year then ships/trucks are economically favoured (Intergovernmental Panel on Climate Change, 2005). After the CO2 is injected into the subsurface, it will rise until it is trapped by some impermeable layer or cap rock where it is stored for millions of years.</p>
      </div>
      <div className="mx-auto w-fit max-w-[100vw] text-6xl relative max-2xl:scale-[260%] max-xl:scale-[210%] max-lg:scale-[150%] top-[50px] h-8 text-[#FFFFFF] font-extrabold overflow-hidden scale-[300%] max-md:scale-[125%] max-sm:scale-[120%] max-[510px]:text-4xl">Carbon Capture</div>
    </div>
  );
}
