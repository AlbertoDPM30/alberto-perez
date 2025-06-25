import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AirlineStopsRoundedIcon from "@mui/icons-material/AirlineStopsRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import WysiwygRoundedIcon from "@mui/icons-material/WysiwygRounded";

import CustomIcons from "../ui/CustomIcons";

export default function Aboutme() {
  return (
    <section
      id="aboutme"
      className="bg-white px-10 mx-8 rounded-2xl shadow-lg shadow-gray-700 animate-center-fade"
    >
      <div className="flex flex-row items-center gab-8 justify-center h-full py-14">
        <div className="flex-3 animate-left-fade">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4 flex flex-row">
            <AccountCircleRoundedIcon
              sx={{ fontSize: 40 }}
              className="inline-block"
            />
            About Me
          </h2>
          <p className="text-lg text-gray-700">
            Hello! I'm Alberto Daniel Pérez Moreno, a passionate web developer
            with expertise in full-stack development and GUI application design.
            I love creating dynamic and responsive web applications that provide
            great user experiences.
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 animate-right-fade">
          <h3 className="text-3xl font-bold text-indigo-600 items-center flex flex-row">
            <WysiwygRoundedIcon fontSize="large" className="inline-block" />
            Softwares
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CustomIcons
              src={"./icons/vs-code.svg"}
              width={32}
              height={32}
              alt={"figma"}
            />
            <CustomIcons
              src={"./icons/figma.svg"}
              width={32}
              height={32}
              alt={"figma"}
            />
            <CustomIcons
              src={"./icons/git.svg"}
              width={32}
              height={32}
              alt={"figma"}
            />
            <CustomIcons
              src={"./icons/postman.svg"}
              width={32}
              height={32}
              alt={"figma"}
            />
          </div>
        </div>
      </div>
      <article className="py-6 text-gray-800 flex flex-row flex-wrap gap-8">
        <div className="flex-3 animate-left-fade">
          <h3 className="text-3xl font-semibold mb-4 text-indigo-600">
            <AirlineStopsRoundedIcon
              fontSize="large"
              className="inline-block"
            />
            My Journey
          </h3>
          <p className="mb-4">
            I started my journey in web development with a keen interest in
            building interactive and user-friendly applications. Over the years,
            I have honed my skills in various technologies, including HTML, CSS,
            JavaScript, React, Node.js, and more.
          </p>
        </div>

        <div className="flex-1 bg-indigo-600 text-white p-6 rounded-lg shadow-md animate-right-fade">
          <h3 className="text-3xl font-semibold mb-4 items-center flex flex-row">
            <GradeRoundedIcon fontSize="large" className="inline-block" />
            Skills
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Full Stack Development</li>
            <li>Responsive Web Design</li>
            <li>GUI Application Design</li>
            <li>Database Management</li>
            <li>Version Control (Git)</li>
          </ul>
        </div>

        <div className="flex flex-row flex-wrap gap-8 w-full">
          <div className="flex-1 border-r-4 border-indigo-600 ml-1 pr-4 animate-left-fade">
            <h3 className="text-3xl font-semibold mb-8 text-indigo-600">
              Education
            </h3>
            <div className="mb-4">
              <div className="flex flex-row items-center gap-3 mb-4">
                <h5 className="text-xl font-semibold text-indigo-600">
                  Collage:
                </h5>
                <p className="text-gray-800">
                  Instituto Universitario de Tecnologías para la Informática
                </p>
              </div>
              <div className="flex flex-row items-center gap-3 mb-4">
                <h5 className="text-xl font-semibold text-indigo-600">
                  Career:
                </h5>
                <p className="text-gray-800">TSU. Systems Analyst</p>
              </div>
              <div className="flex flex-row items-center gap-3 mb-4">
                <h5 className="text-xl font-semibold text-indigo-600">Term:</h5>
                <p className="text-gray-800">2023 - Current</p>
              </div>
            </div>
          </div>
          <div className="flex-1 border-r-4 border-indigo-600 ml-1 pr-4 animate-center-fade">
            <h3 className="text-3xl font-semibold mb-8 text-indigo-600">
              Experiences
            </h3>
            <div className="mb-4">
              <ul>
                <h5 className="text-xl font-semibold text-indigo-600 mb-4">
                  Web developer for 2 years at{" "}
                  <a
                    target="_blank"
                    href="https://consolitex.org/"
                    className="text-indigo-900"
                  >
                    Consolitex® Real Estate
                  </a>
                  .
                </h5>
                <li className="flex items-center gap-2 mb-2">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#4f39f6" }}
                  />
                  Creation of Website
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#4f39f6" }}
                  />
                  Contributor in management system
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#4f39f6" }}
                  />
                  Handling of SQL databases
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#4f39f6" }}
                  />
                  Server maintenance
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#4f39f6" }}
                  />
                  computer and printer support
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 animate-right-fade">
            <h3 className="text-3xl font-semibold mb-8 text-indigo-600">
              Qualities
            </h3>
            <div className="mb-4 border-b-4 border-indigo-600 pb-4">
              <h5 className="text-xl font-semibold text-indigo-600">
                Languages:
              </h5>
              <p>Spanish (Native), English (Basic)</p>
            </div>
            <div className="mb-4">
              <h5 className="text-xl font-semibold text-indigo-600">
                Technologies and tools:
              </h5>
              <ul>
                <li className="flex items-center gap-2 mb-1">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#4f39f6" }}
                  />
                  HTML, CSS, JavaScript, PHP, Python.
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#4f39f6" }}
                  />
                  React, Next.js, jQuery, Laravel.
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#4f39f6" }}
                  />
                  Bootstrap CSS, Tailwind CSS.
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#4f39f6" }}
                  />
                  SQL (MySQL, SQL Server, MongoDB).
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#4f39f6" }}
                  />
                  Git and GitHub.
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#4f39f6" }}
                  />
                  Figma for UI/UX design.
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#4f39f6" }}
                  />
                  Trello (Scrum).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
