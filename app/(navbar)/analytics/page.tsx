"use client";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { getCCUSData } from "@/app/actions/api";

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

Chart.register(CategoryScale);

type GraphData = {
  data: string;
  data_count: number;
};

function Analytics() {
  const [loading, setLoading] = useState(false);
  const [ccusData, setCcusData] = useState<ccusType[]>([]);
  const [countryVsProjects, setCountryVsProjects] = useState<GraphData[]>([]);
  const [projectStatusPie, setProjectStatusPie] = useState<GraphData[]>([]);
  const [regionPie, setRegionPie] = useState<GraphData[]>([]);
  const [countryVsA_Capacity, setCountryVsA_Capacity] = useState<GraphData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result: ccusType[] = await getCCUSData();
        setCcusData(result);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const fetchGraph = async () => {
    const projectsPerCountry = Object.entries(
      ccusData.reduce((acc: Record<string, number>, project: ccusType) => {
        project.country
          .split(",")
          .map((country) => country.trim())
          .forEach((country) => {
            if (acc[country]) {
              acc[country]++;
            } else {
              acc[country] = 1;
            }
          });
        return acc;
      }, {})
    ).map(([country, projectCount]) => ({
      data: country,
      data_count: projectCount,
    }));
    setCountryVsProjects(projectsPerCountry);
    const filterNonA_Cap = ccusData.filter((element: ccusType) => element.a_capacity !== null);
    const countryVsA_Cap = Object.entries(
      filterNonA_Cap.reduce((acc: Record<string, number>, project: ccusType) => {
        project.country
          .split(",")
          .map((country) => country.trim())
          .forEach((country) => {
            if (acc[country]) {
              acc[country] += parseFloat(project.a_capacity.toString());
            } else {
              acc[country] = parseFloat(project.a_capacity.toString());
            }
          });
        return acc;
      }, {})
    ).map(([country, projectCount]) => ({
      data: country,
      data_count: parseFloat(projectCount.toFixed(2)),
    }));
    setCountryVsA_Capacity(countryVsA_Cap);
    const projectStatusData=Object.entries(ccusData.reduce((acc:Record<string,number>,project:ccusType)=>{
      if(acc[project.project_status]){
        acc[project.project_status]+=1;
      }
      else{
        acc[project.project_status]=1;
      }
      return acc;
    },{})).map(([project_status,projectCount])=>(
      {
        data:project_status,
        data_count:projectCount
      }
    ))
    setProjectStatusPie(projectStatusData);
    const regionData=Object.entries(ccusData.reduce((acc:Record<string,number>,project:ccusType)=>{
      if(acc[project.region]){
        acc[project.region]+=1;
      }
      else{
        acc[project.region]=1;
      }
      return acc;
    },{})).map(([region,projectCount])=>(
      {
        data:region,
        data_count:projectCount
      }
    ))
    setRegionPie(regionData);
    setLoading(false);
  };

  useEffect(() => {
    if (ccusData.length !== 0) {
      fetchGraph();
    }
  }, [ccusData]);

  return (
    <div className="p-5 max-lg:p-1 ">
      <div className="text-4xl text-white mx-5 px-5 flex justify-between items-center font-semibold max-lg:px-2 max-lg:mx-0">
        <div className={`${loading && "animate-pulse"} mx-auto`}> Analytics</div>
      </div>

      <div className=" m-5 rounded-xl p-5 max-lg:m-0 max-lg:p-2">
        <div className="grid grid-cols-1 gap-5 mt-5 max-xl:grid-cols-1">
          {loading && (
            <div className="p-5 animate-pulse shadow-md w-full xl:h-[45vh] border flex flex-col gap-y-5 py-6 rounded-xl max-lg:p-0">
              <div className="w-36 h-5 rounded-2xl bg-gray-200"></div>
              <div className="w-full h-full bg-gray-200 rounded-md"></div>
            </div>
          )}
          {!loading && (
            <div className="p-5 shadow-md w-full border rounded-xl max-lg:p-0">
              <LineChart
                theme="blue"
                chartData={countryVsProjects}
                title={`Country Vs Number of CCUS Projects`}
              />
            </div>
          )}
          {loading && (
            <div className="p-5 animate-pulse shadow-md w-full xl:h-[45vh] border flex flex-col gap-y-5 py-6 rounded-xl max-lg:p-0">
              <div className="w-36 h-5 rounded-2xl bg-gray-200"></div>
              <div className="w-full h-full bg-gray-200 rounded-md"></div>
            </div>
          )}
          {!loading && (
            <div className="p-5 shadow-md w-full border rounded-xl max-lg:p-0">
              <PieChart chartData={projectStatusPie} title={`Project Status `} />
            </div>
          )}
          
          {loading && (
            <div className="p-5 animate-pulse shadow-md w-full xl:h-[45vh] border flex flex-col gap-y-5 py-6 rounded-xl max-lg:p-0">
              <div className="w-36 h-5 rounded-2xl bg-gray-200"></div>
              <div className="w-full h-full bg-gray-200 rounded-md"></div>
            </div>
          )}
          {!loading && (
            <div className="p-5 shadow-md w-full  border rounded-xl max-lg:p-0">
              <LineChart
                theme="cyan"
                chartData={countryVsA_Capacity}
                title={`Country Vs Announced CO2 Capturing Per Year (Mt)`}
              />
            </div>
          )}
          {loading && (
            <div className="p-5 animate-pulse shadow-md w-full xl:h-[45vh] border flex flex-col gap-y-5 py-6 rounded-xl max-lg:p-0">
              <div className="w-36 h-5 rounded-2xl bg-gray-200"></div>
              <div className="w-full h-full bg-gray-200 rounded-md"></div>
            </div>
          )}
          {!loading && (
            <div className="p-5 shadow-md w-full border rounded-xl max-lg:p-0">
              <PieChart chartData={regionPie} title={`Region `} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
