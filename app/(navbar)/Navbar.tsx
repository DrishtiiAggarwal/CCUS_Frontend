"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "@/assets/images/logo.webp";
import { useRouter, usePathname } from "next/navigation";
import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Close, Home, Leaderboard, TrendingUp } from "@mui/icons-material";

function Navbar() {
  const links = [
    { name: "home", path: "/", icon: <Home /> },
    { name: "leaderboard", path: "/leaderboard", icon: <Leaderboard /> },
    { name: "analytics", path: "/analytics", icon: <TrendingUp /> },
  ];
  const [selected, setSelected] = useState("home");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentLink = links.find((link) => link.path === pathname);
    if (currentLink) {
      setSelected(currentLink.name);
    }
  }, [pathname]);

  return (
    <>
      <div className="sticky top-0 h-10 z-10 bg-[#020817] py-9 px-4 text-2xl text-white flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="logo" height={30} width={30} className="mr-3" />
          <span>CCUS</span>
        </div>
        <div className="flex max-sm:hidden">
          {links.map((element, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(element.name);
                router.push(element.path);
              }}
              className={`capitalize mx-3 text-xl ${element.name === selected ? "text-blue-400" : ""}`}
            >
              <span className="relative -top-0.5">{element.icon}</span> {element.name}
            </div>
          ))}
        </div>
        <div className="scale-125 sm:hidden" onClick={() => setOpen(!open)}>
          <MenuIcon />
        </div>
      </div>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: "70%",
            backgroundColor: "#020817",
          },
        }}
      >
        <div className="h-screen px-5">
          <div className="flex pt-5 text-2xl justify-between">
            <div className="flex items-center text-white">
              <Image src={logo} alt="logo" height={30} width={30} className="mr-3" />
              <span>CCUS</span>
            </div>
            <Close
              onClick={() => setOpen(false)}
              sx={{ color: "white", width: "30px", height: "30px" }}
            />
          </div>
          <div className="text-white mt-10">
            {links.map((element, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelected(element.name);
                  router.push(element.path);
                }}
                className={`capitalize my-5 text-xl flex items-center ${element.name === selected ? "text-blue-400" : ""}`}
              >
                {element.icon}
                <span className="ml-2">{element.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;
