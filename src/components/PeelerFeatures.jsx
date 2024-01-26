import { stats, PeelerStats } from "../constants";
import styles from "../style";

const PeelerFeatures = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mt-20 mb-4`}>
        {PeelerStats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
            <div>
                <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] dark-text">
                    {stat.value}
                </h4>
                <div>
                    <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-dark mt-6 mr-10  ">
                        {stat.description}
                    </p>
                </div>
            </div>
        </div>
    ))}
    </section>
);

export default PeelerFeatures;
 