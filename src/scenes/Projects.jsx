import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import project6 from "../assets/project-6.png";
import project7 from "../assets/project-7.png";



const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, link }) =>
{
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-yellow z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("").toLowerCase();
    return (
            <motion.div variants={ projectVariant } className="relative sm:m-2">
                <div className={ overlayStyles }>
                    <p className="text-2xl font-playfair">{ title }</p>
                    <p className="mt-7 ">{ description }</p>
                </div>
                
                <img className="sm:w-[400px] sm:h-[400px] sm:p-0 sm:max-h-[400px] min-w-full p-1 max-h-[200px] " src={link} alt={ projectTitle } />
            </motion.div>
    );
};

const Projects = () =>
{
    return (
        <section id="projects" className="pt-48 pb-48">
            <div id="webflow"/>
            <div id="shopify"/>
            <motion.div
                className='md:w-2/4 mx-auto text-center'
                initial="hidden" whileInView="visible"
                viewport={ { once: true, amount: 0.5 } }
                transition={ { duration: 0.5 } }
                variants={ {
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                } }>
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">PRO</span>JECTS
                    </p>
                </div>
                <div className="flex justify-center mt-5">
                    <LineGradient width="w-1/3" />
                </div>
                <p className="mt-10 mb-10">
                    Been Building Shit for more than 3 years.
                </p>
            </motion.div>

            {/* Projects */ }
            <div className="flex justify-center">
                <motion.div
                    className='sm:grid sm:grid-cols-3'
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true, amount: 0.2 } }
                    variants={ container }>
                    {/* ROW 1 */ }
                    <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold m-2">
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project title="Project 1" link={project1} description="A test project" />
                    <Project title="Project 2" link={project2} description="A Company for Digital Transformation" />

                    {/* ROW 2 */ }
                    <Project title="Project 3" link={project3} description="Trading App" />
                    <Project title="Project 4" link={project4} description="E-commerce website for clothes" />
                    <Project title="Project 5" link={project5} description="Band Merchandise website" />

                    {/* ROW 3 */ }
                    <Project title="Project 6" link={project6} description="Creative Agency" />
                    <Project title="Project 7" link={project7} description="Security App that I designed" />
                    <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold m-2">
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Projects;
