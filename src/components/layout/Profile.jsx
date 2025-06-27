import Image from "next/image";

export default function Profile({ name, tags }) {
  return (
    <section className="flex justify-between items-center flex-row flex-nowrap md:px-8 md:pt-[8rem] px-4 pt-[4rem] w-[100dvw] bg-neutral-800">
      <div className="animate-left-fade flex-3">
        <h1 className="text-neutral-100 md:text-6xl text-2xl font-extrabold border-b-2 pb-2 mb-2">
          {name}
        </h1>
        <h3 className="md:text-sm text-xs text-indigo-100 pb-2">{tags}</h3>
      </div>
      <div className="relative z-10 hover:scale-125 transition-all ease-in-out duration-500 rounded-full md:bg-indigo-100 p-0 md:p-1 mx-3.5 md:-mb-6 md:w-52 md:h-52 w-24 h-24 shadow-md shadow-neutral-800/20 animate-right-fade">
        <Image
          src={"./images/image.jpg"}
          width={200}
          height={200}
          alt="Presentation photo"
          style={{
            objectFit: "fill",
            borderRadius: "50%",
            aspectRatio: "1 / 1",
            position: "absolute",
          }}
        ></Image>
      </div>
    </section>
  );
}
