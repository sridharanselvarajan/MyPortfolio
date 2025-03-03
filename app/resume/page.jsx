"use client";

import {FaHtml5, FaCss3, FaJs, FaReact,FaFigma, FaNodeJs,FaPython, FaC, FaJava } from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs} from "react-icons/si";
import { Particles } from "@tsparticles/react";


const about = {
    title: "About Me",
    description: "Hi, I'm Sridharan Selvarajan, an Artificial Intelligence and Data Science student passionate about software development, AI, and full-stack technologies. With expertise in React Native, Java, Python, and MySQL, I enjoy building impactful projects that solve real-world problems. I have developed solutions like a Career Guidance System, Safe and Economic Hazardous Waste Disposal and Recycling Methodology, and a Content Recommendation System. Additionally, I have participated in hackathons like i-Cube 4.0 and Vynfest-2k25, constantly exploring AI, Generative AI, Power BI, and competitive coding. Let's connect and innovate together!",
    
    info: [
        { fieldname: "Full Name", fieldValue: "Sridharan Selvarajan" },
        { fieldname: "Phone", fieldValue: "+91 9345888109" },
        { fieldname: "Experience", fieldValue: "2 Years Experience" },
        { fieldname: "Email", fieldValue: "sriselvan05@gmail.com" },
        { fieldname: "Nationality", fieldValue: "Indian" },
        { fieldname: "Education", fieldValue: "B.Tech - AI-DS" },
        { fieldname: "College", fieldValue: "Sri Eshwar College of Engineering" },
        { fieldname: "Languages", fieldValue: "Tamil, English, Hindi" },
     // Add your GitHub link if available
    ]
}

// experence data

const experience = {
    icon: '/assets/resume/badge.svg',
    title:'My Experience',
    description: " Worked on React Native, Java, Python, and full-stack development, building projects like a Career Guidance System, Safe and economic hazardous waste disposal and recycling methodology, and Content Recommendation System. Participated in multiple hackathons events and tech competitions, gaining hands-on experience in AI, Generative AI, Power BI, and competitive coding",
    items: [
        {
            college:"Sri Eshwar college of Engineering",
            position:"Web Developer",
            duration:"2023-present",
        },
        {
            college:"Sri Eshwar college of Engineering",
            position:"Full Stack Developer",
            duration:"2023-present",
        }, {
            college:"Sri Eshwar college of Engineering",
            position:"Machine Learning Engineer",
            duration:"2023-present",
        }, {
            college:"Sri Eshwar college of Engineering",
            position:"Data Scientist ",
            duration:"2023-present",
        },
        {
            college:"Sri Eshwar college of Engineering",
            position:"AI - Engineer ",
            duration:"2023-present",
        },
        {
            college:"Sri Eshwar college of Engineering",
            position:"Cloud Engineer ",
            duration:"2023-present",
        }
    ]
}

//education
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: "Currently pursuing B.Tech in Artificial Intelligence and Data Science with a CGPA of 8.81 (upto 2nd semester). Passionate about AI, software development, and full-stack technologies. Participated in multiple Hackathons and other tech competitions, gaining hands-on experience in AI, Generative AI, Power BI, and competitive coding.",
    items: [
        {
            college: "Sri Eshwar College of Engineering",
            degree: "B.Tech AI-DS",
            duration: "2023 - 2027",
            cgpa: " 8.81 (upto 2nd semester)",
        },
        {
            college: "Venus Matric Higher Seccondary School",
            degree: "Higher Secondary (HSC)",
            duration: "2021 - 2023",
            result: "95%",
        },
        {
            college: "Venus Matric Higher Secondary School",
            degree: "Secondary School (SSLC)",
            duration: "2020 - 2021",
            result: "100%",
        },
    ]
};

const certifications = {
    icon: '/assets/resume/download.svg',
    title: 'My Certifications',
    description: "Earned multiple certifications in programming, data structures, algorithms, and web development, enhancing my skills in software development, AI, and problem-solving.",
    items: [
        {
            name: "C, C++, Python with Data Science, and Java",
            provider: "CODE GALATTA",
            year: 2024,
            link: "https://www.linkedin.com/posts/sridharan-selvarajan-b921162aa_excited-to-share-that-ive-successfully-activity-7230146722902020096-vp-E?utm_source=share&utm_medium=member_desktop"
        },
        {
            name: "Problem Solving (Basic)",
            provider: "HACKERRANK",
            year: 2024,
            link: "https://www.hackerrank.com/certificates/a0fdc1c0f62f"
        },
        {
            name: "Mastering Data Structures and Algorithms Using C and C++",
            provider: "UDEMY",
            year: 2024,
            link: "https://www.udemy.com/certificate/UC-3596e1a9-4a83-4a9a-8ccc-e82d42120f96/"
        },
        {
            name: "Python (Basic)",
            provider: "HACKERRANK",
            year: 2024,
            link: "https://www.hackerrank.com/certificates/850f8429e729"
        },
        {
            name: "CSS (Basic)",
            provider: "HACKERRANK",
            year: 2024,
            link: "https://www.hackerrank.com/certificates/a0e3c1589939"
        },
        {
            name: "Pandas",
            provider: "KAGGLE",
            year: 2024,
            link: "https://www.linkedin.com/posts/sridharan-selvarajan-b921162aa_kaggle-python-pandas-activity-7225908088195690496-XtWu?utm_source=share&utm_medium=member_desktop"
        },
        {
            name: "Python",
            provider: "GREAT LEARNING",
            year: 2024,
            link: "https://www.linkedin.com/posts/sridharan-selvarajan-b921162aa_greatlearning-python-matplotlib-activity-7225908581202571264-1Hka?utm_source=share&utm_medium=member_desktop"
        },
        {
            name: "Python",
            provider: "INFOSYS",
            year: 2024,
            link: "https://www.linkedin.com/posts/sridharan-selvarajan-b921162aa_pythonprogramming-infosysspringboard-certification-activity-7190334429024657408-vDtm?utm_source=share&utm_medium=member_desktop"
        },
        {
            name: "JavaScript",
            provider: "HACKERRANK",
            year: 2024,
            link: "https://www.hackerrank.com/certificates/adba8c031ea8"
        },
        {
            name: "C Programming",
            provider: "UDEMY",
            year: 2024,
            link: "https://www.udemy.com/certificate/UC-0e0be351-5f5c-4771-a75e-163347e6e2ea/"
        }
    ]
};

const skills  = {
    title: "My Skills",
    description: "I am proficient in HTML, CSS, JavaScript, React, React Native, Node.js with Express, MongoDB, C, C++, Java, and Python. He specializes in full-stack development and AI-driven solutions, building innovative and scalable applications.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html5",
        },
        {
            icon:<FaCss3 />,
            name: "css 3"
        },
        {
            icon:<FaJs />,
            name: "Javascript"
        },
        {
            icon:<FaReact />,
            name: "React.js"
        },
        {
            icon:<SiNextdotjs />,
            name: "next.js"
        },
        {
            icon:<SiTailwindcss />,
            name: "tailwind.css"
        },
        {
            icon:<FaNodeJs />,
            name: "Node.js"
        },
        {
            icon:<FaPython />,
            name: "Python"
        },
        {
            icon:<FaJava />,
            name: "Java Programming"
        },
    ]
}

const events = {
    icon: '/assets/resume/event.svg',
    title: 'My Events',
    description: "Actively participated in various hackathons, tech fests, and AI/ML conferences, enhancing my skills and networking with like-minded individuals.",
    items: [
        {
            name: "i-Cube 4.0 Hackathon",
            photo: "/assets/resume/icube4.0.jpg", // Add the correct path
            description: "iCUBE 4.0 is a 24-hour national-level hackathon by SVCE Science Club, fostering innovation through real-world problem-solving. We are proud to have won the Special Mention Award for our innovative and impactful solution.",
            participatedTime: "February 2025",
            address: "Sri Venkateshwara College of Engineering, Chennai."
        },
        {
            name: "Vynfest 2k25",
            photo: "/assets/resume/kpr.jpg",
            description: "VYNFEST 2K25 is a tech and creative fest by KPR Institute of Engineering and Technology, featuring a 24-hour hackathon, paper presentations, and workshops. It brings together innovation, learning, and competition.",
            participatedTime: "February 2025",
            address: "KPR Institute of Engineering and Technology, Coimbatore."
        },
        {
            name: "AI & ML Workshop",
            photo: "/assets/resume/cit.jpg",
            description: "Workshop on Learning & Augumented Reality. ",
            participatedTime: "March 2024",
            address: "Coimbatore Institute of Technology, Coimbatore."
        }
    ]
};


import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@radix-ui/react-tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';

import { motion } from 'framer-motion';


const resume =() =>{
    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
            >
                <div className="container mx-auto">
                    <Tabs defaultValue="experience"
                            className="flex flex-col xl:flex-row gap-[60px]">
                        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="certificates">Certificates</TabsTrigger>
                            <TabsTrigger value="events">Events</TabsTrigger>
                            <TabsTrigger value="about">About me</TabsTrigger>
                        </TabsList>

                        {/* content */}
                        <div className="min-h-[70vh] w-full">
                            <TabsContent value="experience" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {experience.description}
                                    </p>
                                    <ScrollArea className="h-[400px]">
                                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                            {experience.items.map((item, index) => {
                                                return (
                                                    <li 
                                                    key={index} 
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                    >
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                        <div className="flex items-center gap-3">
                                                            {/* dot */}
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className="text-white/60">{item.college}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            <TabsContent value="education" className="w-full h-[600px]"> 
                                <div className="flex flex-col gap-6 text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{education.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {education.description}
                                    </p>
                                    <ScrollArea className="h-[500px]"> {/* Increased height */}
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {education.items.map((item, index) => (
                                                <li 
                                                    key={index} 
                                                    className="bg-[#232329] min-h-[200px] py-8 px-8 rounded-xl flex flex-col justify-between items-start"
                                                >
                                                    <span className="text-accent font-semibold">{item.duration}</span>
                                                    <h3 className="text-lg font-bold">{item.degree}</h3>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.college}</p>
                                                    </div>
                                                    
                                                    {item.cgpa && <p className="text-white/60">CGPA: {item.cgpa}</p>}
                                                    {item.result && <p className="text-white/60">Result: {item.result}</p>}
                                                </li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>



                            <TabsContent value="skills" className="w-full">
                                <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                            {skills.description}
                                        </p>
                                    </div>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {skills.skillList.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300" >{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </TabsContent>

                            <TabsContent value="certificates" className="w-full h-[600px]">
                                <div className="flex flex-col gap-6 text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{certifications.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {certifications.description}
                                    </p>
                                    <ScrollArea className="h-[500px]"> {/* Increased height */}
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {certifications.items.map((cert, index) => (
                                                <li 
                                                    key={index} 
                                                    className="bg-[#232329] min-h-[200px] py-8 px-8 rounded-xl flex flex-col justify-between items-start"
                                                >
                                                    <h3 className="text-lg font-bold">{cert.name}</h3>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{cert.provider} - {cert.year}</p>
                                                    </div>
                                                    <a  
                                                        href={cert.link}  
                                                        target="_blank"  
                                                        rel="noopener noreferrer"  
                                                        className="flex items-center gap-2 px-4 py-2 border-2 border-accent rounded-full text-accent hover:bg-accent hover:text-black transition-all duration-300 uppercase text-sm"
                                                        >  
                                                        View Certificate  
                                                        </a>

                                                </li>
                                            ))}
                                        </ul>
                                    </ScrollArea>
                                </div>
                            </TabsContent>

                            <TabsContent value="about" className="w-full text-center xl:text-left">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold">{about.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                    
                                    {/* Grid Layout for Proper Alignment */}
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-[700px] mx-auto xl:mx-0">
                                        {about.info.map((item, index) => (
                                            <li key={index} className="grid grid-cols-2 items-center">
                                                <span className="text-white/60 font-semibold">{item.fieldname}:</span>
                                                <span className="text-xl text-white font-medium">{item.fieldValue}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </TabsContent>


                            <TabsContent value="events" className="w-full h-[600px]">
                            <div className="flex flex-col gap-6 text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{events.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {events.description}
                                </p>
                                <ScrollArea className="h-[500px]"> {/* Increased height for scrolling */}
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {events.items.map((event, index) => (
                                            <li 
                                                key={index} 
                                                className="bg-[#232329] min-h-[250px] py-8 px-8 rounded-xl flex flex-col justify-between items-start"
                                            >
                                                <img 
                                                    src={event.photo} 
                                                    alt={event.name} 
                                                    className="w-full h-[150px] object-cover rounded-lg mb-4"
                                                />
                                                <h3 className="text-lg font-bold">{event.name}</h3>
                                                <p className="text-white/60 text-sm">{event.description}</p>
                                                <div className="flex flex-col mt-2 text-white/60 text-sm">
                                                    <span><strong>Time:</strong> {event.participatedTime}</span>
                                                    <span><strong>Location:</strong> {event.address}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        </div>
                    </Tabs>
                </div>
            </motion.div>
    )
}
export default resume;