"use client";

import { getCCUSData } from "@/app/actions/api";
import React, { useEffect, useState } from "react";

export type ccusType = {
  project_name: string;
  project_id: number;
  country: string;
  project_type: string;
  partner: string;
  announcement: number;
  fid: number;
  operation: number;
  project_status: string;
  a_capacity: number;
  e_capacity: number;
  sector: string;
  fate_of_carbon: string;
  region: string;
  ccus_hub: string;
};

type GraphData = {
  data: string;
  data_count: number;
};

function Leaderboard() {
  const [loading, setLoading] = useState(false);
  const [ccusData, setCcusData] = useState<ccusType[]>([]);
  const [countryVsA_Capacity, setCountryVsA_Capacity] = useState<GraphData[]>([]);
  const [countryVsProjects, setCountryVsProjects] = useState<GraphData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result: ccusType[] = await getCCUSData();
        setCcusData(result);

        const filterNonA_Cap = ccusData.filter((element) => element.a_capacity !== null);

        const countryVsA_Cap = Object.entries(
          filterNonA_Cap.reduce((acc: Record<string, number>, project) => {
            project.country
              .split(",")
              .map((country) => country.trim())
              .forEach((country) => {
                acc[country] = (acc[country] || 0) + parseFloat(project.a_capacity.toString());
              });
            return acc;
          }, {})
        ).map(([country, projectCount]) => ({
          data: country,
          data_count: parseFloat(projectCount.toFixed(2)),
        }));

        const sortedCountryVsA_Cap = countryVsA_Cap.sort((a, b) => b.data_count - a.data_count);
        setCountryVsA_Capacity(sortedCountryVsA_Cap);

        const projectsPerCountry = Object.entries(
          ccusData.reduce((acc: Record<string, number>, project: ccusType) => {
            project.country
              .split(",")
              .map((country) => country.trim())
              .forEach((country) => {
                acc[country] = (acc[country] || 0) + 1;
              });
            return acc;
          }, {})
        ).map(([country, projectCount]) => ({
          data: country,
          data_count: projectCount,
        }));

        setCountryVsProjects(projectsPerCountry);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto px-20 py-5">
      <div className="text-center text-white text-3xl my-5">Leader Board</div>
      
      <div className="bg-[#1A1D24] rounded-lg overflow-hidden">
        <div className="grid grid-cols-4 text-center text-sm text-gray-400 px-4 py-2 border-b border-gray-800">
          <div>Place</div>
          <div>Country</div>
          <div>Announced Capacity Of CO2 Per Year</div>
          <div>Number Of Projects</div>
        </div>
        {loading?<>{[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((entry, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-4 text-center animate-pulse border-b border-dashed items-center px-4 py-3 text-gray-200 hover:bg-[#212631] transition-colors"
            >
              <div className="h-7 w-32 rounded-lg mx-auto bg-gray-800 "></div>
              <div className="h-7 w-32 rounded-lg mx-auto bg-gray-800 "></div>
              <div className="h-7 w-32 rounded-lg mx-auto bg-gray-800 "></div>
              <div className="h-7 w-32 rounded-lg mx-auto bg-gray-800 "></div>
              
            </div>
          );
        })}</>:<>{countryVsA_Capacity.map((entry, index) => {
          const projectData = countryVsProjects.find((project) => project.data === entry.data);
          return (
            <div
              key={index}
              className="grid grid-cols-4 border-b border-dashed text-center items-center px-4 py-3 text-gray-200 hover:bg-[#212631] transition-colors"
            >
              <div>{index + 1}</div>
              <div>{entry.data}</div>
              <div>{entry.data_count}</div>
              <div>{projectData ? projectData.data_count : 0}</div>
            </div>
          );
        })}</>}
        
      </div>
    </div>
  );
}

export default Leaderboard;
