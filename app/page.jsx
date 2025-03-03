// pages/index.js
"use client";

import { useEffect } from "react";
import Head from "next/head";
import Photo from "@/components/ui/Photo";
import Social from "@/components/Social";
import { FiDownload } from "react-icons/fi";
import Stats from "@/components/ui/Stats";

const Home = () => {
  useEffect(() => {
    const loadParticles = async () => {
      await import("particles.js");
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          color: { value: "#ffffff" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
          },
          opacity: { value: 0.5, random: false },
          size: { value: 2, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#90ee90", // Light Green
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: { opacity: 1 },
            },
          },
        },
        retina_detect: true,
      });
    };
    loadParticles();
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sridharan_CV.pdf";
    link.download = "Sridharan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <title>Background Lines</title>
      </Head>
      <div id="particles-js" style={styles.particles}></div>
      <section className="h-full relative z-10">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Aspiring Full Stack Developer</span>
              <h1 className="h1 mb-6">
                Hello I'm <br /> <span className="text-accent">Sridharan Selvarajan</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-accent rounded-full text-accent hover:bg-accent hover:text-black transition-all duration-300 uppercase"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </button>
                <div className="mb-8 xl:mb-0">
                  <Social 
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </>
  );
};

const styles = {
  particles: {
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
};

export default Home;
