"use client";
import { useEffect } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { Particles } from "@tsparticles/react";


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

    return (
        <section className="relative min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            {/* Background Animation */}
            <div id="particles-js" style={styles.particles}></div>

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

const styles = {
    particles: {
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -1,
    },
};

export default Services;
