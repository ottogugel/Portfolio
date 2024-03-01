'use client'
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { Kalam } from "next/font/google";
import { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const kalam = Kalam({ weight: "400", subsets: ["latin"] });

export function ContactSection() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSuccess(false)
    setError(false)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then((result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div className="rounded-lg w-[1820px] h-[528px] ml-10 bg-surfaceprimary flex flex-row items-center justify-between">
      <div className="ml-[136px] relative">
        <Image src="/avatar.svg" alt="" width={220} height={220} />
        <h1
          className={`${kalam.className} mt-8 font-normal text-base text-strokehigh`}
        >
          Contact
        </h1>
        <p className="text-primary font-medium text-2xl break mt-2">
          Enjoyed my work? Let’s work together
        </p>
        <span className="text-secondary flex mt-5 text-xs font-normal gap-1">
          I’m always up for a chat. Pop me an email at
          <a
            href="mailto:ottogugel99@gmail.com"
            className={`${kalam.className}text-base text-strokehigh underline`}
          >
            ottogugel99@gmail.com
          </a>
          or give me a shout on social media.
        </span>
        <div className="mt-4 flex flex-row gap-3">
          <a
            href="https://github.com/ottogugel"
            target="_blank"
            className="rounded-lg bg-surfaces size-10 flex items-center justify-center"
          >
            <Image
              src="/github.svg"
              alt=""
              width={24}
              height={24}
              className=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ottogugel/"
            target="_blank"
            className="rounded-lg bg-surfaces size-10 flex items-center justify-center"
          >
            <Image
              src="/linkedin.svg"
              alt=""
              width={24}
              height={24}
              className=""
            />
          </a>
          <a
            href="https://wa.me/5583991279742"
            target="_blank"
            className="rounded-lg bg-surfaces size-10 flex items-center justify-center"
          >
            <Image
              src="/whatsapp.svg"
              alt=""
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
      <div className="mr-[72px]">
        <form onSubmit={sendEmail} ref={form} className="">
          <div className="">
            <input
              placeholder="Name"
              name="user_name"
              type="text"
              className="bg-surface focus:border focus-visible:outline-none focus:border-highlight text-secondary rounded-lg p-3 w-[488px]"
            />
            <div>
              <input
                placeholder="E-mail"
                name="user_email"
                type="email"
                className="bg-surface focus:border focus-visible:outline-none focus:border-highlight rounded-lg text-secondary p-3 mt-4 w-[488px]"
              />
            </div>
            <div>
              <textarea
                id="message"
                className="p-3 rounded-lg bg-surface text-secondary w-[488px] h-40 mt-4 resize-none outline-none"
                placeholder="Your Message"
                name="user_message"
                rows={6}
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-buttonprimary font-medium text-base flex bg-purples hover:bg-purple-800 rounded-lg w-56 h-14 items-center justify-center mt-8"
          >
            Send me a message <ArrowRight size={24} className="ml-2" />
          </button>
          {success && (
            <span className="text-green-600 font-semibold flex mt-3">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold flex mt-3">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
