
import Dropzone from '@/components/dropzone';
import  {TypewriterEffectSmooth}  from "@/components/typewriter-effect";
export default function Home() {
  const words = [
    {
      text: "Unlimited",
    },
    {
      text: "File",
    },
    {
      text: "Conversion",
    },
    {
      text: "with",
    },
    {
      text: "FIL.IO",
      className: "text-red-600 dark:text-red-600",
    },
  ];
  return (
    <div className="flex flex-col items-center pb-30 bg-black font-sans">
      {/* Title + Desc */}
      <div className="space-y-6 text-center mt-40 ">
        <div className="mx-72 mb-6">
          <TypewriterEffectSmooth words={words} />
        </div>
        <h1 className="text-3xl md:text-2xl font-thin text-opacity-60 text-slate-100 transition-opacity duration-500 ease-in-out opacity-80 hover:opacity-100">
          Fast. Free. Reliable.
        </h1>
        <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          The power to seamlessly convert images, audio files, and videos with
          unparalleled freedom, all without breaking the bank.
        </p>
      </div>
      <Dropzone />
    </div>
  );
}
