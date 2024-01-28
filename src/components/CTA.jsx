import styles from "../style";
import { Resend } from 'resend';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CTA = () => {
  const form = useRef();
  const { register, handleSubmit } = useForm();
  const [inputValue, setInputValue] = useState('');

  const notify = () => {toast("Subscribed! Check your email!");}

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("submitted")

    if (inputValue.trim() !== '') {
      // Perform the form submission logic here
      emailjs.sendForm('service_jbi1svt', 'template_aroou0m', form.current, 'HpmgxoERcF8lYNPOT')
      .then((result) => {
        console.log(result.text);
         
        notify();
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
    } else {
      // Display an error message or take appropriate action for a blank input
      console.log('Input cannot be blank!');
    }


  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (

    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col mb-10">
        <h2 className={` ${styles.heading2} text-white bph:text-[30px] leading-[39px]`}>🌟 Be in the Know: Sign Up!
        </h2>
        <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
          Be part of something big! Subscribe for sneak peeks, exclusive offers, and our app's grand launch. Enter your email below for instant access to the future of Peel.
          <br></br>
          Don't miss out – join us on this exciting journey! 🚀
        </p>
      </div>

      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label className={`${styles.paragraph} text-white max-w-[470px]  mt-10 mr-4`}>Email </label>
          <input value={inputValue} onChange={handleChange}
            type="email"
            name="user_email"
            className="w-64 border border-gray-300 px-4 py-2   mr-10 rounded-md focus:outline-none focus:border-blue-500   "
            placeholder="Enter your email"

          />
          {/* <div className="xs:flex xs:justify-center xs:items-center "> */}

          <button
            type="submit"
            className={`py-4 px-6  font-poppins font-medium text-[18px] light-text green-cl rounded-[10px]  ph:ml-0 ml-10 mb-2 mt-10 outline-none   xs:mt-10 `}
          >
            Subscribe!
          </button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce />
          {/* </div > */}
        </form>
      </div>
    </section>
  );
}


export default CTA;