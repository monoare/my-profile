import Title from "../Shared/Title";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_Service_ID,
        import.meta.env.VITE_Template_ID,
        form.current,
        import.meta.env.VITE_Public_key
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text) {
            Swal.fire({
              title: "Good job!",
              text: "Email has been send!",
              icon: "success",
            });
          }
        },
        (error) => {
          if (error.text) {
            Swal.fire({
              title: "Something wrong!",
              text: `${error.text}`,
              icon: "success",
            });
          }
        }
      );
    reset();
  };

  return (
    <div name="contact" className="bg-slate-100 px-10 lg:px-0">
      <Title title={"Contact Me"} />

      <div className="md:max-w-6xl mx-auto pb-4">
        <p className="py-3 md:py-6 md:text-xl md:max-w-3xl mx-auto text-center md:px-10 lg:px-0">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          ref={form}
          className="md:max-w-6xl mx-auto flex flex-col border-[0.5px] shadow-lg  bg-slate-50 py-4"
        >
          <div className="px-4  lg:p-10 flex flex-col lg:justify-between lg:flex-row md:gap-6">
            <div className="lg:w-[40vw]">
              {/* -------Name------- */}
              <div className="form-control mb-[26px] ">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="from_name"
                  {...register("from_name", { required: true })}
                  className="border-[1px] border-gray-400 p-[10px]"
                />
                {errors.from_name && (
                  <span className="text-red-600 pt-2">
                    Name field is required
                  </span>
                )}
              </div>

              {/* -------Email------- */}
              <div className="form-control mb-[26px]">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  name="reply_to"
                  {...register("reply_to", { required: true })}
                  className="border-[1px] border-gray-400 p-[10px]"
                />
                {errors.reply_to && (
                  <span className="text-red-600 pt-2">
                    Email field is required
                  </span>
                )}
              </div>

              {/* -------Subject------- */}
              <div className="form-control mb-[26px]">
                <input
                  type="text"
                  placeholder="Subject"
                  name="from_subject"
                  {...register("from_subject", { required: true })}
                  className="border-[1px] border-gray-400 p-[10px]"
                />
                {errors.reply_to && (
                  <span className="text-red-600 pt-2">
                    Subject field is required
                  </span>
                )}
              </div>
            </div>

            {/* -------Message------- */}
            <div className="form-control mb-[26px] lg:w-[60vw]">
              <textarea
                type="text"
                rows="7"
                name="message"
                {...register("message", { required: true })}
                placeholder="Message"
                className="border-[1px] border-gray-400 p-[10px]"
              />
              {errors.message && (
                <span className="text-red-600 pt-2">
                  Message field is required
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-center md:justify-end md:pb-10 md:mr-4 lg:pr-6">
            <input
              type="submit"
              value="Send Message"
              className="py-1 md:py-4 px-2 md:px-4 bg-[#0099E6] md:font-semibold text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
