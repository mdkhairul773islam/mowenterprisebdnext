"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center gap-10 h-[calc(100vh-211px)] bg-white shadow-md my-5 rounded">
      <Image
        src="/not-found-computer.svg"
        height={308}
        width={288}
        alt="Not Found image"
      />
      <div className="flex items-start flex-col gap-3">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-primary">
          404 Not Found
        </h1>
        <p className="text-lg text-slate-800">Oops! That page doesn’t exist.</p>
        <button
          onClick={() => router.back()}
          className="bg-primary uppercase font-medium tracking-widest duration-300 hover:bg-dark-purple text-white px-8 py-2  rounded inline-block"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
