import DomainVerificationRoundedIcon from "@mui/icons-material/DomainVerificationRounded";
import ScreenShareRoundedIcon from "@mui/icons-material/ScreenShareRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import AnimateOnVisible from "../ui/AnimateOnVisible";
import CustomButtons from "../ui/CustomButtons";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-10">
      <AnimateOnVisible animationClass="animate-bottom-fade">
        <h2 className="flex items-center text-4xl font-bold text-indigo-900 px-14 pt-8">
          <DomainVerificationRoundedIcon
            sx={{ fontSize: 40 }}
            className="inline-block"
          />
          My Projects
        </h2>
      </AnimateOnVisible>
      {/* CONSOLITEX SECTION */}
      <AnimateOnVisible
        id="projects"
        animationClass={"animate-center-fade"}
        styles="flex flex-row flex-wrap mx-4 md:mx-8 rounded-2xl shadow-lg shadow-gray-700 animate-center-fade bg-white"
      >
        <AnimateOnVisible
          animationClass={"animate-bottom-fade"}
          styles="flex-1 rounded-l-2xl"
        >
          <h3 className="text-4xl font-bold w-[90%] p-8 text-blue-800">
            <a href="https://consolitex.org" target="_black">
              CONSOLITEX® Bienes Raices
            </a>{" "}
            <br />
            Web page
          </h3>

          <p className="text-lg text-gray-800 px-8">
            <b>CONSOLITEX® </b>is a Venezuelan real estate company with over 40
            years in the market.
          </p>

          <ul>
            <li className="pl-8 text-lg text-gray-700 my-4">
              <b>Dedicated sections for main categories:</b>
              <ul className="list-disc pl-8 text-lg text-gray-700 my-4">
                <li className="text-sm">Apartments</li>
                <li className="text-sm">Townhouses</li>
                <li className="text-sm">Commercial spaces</li>
                <li className="text-sm">Warehouses</li>
                <li className="text-sm">Lands</li>
                <li className="text-sm">Offices</li>
              </ul>
            </li>
            <li className="pl-8 text-lg text-gray-700 my-4">
              <b>General search engine.</b>
            </li>
            <li className="pl-8 text-lg text-gray-700 my-4">
              <b>Filtering options.</b>
            </li>
            <li className="pl-8 text-lg text-gray-700 my-4">
              <b>A simple and attractive design.</b>
            </li>
            <li className="pl-8 text-lg text-gray-700 mt-4 mb-8">
              <b>100% Responsive</b>
            </li>
          </ul>

          <div className="flex items-center justify-end px-8">
            <CustomButtons
              text="Visit page"
              icon={<ScreenShareRoundedIcon className="inline-block ml-1" />}
              url="https://consolitex.org"
            />
          </div>
        </AnimateOnVisible>
        <AnimateOnVisible
          animationClass={"animate-right-fade"}
          styles="flex-1 flex justify-center relative z-10 md:bg-yellow-300 max-sm:rounded-b-2xl sm:rounded-r-2xl h-[350px] md:h-[660px] overflow-hidden p-8"
        >
          <Image // ONLY FOR MOBILE
            src={"./images/consolitex/principal-tablet.jpeg"}
            width={550}
            height={500}
            alt="Principal"
            className="block md:hidden absolute z-10 shadow-2xl shadow-neutral-800/70 "
            style={{
              borderRadius: 7,
            }}
            loading="lazy"
          />

          <Image
            src={"./images/consolitex/principal-desktop.jpeg"}
            width={550}
            height={500}
            alt="Principal"
            className="hidden md:block absolute z-10 shadow-2xl shadow-neutral-800/70 brightness-75 transition-all ease-in-out duration-200 hover:z-30 hover:brightness-100 hover:-translate-y-3.5"
            style={{
              borderRadius: 7,
              left: "32px",
            }}
            loading="lazy"
          />

          <Image
            src={"./images/consolitex/principal-tablet.jpeg"}
            width={350}
            height={200}
            alt="Principal"
            className="hidden md:block absolute z-10 shadow-2xl shadow-neutral-800/80 brightness-90 transition-all ease-in-out duration-200 hover:z-30 hover:brightness-100 hover:-translate-y-3.5"
            style={{
              borderRadius: 7,
              right: "32px",
              top: 100,
            }}
            loading="lazy"
          />

          <Image
            src={"./images/consolitex/principal-mobile.jpeg"}
            width={200}
            height={100}
            alt="Principal"
            className="hidden md:block absolute z-10 shadow-2xl shadow-neutral-800/90 brightness-95 transition-all ease-in-out duration-200 hover:z-30 hover:brightness-100 hover:-translate-y-3.5"
            style={{
              borderRadius: 7,
              left: "50%",
              top: 200,
              transform: "translateX(-70%)",
            }}
            loading="lazy"
          />
        </AnimateOnVisible>
      </AnimateOnVisible>

      {/* ASTROCHATBOT SECTION */}
      <AnimateOnVisible
        id="projects"
        animationClass={"animate-center-fade"}
        styles="sm:flex sm:flex-row flex-wrap mx-4 md:mx-8 rounded-2xl shadow-lg shadow-gray-700 animate-center-fade bg-white"
      >
        <AnimateOnVisible
          animationClass={"animate-bottom-fade"}
          styles="flex-1 max-sm:rounded-t-2xl max-sm:rounded-t-2xl sm:rounded-l-2xl bg-[#212529] py-4"
        >
          <h3 className="text-4xl font-bold w-[90%] p-8 text-indigo-600 font-mono">
            <a href="https://astrochatbot-67v7o2zi.b4a.run/" target="_black">
              ASTROCHATBOT
            </a>
          </h3>

          <p className="text-lg text-gray-100 px-8">
            <b>AstroChatbot </b>is a Virtual assistant specializing in
            Astronomy, cosmic phenomena, and the vast universe.
          </p>

          <ul>
            <li className="pl-8 text-lg text-gray-300 my-4">
              <b>Powered by AI models.</b>
            </li>
            <li className="pl-8 text-lg text-gray-300 my-4">
              <b>Attractive design with animations.</b>
            </li>
            <li className="pl-8 text-lg text-gray-300 my-4">
              <b>Developed with these technologies:</b>
              <ul className="list-disc pl-8 text-lg text-gray-300 my-4">
                <li className="text-sm">Python + Flask</li>
                <li className="text-sm">HTML + CSS + JavaScript</li>
                <li className="text-sm">SQLite for History</li>
                <li className="text-sm">Docker</li>
              </ul>
            </li>
            <li className="pl-8 text-lg text-gray-300 mt-4 mb-8">
              <b>100% Responsive</b>
            </li>
          </ul>

          <div className="flex items-center justify-end px-8 gap-3">
            <CustomButtons
              text="Visit repository"
              icon={<GitHubIcon className="inline-block ml-1" />}
              url="https://github.com/AlbertoDPM30/chatbot_llama_ai"
            />
            {/* <CustomButtons
              text="Visit page"
              icon={<ScreenShareRoundedIcon className="inline-block ml-1" />}
              url="https://astrochatbot-67v7o2zi.b4a.run/"
            /> */}
          </div>
        </AnimateOnVisible>
        <AnimateOnVisible
          animationClass={"animate-right-fade"}
          styles="flex-1 flex justify-center relative z-10 bg-[#3f4388] max-sm:rounded-b-2xl sm:rounded-r-2xl h-[350px] md:h-[600px] overflow-hidden max-sm:py-0 max-sm:-mt-1 p-8"
        >
          <Image // ONLY FOR MOBILE
            src={"./images/astrochatbot/astrochatbot-mobile.jpeg"}
            width={550}
            height={500}
            alt="Principal"
            className="block md:hidden absolute z-10 shadow-2xl shadow-neutral-800/70 "
            style={{
              borderRadius: 7,
            }}
            loading="lazy"
          />

          <Image
            src={"./images/astrochatbot/astrochatbot-desktop.jpeg"}
            width={550}
            height={500}
            alt="Principal"
            className="hidden md:block absolute z-10 shadow-2xl shadow-neutral-800/70 brightness-75 transition-all ease-in-out duration-200 hover:z-30 hover:brightness-100 hover:-translate-y-3.5"
            style={{
              borderRadius: 7,
              left: "32px",
              bottom: 10,
              width: "calc(100% - 55px)",
            }}
            loading="lazy"
          />

          <Image
            src={"./images/astrochatbot/astrochatbot-mobile.jpeg"}
            width={350}
            height={200}
            alt="Principal"
            className="hidden md:block absolute z-10 shadow-4xl shadow-neutral-800/80 brightness-95 transition-all ease-in-out duration-200 hover:z-30 hover:brightness-100 hover:-translate-y-3.5"
            style={{
              borderRadius: 7,
              right: "32px",
              bottom: 5,
              width: "35%",
            }}
            loading="lazy"
          />
        </AnimateOnVisible>
      </AnimateOnVisible>

      {/* ECASYS SECTION */}
      <AnimateOnVisible
        id="projects"
        animationClass={"animate-center-fade"}
        styles="sm:flex sm:flex-row flex-wrap mx-4 md:mx-8 rounded-2xl shadow-lg shadow-gray-700 animate-center-fade bg-white"
      >
        <AnimateOnVisible
          animationClass={"animate-bottom-fade"}
          styles="flex-1 rounded-l-2xl"
        >
          <h3 className="text-4xl w-[90%] p-8 text-teal-700">
            <b>ECASYS</b> <br />
            Billing and Inventory Control System
          </h3>

          <p className="text-lg text-gray-800 px-8">
            <b>ECASYS </b>It's a billing and inventory control system developed
            for a company selling buildable toys and Legos.
          </p>

          <ul>
            <li className="pl-8 text-lg text-gray-700 my-4">
              <b>Fun design based on the company's theme.</b>
            </li>
            <li className="pl-8 text-lg text-gray-700 my-4">
              <b>Billing and reports.</b>
            </li>
            <li className="pl-8 text-lg text-gray-700 my-4">
              <b>Easy-to-use inventory management.</b>
            </li>
            <li className="pl-8 text-lg text-gray-700 my-4">
              <b>Developed with these technologies:</b>
              <ul className="list-disc pl-8 text-lg text-gray-700 my-4">
                <li className="text-sm">PHP MVC + PDO</li>
                <li className="text-sm">JavaScript + jQuery</li>
                <li className="text-sm">CSS + Bootstrap CSS</li>
                <li className="text-sm">MySQL as the DB engine</li>
              </ul>
            </li>
            <li className="pl-8 text-lg text-gray-700 mt-4 mb-8">
              <b>Generates reports using TCPDF.</b>
            </li>
          </ul>

          <div className="flex items-center justify-end px-8 gap-3">
            <CustomButtons
              text="Visit repository"
              icon={<GitHubIcon className="inline-block ml-1" />}
              url="https://github.com/AlbertoDPM30/ecasys"
            />
          </div>
        </AnimateOnVisible>
        <AnimateOnVisible
          animationClass={"animate-right-fade"}
          styles="flex-1 flex justify-center relative z-10 md:bg-[#237ccf] max-sm:rounded-b-2xl sm:rounded-r-2xl h-[200px] md:h-[650px] overflow-hidden p-8"
        >
          <Image // ONLY FOR MOBILE
            src={"./images/ecasys/ecasys-ventas-desktop.jpeg"}
            width={550}
            height={500}
            alt="Principal"
            className="block md:hidden absolute z-10 shadow-2xl shadow-neutral-800/70 "
            style={{
              borderRadius: 7,
            }}
            loading="lazy"
          />

          <Image
            src={"./images/ecasys/ecasys-reportes-desktop.jpeg"}
            width={550}
            height={500}
            alt="Principal"
            className="hidden md:block absolute z-10 shadow-2xl shadow-neutral-800/70 brightness-75 transition-all ease-in-out duration-200 hover:z-30 hover:brightness-100 hover:-translate-y-3.5"
            style={{
              borderRadius: 7,
              left: "32px",
              bottom: 10,
              width: "100%",
            }}
            loading="lazy"
          />

          <Image
            src={"./images/ecasys/ecasys-ventas-desktop.jpeg"}
            width={350}
            height={200}
            alt="Principal"
            className="hidden md:block absolute z-10 shadow-4xl shadow-neutral-800/80 brightness-95 transition-all ease-in-out duration-200 hover:z-30 hover:brightness-100 hover:-translate-y-3.5"
            style={{
              borderRadius: 7,
              right: "32px",
              bottom: 100,
              width: "calc(100% - 40px)",
            }}
            loading="lazy"
          />
        </AnimateOnVisible>
      </AnimateOnVisible>
    </section>
  );
}
