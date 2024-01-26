import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { quotes } from "../assets";

const PeelerTestimonials = () => (
  <section id="Users" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>

    <div className="w-full flex justify-between items-center md:flex-row flex-col   relative  z-[1]">
      <h2 className={` ${styles.heading2} dark-text`}>
        What our Peelers are saying about Peel
      </h2>
      <div className="w-full md:mt-0 mt-6 ">
        
        <p className={`${styles.paragraph} text-left dark-text max-w-[450px] xl:ml-[150px] lg:ml-[100px] `}>
        <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain mb-10" />
        Peel is hands down the most straighthforward way for me to earn extra cash. Engaging in authentic conversations not only felt rewarding, but I also gained insights while sharing common interests, making it a uniquely enjoyable side hustle. --Anonymous Peeler
        <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain  mt-5 ml-auto" />
        </p>
      </div>
    </div>
 
  </section>
);

export default PeelerTestimonials;