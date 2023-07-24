import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillsImg from "../assets/skills.jpg";

const MySkills = () =>
{
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-10 pb-24 bg-transparent">
            {/* Header and Image Section */ }
            <div className="md:flex  md:w-full md:gap-16 md:mt-20 md:justify-between">
                <motion.div
                    className='md:order-2 md:mt-[-25px]'
                    initial="hidden" whileInView="visible"
                    viewport={ { once: true, amount: 0.5 } }
                    transition={ { duration: 0.5 } }
                    variants={ {
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    } }>
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        My <span className="text-red">Skills</span>
                    </p>
                    <LineGradient width="sm:w-1/3" />
                    <p className="mt-10 mb-7 ">
                        As an experienced Webflow and Shopify designer, I have a proven track record of crafting captivating websites that leave a lasting impression on visitors. With a keen eye for detail and a passion for user-centric design, I specialize in creating visually stunning and intuitive interfaces that drive engagement and conversions.
                        <br /><br />
                        My expertise extends beyond aesthetics; I am well-versed in optimizing SEO strategies to ensure your website ranks higher on search engines and attracts more organic traffic. By leveraging the power of Webflow's flexible design capabilities, I create responsive and mobile-friendly websites that offer a seamless user experience across all devices.
                        <br /><br />
                        Additionally, I excel in seamlessly integrating Webflow websites with Shopify stores, providing a smooth and efficient e-commerce solution. Whether you're starting an online store from scratch or looking to enhance an existing one, I can help you achieve maximum profitability and customer satisfaction.
                        <br /><br />
                        Throughout my career, I have collaborated with clients from various industries, understanding their unique requirements and translating their visions into digital realities. I prioritize effective communication, ensuring that every step of the design process aligns with your brand identity and business objectives.
                        <br /><br />
                        Let's work together to elevate your online presence and take your business to new heights. Whether you need a visually captivating website or a seamless e-commerce platform, I am here to bring your ideas to life. Reach out today, and let's embark on a journey of creating an exceptional digital experience that resonates with your audience and drives success for your business.
                    </p>
                </motion.div>
                <div className="mt-16 md:mt-[-20px]">
                    { isAboveMediumScreens ?
                        (<div className="relative z-0  before:absolute before:-top-[-10px] before:-left-10 md:min-w-[700px] md:max-w-[1200px]  before:w-full  md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1] ">
                            <img className='z-10' src={ skillsImg } alt="skills" />
                        </div>)
                        :
                        <img className='z-10' src={ skillsImg } alt="skills" />
                    }
                </div>
            </div>

            {/* Skills */ }
            <div className="md:flex md:justify-between mt-16 gap-32 ">
                <motion.div
                    className='mt-10 sm:w-1/3'
                    initial="hidden" whileInView="visible"
                    viewport={ { once: true, amount: 0.5 } }
                    transition={ { delay: 0.2, duration: 0.5 } }
                    variants={ {
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    } }>
                    <div className="relative h-32 z-[0]">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl" >01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3" >Experience</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        In the field for more than 3 years or two.
                    </p>
                </motion.div>
                <motion.div
                    className='mt-10 sm:w-1/3'
                    initial="hidden" whileInView="visible"
                    viewport={ { once: true, amount: 0.5 } }
                    transition={ { delay: 0.2, duration: 0.5 } }
                    variants={ {
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    } }>
                    <div className="relative h-32 z-[0]">
                        <div className="">
                            <p className="font-playfair font-semibold text-5xl" >02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3" >Creativity</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        Pretty good at ste.., ahem imitating and coming up with new designs
                    </p>
                </motion.div>
                <motion.div
                    className='mt-10 sm:w-1/3'
                    initial="hidden" whileInView="visible"
                    viewport={ { once: true, amount: 0.5 } }
                    transition={ { delay: 0.2, duration: 0.5 } }
                    variants={ {
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    } }>
                    <div className="relative h-32 z-[0] ">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl" >03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3" >Fast Delivery</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        I'm actually super fast at delivering work, for real this my best treat so far
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MySkills;
