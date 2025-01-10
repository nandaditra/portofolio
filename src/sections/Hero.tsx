import Title from "@/components/Title";
import Image from "next/image";

export default function Hero(){
    return (
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="my-auto w-full md:w-1/2">
            <Title style="text-4xl font-bold text-black" title="Hello Everyone!"/>
            <p className="py-4 mt-3 text-justify text-black text-lg">Graduate from Computer Science student at Brawijaya University. I&apos;m interest and passion in Software Engineer. Proficient in Javascript, React, NextJs,and Typescript. Interesting in frontend development with several tech stack like React.js, Next.js, and Angular. Keep learn and update tehnology</p>
            <button className="rounded-lg px-4 py-2 my-5 bg-black hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300 ">
                <a className="font-bold"
                  href="https://drive.google.com/drive/folders/1d0ixkd9W2WzwRomPYIOe53HuIoIjYXOw"
                  >Download Resume
                </a>
             </button>
        </div>
         <div className="justify-items-center w-full md:w-1/2">
            <Image
              className="relative rounded-full items-center mx-auto"
              src="/profile.jpeg"
              alt="Next.js Logo"
              width={400}
              height={400}
              priority
            />
         </div>
      </div>

    )
}

