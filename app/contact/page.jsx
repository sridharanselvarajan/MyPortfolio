    "use client";

    import { useEffect, useState } from "react";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { Textarea } from "@/components/ui/textarea";

    import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    } from "@/components/ui/select";

    import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
    import { motion } from "framer-motion";

    import emailjs from "@emailjs/browser";


    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            "service_jwu0v2s",
            "template_skp9xfl",
            e.target,
            "5LVHv55bqv5oO4WmC"
        )
        .then((response) => {
            console.log("Email sent successfully:", response);
            alert("Message sent successfully!");
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Failed to send message.");
        });
    };
    

    const Contact = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    const [service, setService] = useState("");

    const [selectedService, setSelectedService] = useState("");

    const info = [
        {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+91 9345888109",
        },
        {
        icon: <FaEnvelope />,
        title: "Email",
        description: "sriselvan05@gmail.com",
        },
        {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "22/1, Elamiyakinar Koil Street, Chidambaram - 608001, Cuddalore, TamilNadu.",
        },
    ];

    if (!mounted) return null; // Prevents hydration mismatch

    return (
        <motion.section
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
        >
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-8">
            <div className="xl:w-1/2 order-2 xl:order-none">
                <form onSubmit={handleSubmit}  className="flex flex-col gap-6 p-10 bg-[#272727] rounded-xl">
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">
                    Got an exciting project in mind? Let's bring it to life! Whether you have a question, collaboration idea, or just want to say hello, feel free to drop me a message. I'll get back to you as soon as possible!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="text" name="first_name"  placeholder="First Name" />
                    <Input type="text" name="last_name"  placeholder="Last Name" />
                    <Input type="email" name="email"  placeholder="Email address" />
                    <Input type="tel" name="phone"  placeholder="Phone number" />
                </div>
                <Select onValueChange={(value) => setSelectedService(value)}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Services</SelectLabel>
                        <SelectItem value="web-dev">Web Development</SelectItem>
                        <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                        <SelectItem value="logo-design">Logo Design</SelectItem>
                        <SelectItem value="app-dev">Mobile App Development</SelectItem>
                        <SelectItem value="cloud-engineer">Cloud Engineering</SelectItem>
                        <SelectItem value="data-science">Data Science & Analytics</SelectItem>
                        <SelectItem value="machine-learning">Machine Learning & AI</SelectItem>
                        <SelectItem value="cyber-security">Cybersecurity Solutions</SelectItem>
                        <SelectItem value="devops">DevOps & Automation</SelectItem>
                        <SelectItem value="blockchain">Blockchain Development</SelectItem>
                        <SelectItem value="iot">Internet of Things (IoT)</SelectItem>
                        <SelectItem value="ar-vr">AR/VR Development</SelectItem>
                        <SelectItem value="embedded-systems">Embedded Systems</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            {/* Hidden input to send the selected service via EmailJS */}
            <input type="hidden" name="service" value={selectedService} />

                <Textarea className="h-[200px]" name="message" placeholder="Type your message here" />

                <Button className="max-w-40">
                    Send Message
                </Button>
                </form>
            </div>

            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                    <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
        </motion.section>
    );
    };

    export default Contact;
