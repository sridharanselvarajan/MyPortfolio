    import Link from "next/link";
    import { FaGithub, FaLinkedinIn, FaYoutube,FaInstagram, FaWhatsapp,  } from "react-icons/fa";

    const socials = [
        { icon: <FaGithub />, path: "https://github.com/sridharanselvarajan"},
        { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sridharan-selvarajan-b921162aa/"},
        { icon: <FaWhatsapp />,path: "https://wa.me/9345888109"},
        { icon: <FaInstagram />,path: "https://www.instagram.com/sridhar_an_cdm/"}
    ];

    const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
    }

    export default Social;
