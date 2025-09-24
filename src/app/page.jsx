import Header from "@/components/layout/Header.jsx";
import Profile from "@/components/layout/Profile.jsx";
import Aboutme from "@/components/layout/Aboutme.jsx";
import TechnicalTools from "@/components/layout/TechnicalTools";
import Projects from "@/components/layout/Projects.jsx";
import Services from "@/components/layout/Services.jsx";
import Contactme from "@/components/layout/Contactme";

export default function Home() {
  const tagItems = {
    About_me: {
      item: "About me",
      url: "#aboutme",
    },
    Services: {
      item: "Services",
      url: "#services",
    },
    Projects: {
      item: "Projects",
      url: "#projects",
    },
    Contact_me: {
      item: "Contact me",
      url: "#contactme",
    },
    GitHub: {
      item: "GitHub",
      url: "https://github.com/AlbertoDPM30",
    },
  };

  return (
    <>
      <Header tags={tagItems} />
      <main className="flex flex-col gap-8">
        {/* ABOUT ME */}
        <Profile
          name={"Alberto Daniel Pérez Moreno"}
          tags={"Web Developer | Full Stack | Aplication Designer"}
        />
        <Aboutme />
        <TechnicalTools /> {/* TECHNICAL TOOLS */}
        <Services /> {/* SERVICIOS */}
        <Projects /> {/* PROJECTS */}
        <Contactme /> {/* CONTACT ME */}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}
