import React from 'react'
import styles from '../style';
import { discount, robot, collab, audible, convo } from '../assets';
import GetStarted from './GetStarted';
import Button
 from './Button';
const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0   sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6x] px-4 green-bk bg-gold-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} dark-text ml-2`}>
          <span className='dark-text'>Sign up now</span> For {" "}
          <span className='dark-text'>Free Trial</span> 
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] ph:text-[45px] bph:text-[52px] text-[52px]  dark-text ss:leading-[100px] leading-[75px]'>
          Genuine <br className='sm:block hidden' /> {" "}
          <span
            className='text-gradient'>Conversations</span> {" "}
        </h1>
        {/* <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />ß
        </div> */}
         
      </div>
      <h1 className='font-poppins font-semibold ss:text-[62px] ph:text-[45px] bph:text-[50px] text-[52px] dark-text ss:leading-[100px] leading-[75px] w-full'> At your convenience</h1>
      <p className={`${styles.paragraph} max-w-[570px] mt-5 dark-text`}>
      Peel is a platform that offers on-demand personalized chatting services. Users can handpick verified individuals for 1-on-1 conversations tailored to their preferred topics. We makes authentic conversations with real people more accessible than ever.</p>
        <Button text="Try the Beta" styles={`mt-10`} href='#product' />
    </div>
        
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={convo} alt="Billing"
        className='w-[100%] h-[100%] relative z-[5]' />
      {/* <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[60%] h-[60%] rounded-full bottom-40 white__gradient' /> */}
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 gold__gradient' />
    
    </div>

    {/* <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted></GetStarted>
    </div> */}
  </section>
)

export default Hero