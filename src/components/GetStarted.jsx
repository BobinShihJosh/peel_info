import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-green-gradient p-[2px] cursor-pointer get-started`}>
    <div className={`${styles.flexCenter} flex-col bg-primaryB w-[100%] h-[100%] rounded-full get-started`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="--black-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="--black-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;