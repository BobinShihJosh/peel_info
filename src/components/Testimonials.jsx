import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="Users" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={` ${styles.heading2} dark-text`}>
        What our users are saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6 ">
        <p className={`${styles.paragraph} text-left dark-text max-w-[450px] xl:ml-[150px] lg:ml-[100px] `}>
        Users have full anonymity and the freedom to openly provide feedback on their interactions with our verified peelers.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;