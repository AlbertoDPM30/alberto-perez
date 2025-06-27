import DomainVerificationRoundedIcon from "@mui/icons-material/DomainVerificationRounded";
import Image from "next/image";
import AnimateOnVisible from "../ui/AnimateOnVisible";

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
            Consolitex® Bienes Raices <br />
            Web page
          </h3>
        </AnimateOnVisible>
        <AnimateOnVisible
          animationClass={"animate-right-fade"}
          styles="flex-1 flex justify-center relative z-10 bg-yellow-300 rounded-r-2xl h-[550px] overflow-hidden p-8"
        >
          <Image
            src={"./images/consolitex/principal-desktop.jpeg"}
            width={550}
            height={500}
            alt="Principal"
            className="absolute z-10 shadow-2xl shadow-neutral-800/70 brightness-75 transition-all ease-in-out duration-200 hover:z-30 hover:brightness-100 hover:-translate-y-3.5"
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
            className="absolute z-10 shadow-2xl shadow-neutral-800/80 brightness-90 transition-all ease-in-out duration-200 hover:z-30 hover:brightness-100 hover:-translate-y-3.5"
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
            className="absolute z-10 shadow-2xl shadow-neutral-800/90 brightness-95 transition-all ease-in-out duration-200 hover:z-30 hover:brightness-100 hover:-translate-y-3.5"
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
