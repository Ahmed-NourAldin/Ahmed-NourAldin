import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () =>
{
    const testimonialStyles = `mx-auto relative max-w-[400px] md:h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] md:w-[400px] before:left-1/2 before:border before:rounded-full before:border-4`;

    return (
        <section id="testimonials" className="pt-32 pb-16 mb-16 ">
            {/* HEADING */ }
            <motion.div
                className='text-center md:text-left'
                initial="hidden" whileInView="visible"
                viewport={ { once: true, amount: 0.5 } }
                transition={ { duration: 0.5 } }
                variants={ {
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                } }>
                <p className="font-playfair text-center font-semibold text-4xl mb-5">
                    <span className="text-red">Testimonials</span>
                </p>
                <LineGradient width="mx-auto w-1/3" />
                <p className="mt-10 text-center">
                    Here's what my previous clients got to say about me.
                </p>
            </motion.div>

            {/* TESTIMONIALS */ }
            <div className="md:flex md:justify-between gap-8 ">
                <motion.div
                    className={`bg-blue ${testimonialStyles} before:content-person1 before:scale-90`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true, amount: 0.5 } }
                    transition={ { duration: 0.5 } }
                    variants={ {
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                    } }>
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text center text-xl">Made the website in only two weeks</p>
                </motion.div>
                <motion.div
                    className={`bg-red ${testimonialStyles} before:content-person2 before:scale-90`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true, amount: 0.5 } }
                    transition={ {delay: 0.2, duration: 0.5 } }
                    variants={ {
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                    } }>
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text center text-xl">Was so patient with all the edits I asked for</p>
                </motion.div>
                <motion.div
                    className={`bg-yellow ${testimonialStyles} before:content-person3 before:scale-90`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true, amount: 0.5 } }
                    transition={ {delay: 0.4, duration: 0.5 } }
                    variants={ {
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                    } }>
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text center text-xl">Very polite and understanding, with affordable prices</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
