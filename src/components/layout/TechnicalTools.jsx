import CustomToolsIcons from "../ui/CustomToolsIcons";
import AnimateOnVisible from "../ui/AnimateOnVisible";

export default function TechnicalTools() {
  return (
    <section className="flex flex-col">
      <AnimateOnVisible
        animationClass="animate-top-fade"
        styles="px-8 py-6 bg-indigo-900"
      >
        <h2 className="text-neutral-200 border-b-4 border-neutral-200 text-4xl font-bold pb-4">
          Technical Tools
        </h2>
      </AnimateOnVisible>
      <AnimateOnVisible
        animationClass={"animate-bottom-fade"}
        styles="px-8 py-4 bg-white"
      >
        <h3 className="text-indigo-800 font-semibold text-2xl mb-4">
          Programming Languages:
        </h3>
        <AnimateOnVisible
          animationClass={"animate-left-fade"}
          styles="grid grid-cols-2 sm:grid-cols-8 gap-8"
        >
          <CustomToolsIcons src="./icons/html5.svg" alt="HTML" text="HTML" />
          <CustomToolsIcons src="./icons/css3.svg" alt="CSS" text="CSS" />
          <CustomToolsIcons
            src="./icons/javascript.svg"
            alt="Javascript"
            text="Javascript"
          />
          <CustomToolsIcons src="./icons/php.svg" alt="PHP" text="PHP" />
          <CustomToolsIcons
            src="./icons/python.svg"
            alt="Python"
            text="Python"
          />
        </AnimateOnVisible>
      </AnimateOnVisible>
      <AnimateOnVisible
        animationClass={"animate-bottom-fade"}
        styles="px-8 py-4 bg-white"
      >
        <h3 className="text-indigo-800 font-semibold text-2xl mb-4">
          Frameworks & Libraries:
        </h3>
        <AnimateOnVisible
          animationClass={"animate-left-fade"}
          styles="grid grid-cols-2 sm:grid-cols-8 gap-8"
        >
          <CustomToolsIcons
            src="./icons/laravel.svg"
            alt="Laravel"
            text="Laravel"
          />
          <CustomToolsIcons src="./icons/react.svg" alt="React" text="React" />
          <CustomToolsIcons
            src="./icons/nextjs.svg"
            alt="Next.JS"
            text="Next.JS"
          />
          <CustomToolsIcons
            src="./icons/jquery.svg"
            alt="jQuery"
            text="jQuery"
          />
          <CustomToolsIcons
            src="./icons/nodejs.svg"
            alt="Node JS"
            text="Node JS"
          />
          <CustomToolsIcons
            src="./icons/tailwind.svg"
            alt="Tailwind CSS"
            text="Tailwind CSS"
          />
          <CustomToolsIcons
            src="./icons/bootstrap.svg"
            alt="Bootstrap"
            text="Bootstrap"
          />
        </AnimateOnVisible>
      </AnimateOnVisible>
      <AnimateOnVisible
        animationClass={"animate-bottom-fade"}
        styles="px-8 py-4 bg-white"
      >
        <h3 className="text-indigo-800 font-semibold text-2xl mb-4">
          Databases:
        </h3>
        <AnimateOnVisible
          animationClass={"animate-left-fade"}
          styles="grid grid-cols-2 sm:grid-cols-8 gap-8"
        >
          <CustomToolsIcons src="./icons/mysql.svg" alt="MySQL" text="MySQL" />
          <CustomToolsIcons
            src="./icons/microsoftsqlserver.svg"
            alt="SQL Server"
            text="SQL Server"
          />
          <CustomToolsIcons
            src="./icons/mongodb.svg"
            alt="MongoDB"
            text="MongoDB"
          />
        </AnimateOnVisible>
      </AnimateOnVisible>
      <AnimateOnVisible
        animationClass={"animate-bottom-fade"}
        styles="px-8 py-4 bg-white"
      >
        <h3 className="text-indigo-800 font-semibold text-2xl mb-4">
          Development Tools:
        </h3>
        <AnimateOnVisible
          animationClass={"animate-left-fade"}
          styles="grid grid-cols-2 sm:grid-cols-8 gap-8"
        >
          <CustomToolsIcons src="./icons/figma.svg" alt="Figma" text="Figma" />
          <CustomToolsIcons
            src="./icons/material-ui.svg"
            alt="Materia UI"
            text="Materia UI"
          />
          <CustomToolsIcons src="./icons/git.svg" alt="Git" text="Git" />
          <CustomToolsIcons
            src="./icons/vs-code.svg"
            alt="VS Code"
            text="VS Code"
          />
          <CustomToolsIcons
            src="./icons/postman.svg"
            alt="Postman"
            text="Postman"
          />
        </AnimateOnVisible>
      </AnimateOnVisible>
    </section>
  );
}
