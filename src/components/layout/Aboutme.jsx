"use client";

import { useState, useEffect, useRef } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AirlineStopsRoundedIcon from "@mui/icons-material/AirlineStopsRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import WysiwygRoundedIcon from "@mui/icons-material/WysiwygRounded";
import ForwardToInboxRoundedIcon from "@mui/icons-material/ForwardToInboxRounded";

import CustomIcons from "../ui/CustomIcons";
import AnimateOnVisible from "../ui/AnimateOnVisible";

export default function Aboutme() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <section
      id="aboutme"
      className="bg-white px-10 mx-4 md:mx-8 rounded-2xl shadow-lg shadow-gray-700 animate-center-fade"
    >
      <article className="flex flex-row flex-wrap items-center gap-8 justify-center h-full py-14">
        <div className="flex-1 md:flex-3 animate-left-fade ">
          <h2 className="text-4xl font-bold text-indigo-900 mb-4 flex flex-row">
            <AccountCircleRoundedIcon
              sx={{ fontSize: 40 }}
              className="inline-block"
            />
            About Me
          </h2>
          <p className="text-lg text-gray-700">
            Hello! I'm Alberto Daniel Pérez Moreno, a passionate web developer
            with expertise in full-stack development and application design. I
            love creating dynamic and responsive web applications that provide
            great user experiences.
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 animate-right-fade">
          <h3 className="text-3xl font-bold text-indigo-900 items-center flex flex-row">
            <ForwardToInboxRoundedIcon
              fontSize="large"
              className="inline-block"
            />
            Contact me
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            <a target="_blank" href="mailto:albertodpm2000@gmail.com">
              <CustomIcons
                src={"./icons/email.svg"}
                width={32}
                height={32}
                alt={"email"}
              />
            </a>
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
          </div>
        </div>
      </article>
      <article className="py-6 text-gray-800 flex flex-row flex-wrap gap-8">
        <div className="flex-3 animate-left-fade ">
          <h3 className="text-3xl font-semibold mb-4 text-indigo-900">
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

        <div className="flex-1 bg-indigo-900 text-white p-6 rounded-lg shadow-md animate-right-fade">
          <h3 className="text-3xl font-semibold mb-4 items-center flex flex-row">
            <GradeRoundedIcon fontSize="large" className="inline-block" />
            Skills
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Full Stack Development</li>
            <li>Responsive Web Design</li>
            <li>Application Design</li>
            <li>Database Management</li>
            <li>Version Control (Git)</li>
          </ul>
        </div>

        <div className="flex flex-row flex-wrap gap-8 w-full">
          <AnimateOnVisible
            animationClass="animate-left-fade"
            styles="flex-1 border-b-4 border-r-0 md:border-b-0 md:border-r-4 border-indigo-900 ml-1 pb-4 px-4"
          >
            <h3 className="text-3xl font-semibold mb-8 text-indigo-900">
              Education
            </h3>
            <div className="mb-4">
              <div className="flex flex-row items-center gap-3 mb-4">
                <h5 className="text-xl font-semibold text-indigo-900">
                  Collage:
                </h5>
                <p className="text-gray-800">
                  Instituto Universitario de Tecnologías para la Informática
                </p>
              </div>
              <div className="flex flex-row items-center gap-3 mb-4">
                <h5 className="text-xl font-semibold text-indigo-900">
                  Career:
                </h5>
                <p className="text-gray-800">TSU. Systems Analyst</p>
              </div>
              <div className="flex flex-row items-center gap-3 mb-4">
                <h5 className="text-xl font-semibold text-indigo-900">Term:</h5>
                <p className="text-gray-800">2023 - Current</p>
              </div>
            </div>
          </AnimateOnVisible>
          <AnimateOnVisible
            animationClass="animate-bottom-fade"
            styles="flex-1 border-b-4 border-r-0 md:border-b-0 md:border-r-4 border-indigo-900 ml-1 pb-4 px-4"
          >
            <h3 className="text-3xl font-semibold mb-8 text-indigo-900">
              Experiences
            </h3>
            <div className="mb-4">
              <ul>
                <h5 className="text-xl font-semibold text-indigo-900 mb-4">
                  Web developer for 2 years at{" "}
                  <a
                    target="_blank"
                    href="https://consolitex.org/"
                    className="text-indigo-700"
                  >
                    Consolitex® Real Estate
                  </a>
                  .
                </h5>
                <li className="flex items-center gap-2 mb-2">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#312c85" }}
                  />
                  Creation of Website
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#312c85" }}
                  />
                  Contributor in management system
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#312c85" }}
                  />
                  Handling of SQL databases
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#312c85" }}
                  />
                  Server maintenance
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#312c85" }}
                  />
                  computer and printer support
                </li>
              </ul>
            </div>
          </AnimateOnVisible>
          <AnimateOnVisible animationClass="animate-right-fade" styles="flex-1">
            <h3 className="text-3xl font-semibold mb-8 text-indigo-900">
              Qualities
            </h3>
            <div className="mb-4 border-b-2 border-indigo-900 pb-4">
              <h5 className="text-xl font-semibold text-indigo-900">
                Languages:
              </h5>
              <p>Spanish (Native), English (Basic)</p>
            </div>
            <div className="mb-4">
              <h5 className="text-xl font-semibold text-indigo-900">
                Technologies and tools:
              </h5>
              <ul>
                <li className="flex items-center gap-2 mb-1">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#312c85" }}
                  />
                  HTML, CSS, JavaScript, PHP, Python.
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#312c85" }}
                  />
                  React, Next.js, jQuery, Laravel.
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#312c85" }}
                  />
                  Bootstrap CSS, Tailwind CSS.
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#312c85" }}
                  />
                  SQL (MySQL, SQL Server), MongoDB.
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#312c85" }}
                  />
                  Git and GitHub.
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#312c85" }}
                  />
                  Figma for UI/UX design.
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <GradeRoundedIcon
                    fontSize="small"
                    style={{ color: "#312c85" }}
                  />
                  Scrum (Trello).
                </li>
              </ul>
            </div>
          </AnimateOnVisible>
        </div>
      </article>
    </section>
  );
}
