/* eslint-disable react-refresh/only-export-components */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services, about } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Service } from "../@types";

const ServiceCard = ({title, icon}: Service, index: number) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={ fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[1.2rem] shadow-card"
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[1.2rem] py-5 px-12 min-h-[12rem] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[1.2rem] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        {about}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {
          services.map((service, index) => {
            return <ServiceCard key={service.title} index={index} {...service} />
          })
        }
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
