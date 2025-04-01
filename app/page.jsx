"use client";
import { useCallback } from "react";
import Head from "next/head";
import Photo from "@/components/ui/Photo";
import Social from "@/components/Social";
import { FiDownload } from "react-icons/fi";
import Stats from "@/components/ui/Stats";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
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
        <title>Sridharan Selvarajan - Full Stack Developer</title>
      </Head>
      
      {/* Particles Background */}
      <Particles
        id="tsparticles-home"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1
          },
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
            },
            opacity: { value: 0.5, random: false },
            size: { value: 2, random: true },
            links: {
              enable: true,
              distance: 150,
              color: "#90ee90",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outModes: "out",
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
          retina_detect: true,
        }}
      />

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

export default Home;