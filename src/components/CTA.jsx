import styles from "../style";
import { Resend } from 'resend';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const CTA = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("submitted")
    emailjs.sendForm('service_jbi1svt', 'template_aroou0m', form.current, 'HpmgxoERcF8lYNPOT')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col mb-10">
        <h2 className={` ${styles.heading2} text-white`}>🌟 Be in the Know: Sign Up!
</h2>
        <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
        Be part of something big! Subscribe for sneak peeks, exclusive offers, and our app's grand launch. Enter your email below for instant access to the future of Peel.
        <br></br>
        Don't miss out – join us on this exciting journey! 🚀 
        </p>
      </div>

      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label className={`${styles.paragraph} text-white max-w-[470px]  mt-10   mr-4`}>Email</label>
          <input
            type="email"
            name="user_email"
            className="w-64 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500   "
            placeholder="Enter your email"
          />
          {/* <div className="xs:flex xs:justify-center xs:items-center "> */}

            <button
              type="submit"
              className={`py-4 px-6  font-poppins font-medium text-[18px] light-text green-cl rounded-[10px] ml-8 mt-10 outline-none   xs:mt-10 `}
            > 
              Subscribe!
            </button> 
          {/* </div > */}
        </form> 
      </div>
    </section>  
  ); 
}


export default CTA;