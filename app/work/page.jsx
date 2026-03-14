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
        category: "AI & Full Stack",
        title: "SAFE AND HAZARDOUS WASTE DISPOSAL AND RECYCLING TECHNOLOGY",
        description: "Developed an AI-based waste classification system with automated segregation and recycling insights. The project secured first prize in a national-level hackathon for innovation and real-world impact.",
        stack: [{name: "React"}, {name: "Node.js"}, {name: "Express"}, {name: "MongoDB"}, {name: "React Native"}, {name: "YOLO"}],
        image: "/assets/work/Waste.png",
        live: "https://green-loop-kongu.vercel.app/",
        github: "https://github.com/sridharanselvarajan/green-loop-kongu",
    },
    {
        num: "02",
        category: "AI & Machine Learning",
        title: "AI-POWERED FOOD ANALYZER & CALORIE TRACKER",
        description: "Built an intelligent system that identifies food from images, analyzes nutrition, and generates personalized dietary insights. Helps users maintain healthy eating habits through recommendations and progress tracking.",
        stack: [{name: "Streamlit"}, {name: "Python"}, {name: "TensorFlow"}, {name: "Scikit-learn"}, {name: "Plotly"}],
        image: "/assets/work/food-analyser.png",
        live: "https://nutrivision-uamztnqc2tjxpwewady8cv.streamlit.app/",
        github: "https://github.com/sridharanselvarajan/NutriVision",
    },
    {
        num: "03",
        category: "AI & Full Stack",
        title: "SMARTHIRE - INTERVIEW RECRUITMENT APP",
        description: "Created an AI-driven recruitment platform enabling dynamic voice-based interviews conducted by an AI agent. Improved hiring efficiency with automated generated questions and enhanced candidate experience.",
        stack: [{name: "React"}, {name: "Next.js"}, {name: "Supabase"}, {name: "Vapi"}],
        image: "/assets/work/interview.png",
        live: "https://interview-recruitment-app.vercel.app/",
        github: "https://github.com/sridharanselvarajan/Interview-Recruitment-App",
    },
    {
        num: "04",
        category: "MERN Stack",
        title: "EXPENSE TRACKER APPLICATION",
        description: "Developed a full-stack expense tracker using MERN stack, featuring real-time tracking categorization, and expense analytics. The app offers a user-friendly interface to manage and visualize spending patterns efficiently.",
        stack: [{name: "MongoDB"}, {name: "Express"}, {name: "React"}, {name: "Node.js"}],
        image: "/assets/work/expense.png",
        live: "https://expense-tracker-pjkyfbxwl-sridharan-selvarajans-projects.vercel.app/",
        github: "https://github.com/sridharanselvarajan/EXPENSE-TRACKER-NEW",
    },
    {
        num: "05",
        category: "MERN Stack",
        title: "CAMPUSLINK - A SMART CAMPUS COMPANION",
        description: "Built a full-stack campus management platform using MERN stack with role-based authentication for students and admins. Features include announcements, lost & found, timetable scheduler, complaint tracking, tech news, polls, and skill management.",
        stack: [{name: "MongoDB"}, {name: "Express"}, {name: "React"}, {name: "Node.js"}],
        image: "/assets/work/campuslink.png",
        live: "https://campuslink-front.vercel.app/",
        github: "https://github.com/sridharanselvarajan/campuslink",
    },
    {
        num: "06",
        category: "Machine Learning",
        title:"Image Recognition for wildlife conservation (Submitted to IEEE Conference)",
        description:"An AI-powered system that uses YOLOv8 and image processing techniques to automatically detect and recognize wildlife species from images to support conservation and monitoring efforts. 🌿🦌",
        stack: [{name:"YOLO v8"},{name:"Image Processing"}],
        image:"/assets/work/Image.png",
        live: "https://ieeexplore.ieee.org/abstract/document/10927859",
        github:"https://github.com/sridharanselvarajan/crud-",
    }
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