import React from 'react';
import SocialMediaIcons from "../components/SocialMediaIcons"
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Landing = ({ setSelectedPage }) =>
{
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="gap-16 py-10 md:flex md:justify-between md:items-center md:h-full md:mt-14 md:mb-30">
            {/* Image Section */ }
            <div className="z-10 md:ml-[20vw]  flex justify-center md:mt-4 md:order-2 basis-3/5">
                { isAboveMediumScreens ? (<div className="relative z-0 ml-20 before:absolute before:-top-[-20px] before:-left-10 before:rounded-t-[400px] before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1] ">
                    <img className='hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:mx-w-[600px] min-w-[400px] scale-125' src="src/assets/profile2.png" alt="profile image" />
                </div>) :
                    (<div>
                        <img className='hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:mx-w-[600px] mb-20' src="src/assets/profile2.png" alt="profile image" />
                    </div>) }
            </div>
            {/* Main Section */ }
            <div className="z-30 mt-12 basis-2/5 md:mt-32 ">
                {/* Headings */ }
                <motion.div
                    initial="hidden" whileInView="visible"
                    viewport={ { once: true, amount: 0.5 } }
                    transition={ { duration: 0.5 } }
                    variants={ {
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    } }
                >
                    <p className="z-10 text-6xl text-center xs:flex font-palyfair md:text-start">
                        Ahmed { "" }
                        <span className="ml-2 xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[30px] before:-top-[130px] before:z-[-1]">
                            NourAldin
                        </span>

                    </p>

                    <p className="mt-10 text-sm text-center mb-7 md:text-start">
                        A Front-end React Engineer and a Web Master, Who is Passionate about creative UI/UX designs
                    </p>
                </motion.div>

                {/* Call To Action */ }
                <motion.div
                    className='flex justify-center mt-5 md:justify-start'
                    initial="hidden" whileInView="visible"
                    viewport={ { once: true, amount: 0.5 } }
                    transition={ { delay: 0.2, duration: 0.5 } }
                    variants={ {
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    } }>
                    <AnchorLink
                        className='py-3 font-semibold transition duration-500 rounded-sm bg-gradient-rainblue text-deep-blue px-7 hover:bg-blue hover:text-white'
                        onClick={ () => setSelectedPage("contact") }
                        href='#contact'
                    >
                        Contact Me
                    </AnchorLink>
                    <AnchorLink
                        className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5 '
                        onClick={ () => setSelectedPage("contact") }
                        href='#contact'
                    >
                        <div className='flex items-center justify-center w-full h-full px-10 transition duration-500 bg-deep-blue hover:text-red font-playfair'> Let's talk. </div>
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className='flex justify-center mt-5 md:justify-start'
                    initial="hidden" whileInView="visible"
                    viewport={ { once: true, amount: 0.5 } }
                    transition={ { delay: 0.4, duration: 0.5 } }
                    variants={ {
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    } }>    
                        <SocialMediaIcons />
                </motion.div>
            </div>
        </section>
    );
};
/*  */
export default Landing;
