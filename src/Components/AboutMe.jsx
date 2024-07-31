import georgeOProfile1 from '../assets/georgeOProfile1.png'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"
const AboutMe = () => {
  return (
      <div className="border-b border-neutral-900 pb-4">
          <h1 className="my-20 text-center text-4xl">
              About 
              <span className="text-neutral-500"> Me</span>
          </h1>
          <div className="flex flex-wrap">
              <motion.div className="w-full lg:w-1/2 lg:p-8">
                  <div className="flex items-center justify-center">
                      <motion.img
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x: -100 }}
                          transition={{duration:1}}
                          className='rounded-2xl ' src={georgeOProfile1} alt="about">
                      </motion.img>
                  </div>
                  </motion.div>
              <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{duration:1}}
                  className='w-full lg:w-1/2'>
                      <div className='flex justify-center lg:justify-start'>
                          <p className='mt-16 mx-2 py-6 max-w-xl'>{ ABOUT_TEXT}</p>
                      </div>
                  
              </motion.div>
          </div>
          
    </div>
  )
}

export default AboutMe