import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () =>
{
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* Header and Image Section */ }
            <div className="md:flex md:gap-16 md:mt-32 md:justify-between">
                <motion.div>
                    
                </motion.div>
            </div>
        </section>
    );
};

export default MySkills;
