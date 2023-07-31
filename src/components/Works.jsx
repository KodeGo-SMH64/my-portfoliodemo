import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn( "up", "spring", index * 0.5, 0.75 )}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=" p-5 bg-cyan-950 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]" > 
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
        

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div 
            onClick={() => (source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />

            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] ">{name}</h3>
          <p className="mt-2 text-secondary" >{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`} >
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div>
  )

}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} 
        >My Work</p>
          <h2 className={styles.sectionHeadText}
        >Projects<span className="text-cyan-500" >.</span></h2>
      </motion.div>

      <div className="w-full flex" >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            These projects reflect my unwavering excitement for learning and pushing boundaries. From the earliest prototypes to the most recent initiatives, each project demonstrates my commitment to broadening my skill set and embracing new challenges. While I am still a beginner, my drive to succeed is evident in the smooth user interfaces and functioning online applications I've created. I regard each project as an opportunity to learn, adapt, and improve my techniques. Join me on this fascinating journey as I embrace ever-changing web technologies and attempt to build captivating digital experiences that leave a lasting impression. Feel free to check the live demos and code repositories for each of my projects.
          </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper (Works, "work");