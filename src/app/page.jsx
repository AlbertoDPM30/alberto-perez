import Header from "@/components/layout/Header.jsx";
import Profile from "@/components/layout/Profile.jsx";
import Aboutme from "@/components/layout/Aboutme.jsx";
import TechnicalTools from "@/components/layout/TechnicalTools";
import Projects from "@/components/layout/Projects.jsx";

export default function Home() {
  const tagItems = {
    About_me: {
      item: "About me",
      url: "#aboutme",
    },
    Projects: {
      item: "Projects",
      url: "https://github.com/AlbertoDPM30",
    },
    Services: {
      item: "Services",
      url: "#services",
    },
    Contact: {
      item: "Contact",
      url: "#contact",
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
        <Projects /> {/* PROJECTS */}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}
