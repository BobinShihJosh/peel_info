import React from 'react'
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-goldlight`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-10">
      <h4 className="font-poppins font-semibold dark-text text-[24px] leading-[23.4px] mb-3">
        {title}
      </h4>
      <p className="font-poppins font-normal dark-text text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={ `${styles.heading2} dark-text  bph:text-[28px]  leading-[39px]`} >
        Easy Access to <br className="sm:block hidden" /> 
        authentic conversations.
        
      </h2>
      <p className={`${styles.paragraph} dark-text max-w-[470px] mt-5`}>
      In today's social media, popular figures dominate attention, silencing ordinary voices. Coupled with scammers and chatbots, forging authentic online connections is challenging. Peel addresses this issue.
      {/* In the current skewed social media landscape, disproportionate attention is showered upon popular figures, rendering ordinary voices invisible and drowned out. Coupled with the rise of scammers and AI chatbots, forging new authentic online connections has never been harder for the average person. Peel aims to solve this problem. */}
      </p>

      <Button text="Learn more" styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg}  flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business