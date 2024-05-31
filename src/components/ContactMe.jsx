import React from "react";
import SectionTitle from "./SectionTitle";
import { useForm } from "react-hook-form";
import {
  FaGithub,
  FaHashnode,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div id="contact-me" className="section-container py-20">
      <SectionTitle
        title="Contact me"
        subtitle="Feel free to drop a message. I'll reply you as soon as I can"
      />
      <div className="flex flex-col-reverse md:flex-row py-10 gap-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col px-10 gap-8 py-10 md:w-1/2"
        >
          <div>
            <input
              className="bg-inherit border-b-[1px] w-[100%] border-black px-2 py-1"
              placeholder="Name"
              {...register("name")}
            />{" "}
          </div>
          <div className="relative">
            <input
              className="bg-inherit border-b-[1px] w-[100%] border-black px-2 py-1"
              placeholder="E-mail*"
              {...register("email", { required: true })}
            />{" "}
            {errors.email && (
              <span className="absolute text-red-600 left-40 top-1">
                This field is required
              </span>
            )}
          </div>
          <div className="relative">
            <input
              className="bg-inherit border-b-[1px] w-[100%] border-black px-2 py-1"
              placeholder="Message*"
              {...register("message", { required: true })}
            />{" "}
            {errors.message && (
              <span className="absolute text-red-600 left-40 top-1">
                This field is required
              </span>
            )}
          </div>
          <input
            type="submit"
            className="bg-yellow font-semibold cursor-pointer h-10 rounded-md hover:bg-neutral-500 hover:text-white"
          />
        </form>
        <div className="md:w-1/2 bg-neutral-700 relative text-neutral-300 mx-10 md:mx-auto p-10 ">
          <div className="bg-yellow h-8 w-8 absolute top-[-0.75rem] left-[-0.75rem]"></div>
          <div className="flex flex-col gap-6 text-sm ">
            <a
              href="https://x.com/akbenngold"
              target="_blank"
              className="flex gap-4 items-center"
            >
              <FaXTwitter size="1rem" /> @akbenngold
            </a>
            <a
              className="flex gap-4 items-center"
              href="https://github.com/akbenngold"
              target="_blank"
            >
              <FaGithub size="1rem" />
              github.com/akbenngold
            </a>
            <a
              className="flex gap-4 items-center"
              href="https://hashnode.com/akbenngold"
              target="_blank"
            >
              <FaHashnode size="1rem" /> hashnode.com/akbenngold
            </a>
            <a
              className="flex gap-4 items-center"
              href="https://linkedin.com/in/akbenngold"
              target="_blank"
            >
              <FaLinkedin size="1rem" />
              linkedin.com/in/akbenngold
            </a>

            <a
              className="flex gap-4 items-center"
              href="mailto:akbenngold@gmail.com"
              target="_blank"
            >
              <AiOutlineMail size="1rem" /> akbenngold@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
