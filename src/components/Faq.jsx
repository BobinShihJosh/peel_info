import React, { useState } from 'react'
import styles from '../style';
import { discount, robot, collab, audible, convo } from '../assets';
import GetStarted from './GetStarted';
import Button from './Button';
import Accordion from './Accordion';

const Faq = () => {

    const faqData = [
        {
            question: 'What is Peel?',
            answer: 'Peel is a platform that offers on-demand personalized chatting services...',
        },
        {
            question: 'How does it work?',
            answer: 'Users can handpick verified individuals for 1-on-1 conversations tailored to their preferred topics...',
        },
        // Add more FAQ items as needed
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 mb-20 ">
            
            <h2 className={` ${styles.heading2} dark-text mb-10`}>
                Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto mb-20 ">
            <div className="p-4 bg-greenlight rounded-lg">
                <Accordion
                    title="What are the requirements of being a Peeler?"
                    answer="No strict rules here! Just be a respectful and caring conversation partner in your chosen genre. We believe everyone has a unique contribution that makes conversations special."
                />
                <Accordion 
                    title="What exactly do I need to do as a Peeler?" 
                    answer="Pick genres you love on Peel: motivation, anime, unbiased relationship advice, or just being a good listener. Successful Peelers excel as conversation partners in their chosen genre. " />
                <Accordion
                    title="How much can I expect to earn by being a Peeler?"
                    answer="Set your own rates on Peel, but we suggest starting at $5-20/hour. As you grow and build your reputation, feel free to increase your rates."
                />
                 
                <Accordion 
                    title="How do I get my profile approved quickly and get users?" 
                    answer="Sign up on our app and apply! Basic information is needed to confirm your identity in order to fight against ai chatbots, scammers, and other malicious activities. " />

            </div>
            
        </div>
        </div>
    );
}

export default Faq