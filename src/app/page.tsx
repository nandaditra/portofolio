import Image from 'next/image'
import Header from './header'
import Footer from './footer'

export default function Home() {
  return (
    <>
    <Header />

    <main className="container px-12 md:px-24 py-16">
      <div className="flex flex-col-reverse md:flex-row gap-4">
         <div className="my-auto w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-black">Hello Everyone!</h1>
            <p className="py-4 mt-3 text-justify text-black text-lg">Hi, My name Nanda Aditya Putra. I am final year Computer Science student at Brawijaya University. I&apos;m interest and passion in Software Engineer. Proficient in Javascript, React, NextJs,and Typescript. Have experience for lest than one year as Software Engineer in startup company. </p>
            <ul className="flex flex-row my-3">
               <li className="px-3">
                  <a href="https://www.instagram.com/nandaditra/">
                     <i className="fa-brands fa-instagram fa-2x"></i>
                  </a>
               </li>
               <li className="px-3">
                  <a href="https://www.linkedin.com/in/nandaditra">
                     <i className="fa-brands fa-linkedin fa-2x"></i>
                  </a>
               </li>
               <li className="px-3">
                  <a href="https://github.com/nandaditra">
                     <i className="fa-brands fa-github fa-2x"></i>
                  </a>
               </li>
               <li className="px-3">
                  <a href="https://www.facebook.com/NandaditraOsd12/">
                     <i className="fa-brands fa-facebook fa-2x"></i>
                  </a>
               </li>
            </ul>

            <button className="rounded-md px-4 py-2 my-5 bg-black hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300">
                <a
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

      <div className="py-16">
          <h1 className="text-center text-black font-bold text-3xl">Experience</h1>
          <div className="flex flex-col gap-5 py-12">
               <div className="w-1/2 flex flex-row mx-auto gap-4 rounded-md border border-1 p-3">
                   <Image 
                     className="relative"
                     src="/assets/img/FXMedia/fxmedia_fxmweb_logo.jpg"
                     alt="FXMedia Internet Pte Ltd Logo"
                     width={200}
                     height={200}
                     priority
                   />

                   <div className="text-black">
                        <h3 className="font-semibold text-2xl">FXMedia Internet Pte Ltd</h3>
                        <p>Frontend Developer Intern</p>
                        <p className="text-sm">Singapore, 2 January 2024 - 30 September 2024</p>
                        <p className="text-sm text-justify my-3">
                           In here, I have responsiblity for assist senior engineer to research new technology, developed various project from client, fix and maintain project and learn new technology
                        </p>

                        <button className="text-sm float-right font-semibold">View Project</button>
                   </div>
               </div>
               <div className="w-1/2 flex flex-row mx-auto gap-4 rounded-md border border-1 p-3">
                   <Image 
                     className="relative"
                     src="/assets/img/SagaraTeknologi/sagara.png"
                     alt="Sagara Teknologi"
                     width={200}
                     height={200}
                     priority
                   />

                   <div className="text-black">
                        <h3 className="font-semibold text-2xl">Sagara Teknologi</h3>
                        <p>Frontend Engineer Intern</p>
                        <p className="text-sm">Jakarta, Indonesia, 10 July 2023 - 10 October 2023</p>
                        <p className="text-sm text-justify my-3">
                           In here, I have responsiblity to handle two project, including fix and maintain TechConsulta Project and developed jobFortech from scract using React and Tailwind
                        </p>

                        <button className="text-sm float-right font-semibold">View Project</button>
                   </div>
               </div>

               <div className="w-1/2 flex flex-row mx-auto gap-4 rounded-md border border-1 p-3">
                   <Image 
                     className="relative"
                     src="/assets/img/bangkit/bangkit_logo.jpg"
                     alt="Sagara Teknologi"
                     width={200}
                     height={200}
                     priority
                   />

                   <div className="text-black">
                        <h3 className="font-semibold text-2xl">Bangkit Academy 2023</h3>
                        <p>Android Learning Path</p>
                        <p className="text-sm">Jakarta, Indonesia, 16 February 2023 - 31 July 2023</p>
                        <p className="text-sm text-justify my-3">
                           In here, I collaborate with cross functional team to developed and integrated RAB Calculator feature with Product Manager, UI/UX Designer, and Backend Developer</p>

                        <button className="text-sm float-right font-semibold">View Project</button>
                   </div>
               </div>

               <div className="w-1/2 flex flex-row mx-auto gap-4 rounded-md border border-1 p-3">
                   <Image 
                     className="relative"
                     src="/assets/img/OKEGarden/okegarden_logo.jpg"
                     alt="Sagara Teknologi"
                     width={200}
                     height={200}
                     priority
                   />

                   <div className="text-black">
                        <h3 className="font-semibold text-2xl">OKE Garden</h3>
                        <p>Frontend Engineer Intern</p>
                        <p className="text-sm">Jakarta, Indonesia, 10 July 2023 - 10 October 2023</p>
                        <p className="text-sm text-justify my-3">
                           In here, I collaborate with cross functional team to developed and integrated RAB Calculator feature with Product Manager, UI/UX Designer, and Backend Developer</p>

                        <button className="text-sm float-right font-semibold">View Project</button>
                   </div>
               </div>
          </div>
      </div>

      <div className="py-2">
          <h1 className="text-center font-bold text-black text-3xl">Relevant Project</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-8 text-justify">
               <div className="p-10 rounded-xl bg-sky-900">
                  <h1 className="text-2xl font-bold">Bestimall E-commerce Website</h1>

                  <p className="text-sm my-7">frontend e-commerce website which provided t-shirt, electronic and jewelery. This website built with tech stack Angular, Typescript, Bootstrap, NodeJs, Scss and Angular Material.</p>

                  <a className="text-sm"><i className="fa-brands fa-github"></i> Github</a>
                  <a className="text-sm ml-4"><i className="fa-solid fa-house"></i> Live Demo</a>
               </div>

               <div className="p-10 rounded-xl bg-sky-900">
                  <h1 className="text-2xl font-bold">Freephoto Website</h1>

                  <p className="text-sm my-7">Freephoto is website which provides many various photo and picture freely. This website build using many stack like React and tailwindcss, Besided that, I&apos;m also add authentication with Firebase auth and Deploy using vercel app to remote server</p>
              
                  <a className="text-sm"><i className="fa-brands fa-github"></i> Github</a>
                  <a className="text-sm ml-4"><i className="fa-solid fa-house"></i> Live Demo</a>
               </div>
          </div>
      </div>
    </main>

    <Footer />
    </>
  )
}
