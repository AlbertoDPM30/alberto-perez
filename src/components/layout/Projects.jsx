import DomainVerificationRoundedIcon from "@mui/icons-material/DomainVerificationRounded";
import ScreenShareRoundedIcon from "@mui/icons-material/ScreenShareRounded";
import Image from "next/image";
import AnimateOnVisible from "../ui/AnimateOnVisible";
import CustomButtons from "../ui/CustomButtons";

export default function Projects() {
  return (
    <>
      <AnimateOnVisible animationClass="animate-bottom-fade">
        <h2 className="flex items-center text-4xl font-bold text-indigo-900 px-14 pt-8">
          <DomainVerificationRoundedIcon
            sx={{ fontSize: 40 }}
            className="inline-block"
          />
          My Projects
        </h2>
      </AnimateOnVisible>
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
          styles="flex-1 flex justify-center relative z-10 md:bg-yellow-300 max-sm:rounded-b-2xl sm:rounded-r-2xl h-[350px] md:h-[640px] overflow-hidden p-8"
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
    </>
  );
}
