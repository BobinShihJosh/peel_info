import React, { useState } from 'react'
import styles from '../style';
import { discount, robot, collab, audible, convo } from '../assets';
import GetStarted from './GetStarted';
import Button from './Button'; 
import { Link } from 'react-router-dom';

const PeelerHero = () => {

    return (
        <section id="home" className={`flex md:flex-row flex-col  ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0   sm:px-16 `}>
                <div className='flex flex-row justify-between items-center w-full'>
                    <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] ph:text-[45px] bph:text-[52px] text-[52px]  dark-text ss:leading-[100px] leading-[75px]'>
                        Monetize your   <br className='sm:block hidden' /> {" "}
                        <span
                            className='text-gradient'>Authenticity  </span> {" "}
                    </h1>
                </div>
                <h1 className='font-poppins font-semibold ss:text-[62px] ph:text-[45px] bph:text-[50px] text-[52px] dark-text ss:leading-[100px] leading-[75px] w-full'> As a conversation partner</h1>
                <p className={`${styles.paragraph} max-w-[690px] mt-5 dark-text `}>
                Being your caring, open-minded self has never been this rewarding! Peel offers a laid-back way to boost your side hustle – chat, listen, and earn extra income on your own terms and schedule! </p>



                <Button text="Apply Today!" styles={`mt-10`} href='#product' />
                     
            </div>
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={audible} alt="Billing"
                    className='w-[100%] h-[100%] relative z-[5]' />
                <div className='absolute z-[0] w-[50%] h-[50%] left-20 top-20 gold__gradient' />
            </div>



        </section>



    )
}

export default PeelerHero

