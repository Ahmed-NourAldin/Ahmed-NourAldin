import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import contactImg from "../assets/contact1.jpg"

const Contact = () =>
{
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e) =>
    {
        const isValid = await trigger();
        if (!isValid)
        {
            e.preventDefault();
        }
    };

    return (
        <section id="contact" className="py-48 ">
            {/* Headings */ }
            <motion.div
                className="flex justify-end w-full"
                initial="hidden" whileInView="visible"
                viewport={ { once: true, amount: 0.5 } }
                transition={ { duration: 0.5 } }
                variants={ {
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                } }>
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-yellow">CONTACT ME</span> I'M ALWAYS AVAILABLE
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="w-1/2" />
                    </div>
                </div>
            </motion.div>

            {/* FORM & IMAGE */ }
            <div className="md:flex md:justify-between gap-16 mt-5 ">
                <motion.div
                    className="basis-1/2 flex justify-center "
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true, amount: 0.5 } }
                    transition={ { duration: 0.5 } }
                    variants={ {
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    } }>
                    <img className="max-h-[500px] md:mt-[-7em] md:mr-[-7em]" src={contactImg} alt="contact" />
                </motion.div>
                <motion.div
                    className="basis-1/2 mt-10 md:mt-0 "
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true, amount: 0.5 } }
                    transition={ { delay: 0.2, duration: 0.5 } }
                    variants={ {
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    } }>
                    <form action="https://formsubmit.co/8a04d2915793c086e71e85fe2100ccca "
                        target="_blank"
                        onSubmit={ onSubmit }
                        method="POST">
                        <input className="w-full bg-blue font-semibold placeholder-opaque-black p-3 " placeholder="NAME" type="text" { ...register("name", { required: true, maxLength: 100 }) }
                        /> { errors.name && (<p className="text-red mt-1 ">
                            { errors.name.type === 'required' && "This field i s required" }
                            { errors.name.type === 'maxLength' && "Max Length is 100 chars." }
                        </p>) }
                        <input className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5" placeholder="EMAIL" type="text" { ...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        }) }
                        /> { errors.email && (<p className="text-red mt-1 ">
                            { errors.email.type === 'required' && "This field i s required" }
                            { errors.email.type === 'pattern' && "Invalid email address." }
                        </p>) }
                        <textarea cols="50" rows="4"className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5" placeholder="MESSAGE" type="text" { ...register("message", {
                            required: true,
                            maxLength: 2000
                        }) }
                        /> { errors.message && (<p className="text-red mt-1 ">
                            { errors.message.type === 'required' && "This field i s required" }
                            { errors.message.type === 'maxLength' && "Max Length is 2000 chars." }
                        </p>) }

                        <button
                            type="submit" className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
                        >
                            SEND ME A MESSAGE
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
