import React from "react";

const Button = ({ text = 'Get Started', styles, href = '' }) => (
  <a href={href}> 
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] light-text green-cl rounded-[10px] cursor-pointer outline-none ${styles}`}>
      {text}
    </button>
  </a>
);

export default Button;