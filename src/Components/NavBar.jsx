import logo from '../assets/Ge.jpg';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion'

const div = (delay) => ({
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: delay}
    }
})

const NavBar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className='flex flex-shrink-0 items-center'>
                <img className="w-20 h-20 rounded-full mx-2 animate-pulse" src={logo} alt='logo'/>
            </div>
            <motion.div
                variants={div(0)}
                initial="hidden"
                animate= "visible"
            
                className=" m-8 flex items-center justify-center gap-4 text-2xl">
                    <a href="https://github.com/settings/profile">
                <FaGithub/>
                    </a>
                <a href="https://www.instagram.com/george.ocheme/">
                <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/george-ocheme-b34a22250/">
                <FaLinkedin />
                </a>
                    <a href="https://x.com/onehlofiochi">
                    <FaTwitterSquare />
                    </a>
                    <a href="https://www.facebook.com/george.ocheme.14?mibextid=LQQJ4d">
                    <FaFacebook/>
                    </a>
            </motion.div>
            
      </nav>
  )
}

export default NavBar