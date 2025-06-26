import Image from "next/image";

export default function Profile({ name, tags }) {
  return (
    <section className="flex justify-between items-center flex-row flex-nowrap h-[250px] px-8 pt-[8rem] bg-neutral-800">
      <div className="animate-left-fade">
        <h1 className="text-neutral-100 text-6xl font-extrabold border-b-2 mb-2">
          {name}
        </h1>
        <h3 className="text-md text-indigo-100">{tags}</h3>
      </div>
      <div className="relative z-20 hover:scale-125 transition-all ease-in-out duration-500 rounded-full bg-indigo-100 p-1 mx-3.5 w-52 h-52 shadow-md shadow-neutral-800/20 animate-right-fade">
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
            zIndex: "10",
          }}
        ></Image>
      </div>
    </section>
  );
}
