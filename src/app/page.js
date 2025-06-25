import Header from "@/components/layout/Header";
import Profile from "@/components/layout/Profile";
import Aboutme from "@/components/layout/Aboutme";

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
    <div className="">
      <Header tags={tagItems} />
      <main className="flex flex-col gap-8">
        {/* ABOUT ME */}
        <Profile
          name={"Alberto Daniel Pérez Moreno"}
          tags={"Web Developer | Full Stack | GUI Aplication Designer"}
        />
        <Aboutme />
        {/* PROJECTS */}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
