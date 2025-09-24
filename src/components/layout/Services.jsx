"use client";

import AnimateOnVisible from "../ui/AnimateOnVisible";
import HandymanIcon from "@mui/icons-material/Handyman";

export default function Services() {
  return (
    <section id="services">
      <div className="container mx-auto">
        <AnimateOnVisible animationClass="animate-bottom-fade">
          <h2 className="flex items-center justify-center text-4xl font-bold text-indigo-900 px-14 pt-8">
            <HandymanIcon sx={{ fontSize: 40 }} className="inline-block" />
            Services
          </h2>
        </AnimateOnVisible>

        {/* PANEL DE SERVICIOS */}
        <AnimateOnVisible animationClass="animate-bottom-fade">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 py-8">
            {/* Servicio 1 */}
            <div className="bg-indigo-900 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-white text-2xl font-semibold">Web Pages</h3>
              <p className="text-zinc-300 mt-3">
                I design and develop modern, responsive websites tailored to
                your needs.
              </p>
            </div>
            {/* Servicio 2 */}
            <div className="bg-indigo-900 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-white text-2xl font-semibold">Web Systems</h3>
              <p className="text-zinc-300 mt-3">
                I create robust web applications to streamline your business
                processes.
              </p>
            </div>
            {/* Servicio 3 */}
            <div className="bg-indigo-900 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-white text-2xl font-semibold">
                IU/UX Design
              </h3>
              <p className="text-zinc-300 mt-3">
                I design intuitive user interfaces and engaging user
                experiences.
              </p>
            </div>
            {/* Servicio 4 */}
            <div className="bg-indigo-900 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-white text-2xl font-semibold">
                Database Management
              </h3>
              <p className="text-zinc-300 mt-3">
                I design and manage efficient databases to ensure data integrity
                and accessibility.
              </p>
            </div>
          </div>
        </AnimateOnVisible>
      </div>
    </section>
  );
}
