"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2"; // Changed Pie to Doughnut

function DonutChart(props: any) {
  // Renamed PieChart to DonutChart
  const chartData = {
    labels: props.chartData.map((data: any) => data.data),
    datasets: [
      {
        label: "Project Status",
        data: props.chartData.map((data: any) => data.data_count),
        backgroundColor: [
          "#9E58C5",
          "#EF4A19",
          "#FAA549",
          "#31AD5E",
          "#0C68E9",
          "#FF57D2",
          "#FF9393",
        ],
        borderColor: [
          "#9E58C5",
          "#EF4A19",
          "#FAA549",
          "#31AD5E",
          "#0C68E9",
          "#FF57D2",
          "#FF9393",
        ],
        borderWidth: 1,
        offset: 10,
        hoverOffset: 30,
        cutout: 70,
      },
    ],
  };
  return (
    <div className="chart-container ">
      <div className="text-lg max-xl:text-center font-bold text-white capitalize">
        {props.title}
      </div>
      <div className="mx-auto ">
        <Doughnut
          className="mx-auto h-[20vh] overflow-visible" // Changed Pie to Doughnut
          data={chartData}
          options={{
            plugins: {
              // title: {
              //   display: true,
              //   text: `For the month of ${currentMonth}`,
              // },
              legend: {
                display: false,
                position:"bottom",
              },
            },
            cutout: "20%",
          }}
        />
      </div>
    </div>
  );
}

export default DonutChart; // Renamed export to DonutChart
