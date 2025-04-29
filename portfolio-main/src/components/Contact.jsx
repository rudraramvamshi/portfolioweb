import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // template_rld4okt
    // service_3g3dd69
    // SbjI7CPTDPPD0cf_E
    emailjs
      .send(
        'service_3g3dd69',
        'template_rld4okt',

        {
          from_name: form.name,
          to_name: "vamshi",
          from_email: form.email,
          to_email: "rudraramvamshi9@gmail.com",
          message: form.message,
        },
        'SbjI7CPTDPPD0cf_E'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>

      {/* Social Icons Section */}
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <h1 className="text-white text-[30px] font-bold mb-2">FIND ME ON</h1>
        <p className="text-secondary mb-4">
          Feel free to <span className="text-purple-500">connect</span> with me
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/rudraramvamshi"
            target="_blank"
            rel="noreferrer"
            className="text-white text-3xl hover:text-purple-500 transition"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rudraramvamshi/"
            target="_blank"
            rel="noreferrer"
            className="text-white text-3xl hover:text-purple-500 transition"
          >
            <FaLinkedinIn />
          </a>
          {/* <a
            href="https://www.instagram.com/mr__surya"
            target="_blank"
            rel="noreferrer"
            className="text-white text-3xl hover:text-purple-500 transition"
          >
            <AiFillInstagram />
          </a> */}
          {/* <a
            href="https://x.com/SuryaRe16798845"
            target="_blank"
            rel="noreferrer"
            className="text-white text-3xl hover:text-purple-500 transition"
          >
            <AiOutlineTwitter />
          </a> */}
          <a
            href="https://wa.me/6304268851"
            target="_blank"
            rel="noreferrer"
            className="text-white text-3xl hover:text-purple-500 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="tel:+916304268851"
            className="text-white text-3xl hover:text-purple-500 transition"
          >
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
