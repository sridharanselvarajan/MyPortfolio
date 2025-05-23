"use client";
import { motion } from "framer-motion";
import React, { useState, useCallback } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const projects = [
    {
        num: "01",
        category: "Mern Stack Development",
        title:"project 1",
        description:"The Expense Tracker Application is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It helps users efficiently manage their finances by tracking daily expenses, categorizing transactions, and providing insightful analytics.",
        stack: [{name:"Node.js"},{name:"react.js"}, {name: "MongoDB"},{name:"Express js"}],
        image:"/assets/work/thumb4.png",
        live: "",
        github:"https://github.com/sridharanselvarajan/EXPENSE-TRACKER-NEW",
    },
    {
        num: "02",
        category: "Machine Learning",
        title:"project 2",
        description:"Image Recognition for wildlife conservation",
        stack: [{name:"YOLO v8"},{name:"Image Processing"}],
        image:"/assets/work/Image.png",
        live: "",
        github:"https://github.com/sridharanselvarajan/crud-",
    },
    {
        num:"03",
        category:"Full Stack Developement",
        title:"project 3",
        description:"Safe and Economic hazardous waste disposal and recycling methodology",
        stack: [{name:"Node.js"},{name:"react.js"}, {name: "MongoDB"},{name:"Express js"}],
        image:"/assets/work/Waste.png",
        live:"",
        github:"https://github.com/sridharanselvarajan/green-loop-main",
    },
    {
        num: "03",
        category: "Frontend",
        title:"project 3",
        description:"Basic Crud operation frontend implementation using react.js",
        stack: [{name:"react.js"}, {name: "Css 3"}, {name: "Javascript"}],
        image:"/assets/work/thumb1.png",
        live: "",
        github:"https://github.com/sridharanselvarajan/crud-",
    },
    {
        num: "03",
        category: "Backend",
        title:"project 3",
        description:"Basic Crud operation Backend implementation using node js with express",
        stack: [{name:"Node.js"}, {name:"react.js"}, {name: "Css 3"}, {name: "Javascript"}],
        image:"/assets/work/thumb2.png",
        live: "",
        github:"https://github.com/sridharanselvarajan/crudbackend",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <>
            {/* Particles Background */}
            <Particles
                id="tsparticles-work"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: -1
                    },
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: { value: "#ffffff" },
                        shape: {
                            type: "circle",
                        },
                        opacity: { value: 0.3, random: false },
                        size: { value: 3, random: true },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "#90ee90",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 1,
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
                                distance: 140,
                                links: {
                                    opacity: 1,
                                },
                            },
                            push: {
                                quantity: 3,
                            },
                        },
                    },
                    retina_detect: true,
                }}
            />

            <motion.section
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
                }}
                className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 relative z-10"
            >
                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                            <div className="flex flex-col gap-[30px] h-[50%]">
                                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                    {project.num}
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                    {project.category} project
                                </h2>
                                <p className="text-white/60">{project.description}</p>
                                <ul className="flex gap-4">
                                    {project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className="text-xl text-accent">
                                                {item.name}
                                                {index !== project.stack.length - 1 && ","}
                                            </li>
                                        )
                                    })}
                                </ul>

                                <div className="border border-white/20"></div>
                                <div className="flex items-center gap-4">
                                    <Link href={project.live}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live Project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>

                                    <Link href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-[50%]">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                className="xl:h-[520px] mb-12"
                                onSlideChange={handleSlideChange}
                            >
                                {projects.map((project, index) => {
                                    return (
                                        <SwiperSlide key={index} className="w-full">
                                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={project.image}
                                                        fill
                                                        className="object-cover"
                                                        alt={project.title}
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                                <WorkSliderBtns 
                                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                />
                            </Swiper>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
}

export default Work;