import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header className="h-[5rem] flex items-center fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-800/30 to-purple-800/10 backdrop-filter backdrop-blur-md z-50"></div>
        <nav className=" relative z-60">
          <ul className="w-screen text-xl font-semibold flex flex-row flex-nowrap justify-evenly items-center">
            <li>
              <a
                className="text-indigo-500 text-shadow-md text-shadow-[#26262668]"
                href="#aboutme"
              >
                About me
              </a>
            </li>
            <li>
              <a
                className="text-indigo-500 text-shadow-md text-shadow-[#26262668]"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-indigo-500 text-shadow-md text-shadow-[#26262668]"
                href="#experience"
              >
                Experience
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col gap-8">
        {/* ABOUT ME */}
        <section className="flex justify-between items-center flex-row flex-nowrap h-[250px] px-8 pt-[8rem] bg-neutral-800">
          <div className="">
            <h1 className="text-[#ad7adf] text-5xl font-extrabold border-b-2">
              Alberto Daniel Pérez Moreno
            </h1>
            <h3 className="text-md text-[#c2a2e1]">
              Web Developer | Full Stack | GUI Aplication Designer
            </h3>
          </div>
          <div className="relative z-20 hover:scale-125 transition-all ease-in-out duration-500 rounded-full bg-indigo-600 p-1 mx-3.5 w-52 h-52">
            <Image
              src={"./images/image.png"}
              width={200}
              height={200}
              alt="Presentation photo"
              style={{
                objectFit: "fill",
                borderRadius: "50%",
                position: "absolute",
                zIndex: "10",
              }}
            ></Image>
          </div>
        </section>
        <section
          id="aboutme"
          className="bg-white h-[1000px] mx-8 rounded-2xl shadow-lg shadow-gray-700"
        ></section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
