import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { useForm } from "react-hook-form";
import { FaGithub, FaHashnode, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import db from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Button from "./Button";

function ContactMe() {
  const [resp, setResp] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to show modal
  const showModal = () => {
    document.getElementById("my_modal_5").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_5").close();
  };

  const onSubmit = (data) => {
    setLoading(true);
    addDoc(collection(db, "contacts"), data)
      .then(() => {
        setResp("Message sent successfully!");
        setLoading(false);
        showModal();
        reset();
        // Clear the response message after 3 seconds
        setTimeout(() => {
          setResp("");
          closeModal();
        }, 3000);
      })
      .catch(() => {
        setResp("Message sending error!");
        setLoading(false);
        // Show modal
        showModal();
        // Clear the response message after 3 seconds
        setTimeout(() => {
          setResp("");
          closeModal();
        }, 3000);
      });
  };

  return (
    <div id="contact-me" className="section-container pt-20">
      <SectionTitle
        title="Contact me"
        subtitle="Feel free to drop a message. I'll reply you as soon as I can"
      />
      <div className="flex flex-col-reverse md:flex-row py-10 gap-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col px-10 gap-8 py-10 md:w-1/2 relative"
        >
          <div>
            <input
              className="bg-inherit border-b-[1px] w-[100%] border-black px-2 py-1"
              placeholder="Name"
              {...register("name")}
            />
          </div>
          <div className="relative">
            <input
              type="email"
              className="bg-inherit border-b-[1px] w-[100%] border-black px-2 py-1"
              placeholder="E-mail*"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="absolute italic text-xs text-red-600 left-40 top-1">
                This field is required
              </span>
            )}
          </div>
          <div className="relative">
            <input
              className="bg-inherit border-b-[1px] w-[100%] border-black px-2 py-1"
              placeholder="Message*"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="absolute italic text-xs text-red-600 left-40 top-1">
                This field is required
              </span>
            )}
          </div>
          {loading ? (
            <Button>
              <span className="loading loading-spinner loading-md"></span>
            </Button>
          ) : (
            <input
              type="Submit"
              className="bg-yellow font-semibold cursor-pointer h-10 rounded-full hover:bg-neutral-500 hover:text-white"
            />
          )}
          {/* Display resp message */}
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
      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box bg-neutral-300">
          <h3 className="font-bold text-lg">
            {(resp === "Message sent successfully!") && "Success!"}
            {(resp === "Message sending error!") && "Error!"}
          </h3>
          <p className="py-4">{resp}</p>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_5").close()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ContactMe;
