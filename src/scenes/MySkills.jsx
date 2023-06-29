import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import skillsImg from "../assets/skills.jpg"

const MySkills = () =>
{
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-10 pb-24 bg-transparent">
            {/* Header and Image Section */ }
            <div className="md:flex  md:w-full md:gap-16 md:mt-20 md:justify-between">
                <motion.div
                    className='md:order-2'
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
                    <p className="mt-10 mb-7">
                        I wast certified from many different well known organizations; like Harvard education institute, One Million Arab Coders (by the UAE government), and Egypt FWD.
                    </p>
                </motion.div>
                <div className="mt-16 md:mt-[-20px]">
                    { isAboveMediumScreens ?
                        (<div className="relative z-0  before:absolute before:-top-[-10px] before:-left-10 md:max-w-[1200px]  before:w-full  md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1] ">
                            <img className='z-10' src={skillsImg} alt="skills" />
                        </div>)
                        :
                        <img className='z-10' src={skillsImg} alt="skills" />
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
