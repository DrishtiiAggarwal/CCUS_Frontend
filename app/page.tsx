"use client"
import Image from "next/image";
//import world from "@/assets/images/world_map.png"
import ccus_1 from "@/assets/images/ccus_1.jpeg"
import ccus_2 from "@/assets/images/ccus_2.jpg"
 
export default function Home() {
  return (
    <div className="text-gray-300">
      {/* <Image src={ccus_2} alt="ccus_image" className="mx-auto w-full mb-6"/> */}
      {/* <Image src={world} alt="worldmap" className="max-sm:hidden"/> */}
      {/* <Image src={ccus_1} alt="worldmap" className="sm:hidden"/> */}
      <div className="p-10 max-md:px-5">
        <div className="text-4xl text-center font-medium mb-10">Carbon Capture, Utilization, and Storage</div>
        {/* <Image src={ccus_2} alt="ccus_image" className="mx-auto w-50 mb-6"/> */}
        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              What is CCUS?
            </h2>
            <p className="text-gray-300">
              Carbon Capture, Utilization, and Storage (CCUS) is an innovative technology designed to significantly reduce carbon dioxide (CO₂) emissions from industries and power generation. By capturing CO₂ before it reaches the atmosphere, CCUS helps mitigate the impact of greenhouse gases, thus playing a crucial role in the fight against climate change. This technology not only captures carbon emissions but also explores innovative ways to utilize and store CO₂ safely.
            </p>
          </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              How Does CCUS Work?
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Capture</strong>: CO₂ is captured from industrial processes, power plants, or directly from the air using advanced technologies. The captured CO₂ is then purified and compressed for transport.
              </li>
              <li>
                <strong>Utilization</strong>: The captured CO₂ is repurposed for various industrial applications, such as enhancing oil recovery, producing synthetic fuels, or manufacturing building materials like concrete. This process transforms CO₂ from a harmful waste product into a valuable resource.
              </li>
              <li>
                <strong>Storage</strong>: The remaining CO₂ is transported via pipelines or ships to secure underground storage sites. These sites include depleted oil and gas reservoirs, deep saline formations, or unmineable coal seams.
              </li>
            </ul>
          </section>
          <Image src={ccus_2} alt="ccus_image" className="mx-auto w-26 mb-6"/>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              Why is CCUS Important?
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Reducing Greenhouse Gas Emissions</strong>: CCUS can capture up to 90% of CO₂ emissions from power plants and industrial sources, significantly reducing their carbon footprint.
              </li>
              <li>
                <strong>Supporting Clean Energy Transition</strong>: CCUS provides a bridge by reducing emissions from existing fossil fuel infrastructure, making energy production cleaner and more sustainable.
              </li>
              <li>
                <strong>Enhancing Economic Opportunities</strong>: By turning captured CO₂ into valuable products, CCUS drives innovation in various sectors, creating new market opportunities and jobs.
              </li>
              <li>
                <strong>Meeting Global Climate Goals</strong>: CCUS aligns with international climate agreements, helping countries meet their carbon reduction targets and keep global warming below 1.5°C.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              Applications of CCUS
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Power Generation</strong>: Capturing CO₂ from coal, natural gas, and biomass power plants to minimize emissions.
              </li>
              <li>
                <strong>Industrial Processes</strong>: Reducing emissions from steel, cement, and chemical manufacturing industries, which are among the hardest to decarbonize.
              </li>
              <li>
                <strong>Direct Air Capture (DAC)</strong>: Extracting CO₂ directly from the atmosphere, offering a solution to achieve negative emissions.
              </li>
              <li>
                <strong>Enhanced Oil Recovery (EOR)</strong>: Utilizing captured CO₂ to improve oil extraction efficiency while storing the CO₂ underground.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-300 mb-4">
              The Future of CCUS
            </h2>
            <p className="text-gray-300">
              The adoption of CCUS is expanding globally, with significant investments in research, innovation, and large-scale projects. As the world moves towards a sustainable future, CCUS will play a critical role in achieving carbon neutrality. By integrating CCUS into our energy and industrial sectors, we can protect our environment, foster economic growth, and secure a cleaner, more sustainable planet for future generations.
            </p>
          </section>
      </div>

      
      <div className="mx-auto w-fit max-w-[100vw] text-6xl relative max-2xl:scale-[260%] max-xl:scale-[210%] max-lg:scale-[150%] top-[50px] h-8 text-[#686868] font-extrabold overflow-hidden scale-[300%] max-md:scale-[125%] max-sm:scale-[120%] max-[510px]:text-4xl">Carbon Capture</div>
    </div>
  );
}
