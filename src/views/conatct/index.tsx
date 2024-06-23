import React, { FC, Dispatch, SetStateAction } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AiOutlineClose } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import { notify } from "../../utils/notifications";

// INTERNAL IMPORT
import Branding from "../../components/Branding";
interface ContactViewProps {
  setOpenContract: Dispatch<SetStateAction<boolean>>;
}
export const ContactView: FC<ContactViewProps> = ({ setOpenContract }) => {
  //FORM
  const [state, handleSubmit] = useForm("mwkgqpnv");
  if (state.succeeded) {
    setOpenContract(false);
    notify({
      type: "success",
      message: "Thanks for submitting your message, will get back to you",
    });
  }

  const CloseModal = () => (
    <a
      onClick={() => setOpenContract(false)}
      className="group mt-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-2xl transition-all duration-500 hover:bg-primary"
    >
      <i className="text-2xl text-white group-hover:text-white">
        <AiOutlineClose />
      </i>
    </a>
  );
  return (
    <>
      <section className="flex w-full items-center py-6 px-0 lg:h-screen lg:p-10">
        <div className="container">
          <div className="bg-default-950/40 mx-auto max-w-5xl overflow-hidden rounded-2xl backdrop-blur-2xl">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* FIRST  */}
              <Branding
                image="auth-img"
                title="To build your solana token creator"
                message="Try and create your ever solana project, and you want to know how blockchain works check Bitcoin Whitepapper"
              />
              {/* SECOND  */}

              <div className="lg:ps-0 flex h-full flex-col p-10">
                <div className="pb-10">
                  <a className="flex">
                    <img
                      src="assets/images/logo1.png"
                      alt=""
                      className="h-10"
                    />
                  </a>
                </div>

                <div className="my-auto pb-6 text-center">
                  <h4 className="mb-4 text-2xl font-bold text-white">
                    Send email to us for more details
                  </h4>
                  <p className="text-default-300 mx-auto mb-5 max-w-sm">
                    Send your message so we can provide you more details
                  </p>

                  <div className=" text-start">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="text-base/normal text-default-200 mb-2 block font-semibold"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="border-default-200 block w-full rounded border-white/10 bg-transparent py-1.5 px-3 text-white/80 focus:border-white/25 focus:ring-transparent"
                          placeholder="email"
                        />
                      </div>
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                      <textarea
                        name="message"
                        id="message"
                        rows={6}
                        className="border-default-200 relative block w-full rounded border-white/10 bg-transparent py-1.5 px-3 text-white/80 focus:border-white/25 focus:ring-transparent"
                        placeholder="message"
                      ></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                      <div className="mb-6 text-center">
                        <button
                          type="submit"
                          disabled={state.submitting}
                          className="bg-primary-600/90 hover:bg-primary group mt-5 inline-flex w-full items-center justify-center rounded-lg px-6 py-2  text-white backdrop-blur-2xl transition-all duration-500"
                        >
                          <span className="fw-bold">Send Message</span>
                        </button>
                        <CloseModal />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
