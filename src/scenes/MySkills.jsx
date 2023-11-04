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
                    Services:<br />
                    ☑️ UX/UI research & design<br />
                    ☑️ Frontend development: React.js, Node.js, Typescript, Tailwind<br />
                    ☑️ Backend development: Python (Django, Flask), Node.js,<br />
                    ☑️ Mobile app development: React Native<br />
                    ☑️ WordPress development<br />
                    ☑️ Webflow with custom coding<br />
                    ☑️ Shopify with Custom coding
                    <br /><br />

                    As a seasoned Front-end Developer with extensive experience in building Web and Mobile applications, including E-commerce solutions, I am dedicated to helping clients overcome their digital challenges. With an unwavering focus on client needs, I bring a perfect blend of technical expertise and creative problem-solving skills to every project.
                    <br />
                    Throughout my career, I have crafted seamless user experiences that drive engagement and conversions. From intuitive interfaces to responsive designs, I strive to make the digital world an engaging and visually captivating place. My proficiency in HTML, CSS, JavaScript, and various frameworks allows me to turn ideas into reality while ensuring optimal performance and cross-platform compatibility.
                    <br />
                    I take pride in delivering high-quality solutions tailored to the unique requirements of each client. My ability to understand business objectives, combined with my attention to detail, ensures that every line of code serves a purpose. I follow industry best practices, adhering to clean coding standards, and employing modern technologies to build robust and scalable applications.
                    <br />
                    Whether it's a dynamic e-commerce platform, a user-friendly mobile app, or a captivating website, I am committed to bringing your vision to life. Collaborating closely with clients, I prioritize effective communication to ensure transparency and alignment throughout the development process.
                    <br />
                    With a keen eye for design and a passion for innovation, I strive to deliver projects that exceed expectations. I invite you to explore my portfolio website at ahmed-nouraldin.vercel.app to witness the range and quality of my previous work.
                    <br />
                    Let's connect and discuss your project requirements. Together, we can embark on a journey of transforming your ideas into a digital masterpiece. Reach out today, and let's create something extraordinary.
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
                        In the field for more than 3 years.
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
                        Pretty good at imitating existing designs and coming up with new ones
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
                      super fast at delivering work, for real this my best treat so far
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MySkills;
