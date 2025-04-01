"use client";
import { useEffect, useCallback } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'I build modern, responsive, and user-friendly web applications using React.js, Tailwind CSS, Node.js, and MongoDB. My focus is on creating seamless, scalable, and visually appealing digital experiences.',
        href: "https://www.linkedin.com/in/sridharan-selvarajan-b921162aa/"
    },
    {
        num: '02',
        title: 'Machine Learning Engineer',
        description: 'I develop intelligent models using Python, TensorFlow, and scikit-learn to analyze data, make predictions, and automate decision-making processes for real-world applications.',
        href: "https://www.linkedin.com/in/sridharan-selvarajan-b921162aa/"
    },
    {
        num: '03',
        title: 'Mobile App Development',
        description: 'I create cross-platform mobile applications using React Native, delivering smooth, high-performance, and user-friendly experiences for Android and iOS devices.',
        href: "https://www.linkedin.com/in/sridharan-selvarajan-b921162aa/"
    },
    {
        num: '04',
        title: 'Data Scientist',
        description: 'I explore data-driven insights using Python, Pandas, NumPy, and visualization tools like Matplotlib and Power BI to help make informed decisions.',
        href: "https://www.linkedin.com/in/sridharan-selvarajan-b921162aa/"
    }
];

const Services = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <section className="relative min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            {/* Particles Background */}
            <Particles
                id="tsparticles"
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

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div 
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link 
                                        href={service.href}
                                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>
                                {/* description */}
                                <p className="text-white/60">{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;