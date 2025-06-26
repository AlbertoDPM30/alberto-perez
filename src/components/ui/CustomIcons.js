import Image from "next/image";

export default function CustomIcons({ src, width, height, alt }) {
  return (
    <div className="flex items-center justify-center w-fit h-fit p-2.5 bg-indigo-900 rounded-lg shadow-md shadow-gray-700/35">
      <Image src={src} width={width} height={height} alt={alt}></Image>
    </div>
  );
}
