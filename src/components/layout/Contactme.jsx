"use client";

import CustomIcons from "../ui/CustomIcons";

export default function Contactme() {
  return (
    <section id="contactme" className="py-8 bg-neutral-800">
      <div className="container mx-auto">
        <h2 className="flex items-center justify-center text-4xl font-bold text-indigo-600 px-14 pt-8">
          Contact Me
        </h2>
        <p className="text-center text-zinc-200 mt-4 px-4">
          Feel free to reach out to me for any inquiries, collaborations, or
          just to say hello! You can contact me via email at
          <a
            href="mailto:contacto.adpmdev@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            {" "}
            contacto.adpmdev@gmail.com
          </a>{" "}
          or connect with me on social media.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <a target="_blank" href="https://t.me/AlbertoDPM">
            <CustomIcons
              src={"./icons/telegram.svg"}
              width={32}
              height={32}
              alt={"Telegram"}
            />
          </a>
          <a target="_blank" href="https://wa.me/584244275255">
            <CustomIcons
              src={"./icons/whatsapp.svg"}
              width={32}
              height={32}
              alt={"Whatsapp"}
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/alberto-perez-adpm"
          >
            <CustomIcons
              src={"./icons/linkedin.svg"}
              width={32}
              height={32}
              alt={"LinkedIn"}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
