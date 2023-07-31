import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className=" relative w-full h-screen mx-auto " >
      <div className={`${styles.paddingX} absolute inset-0 top-[160px] max-w-7xl mx-auto flex flex-row items-start gap-5`} >
        <div className="flex flex-col justify-center items-center mt-5 " >
        </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`} >Call me</h1>
             <h1 className={`${styles.heroHeadText} pt-0.5 `}><span className="text-cyan-500" >Papa Jake</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Love is life and life is living,<br className="sm:block hidden" /> so fucking awesome.
            </p>
          </div>
      </div>
      {/* <ComputersCanvas/> */}
    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2" >
            <motion.dev 
              animate={{
                y: [0, 21, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-cyan-500 mb-1"
            />
          </div>
        </a>
    </div>
    </section>
  );
};

export default Hero;