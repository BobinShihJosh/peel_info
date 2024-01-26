import { expologo, bill, qrcode, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={qrcode} alt="billing" className="w-[50%] h-[95%]  relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full green__gradient" />
      {/* gradient end */}
    </div>

    <div className={` ${layout.sectionInfo}  `}>
      <h2 className={` ${styles.heading2} dark-text xl:ml-[50px] `}>
        First 200 users get <span className="text-gradient" style={{ fontSize: '64px' }}>70%</span> <br className="sm:block hidden" /> off
        on their first Peeler!
      </h2>
      <p className={`${styles.paragraph} dark-text xl:ml-[50px] max-w-[570px] mt-5`}>
        <ol>
          <li>1. Download 'Expo Go' from the App store</li>
          <li>2. Scan the QR with your phone camera</li>
          <li>3. That's it! Pick a Peeler and start chatting!</li>
        </ol>
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 xl:ml-[50px] ">
        <a href="https://apps.apple.com/us/app/expo-go/id982107779" target="_blank" rel="noopener noreferrer">
          <img src={expologo} alt="google_play" className="w-[98.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        </a>
        {/* <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
      </div>
    </div>
  </section>
);

export default Billing;