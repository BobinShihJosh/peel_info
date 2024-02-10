import React from 'react'
import styles from '../style';
import { discount, robot, collab, audible, convo, peel_demo, phoneB } from '../assets';
import GetStarted from './GetStarted';
import Button
  from './Button';
const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6x] px-4 green-bk disc-text  rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} disc-text ml-2`}>
          <span className='disc-text'>Sign up now</span> For {" "}
          <span className='disc-text'>Free Trial</span>
        </p>
      </div>

      <div className='flex flex-row justify-between items-center mt-5 w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] ph:text-[45px] bph:text-[45px] text-[52px]  dark-text ss:leading-[90px] leading-[55px]'>
          Genuine <br className='sm:block hidden' /> {" "}
          <span
            className='text-gradient'>Conversations</span> {" "}
        </h1>
        {/* <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />ß
        </div> */}

      </div>
      <h1 className='font-poppins font-semibold ss:text-[62px] ph:text-[45px] bph:text-[43px] text-[52px] dark-text ss:leading-[90px] leading-[53px] w-full'> At your convenience</h1>
      <p className={`${styles.paragraph} max-w-[620px] mt-10 mb-3 dark-text`}>
        Peel is a platform that offers on-demand personalized chatting services. Users can handpick verified individuals for 1-on-1 conversations tailored to their preferred topics. We makes authentic conversations with real people more accessible than ever.</p>
      <Button text="Try the Beta" styles={`mt-10`} href='#product' />
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative relative md:mr-20 lg:mr-40 xl:mr-20 w-full ml-auto mr-auto max-w-[340px]`}>
      {/* <img src={convo} alt="Billing"
        className='w-[100%] h-[100%] relative z-[5]' /> */}

      {/* <video src={peel_demo} autoPlay loop muted alt="Billing"
        className='w-[50%] h-[80%] relative z-[5]'/> */}


      <video
        src={peel_demo} autoPlay loop muted playsinline alt="Billing" className=" "
      />
      {/* <div className='absolute z-[0] w-[35%] h-[35%] top-0 white__gradient' /> */}
      {/* <div className='absolute z-[1] w-[60%] h-[60%] rounded-full bottom-40 gold__gradient' /> */}
      {/* <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 gold__gradient' /> */}

    </div>

    {/* <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted></GetStarted>
    </div> */}
  </section>
)

export default Hero