import { motion, spring } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ( {index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-white p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-cyan-500 font-black text-[48px]" >"</p>

    <div className="mt-1" >
      <p className="text-primary tracking-wider text-[18px]" >{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1" >
          <div className="flex-1 flex flex-col" >
            <p className="text-cyan-950 font-medium text-[16px]" >
              <span className="text-cyan-500" >@</span>{name}
            </p>
              <p className="mt-1 text-cyan-900 text-[14px] " >
                {designation} of {company}
              </p>
          </div>

          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-14 h-14 rounded-full object-cover border-cyan-500 border-x-2"
          />
        </div>
    </div>

  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-cyan-950 rounded-[20px]" >
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`} >
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Comments about me and my projects</p>
        <h2 className={styles.sectionHeadText} >Testimonials<span className="text-cyan-500" >.</span></h2>
       </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`} >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");