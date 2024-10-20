import Image from 'next/image'
import Header from './header'
import Footer from './footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Header />

    <main>
      <div className="container px-12 md:px-24 py-16">
      <div className="flex flex-col-reverse md:flex-row gap-4">
         <div className="my-auto w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-black">Hello Everyone!</h1>
            <p className="py-4 mt-3 text-justify text-black text-lg">Hi, My name Nanda Aditya Putra. I am final year Computer Science student at Brawijaya University. I&apos;m interest and passion in Software Engineer. Proficient in Javascript, React, NextJs,and Typescript. Have experience for lest than one year as Software Engineer in startup company. </p>
            <ul className="flex flex-row my-3 text-black">
               <li className="px-3 ">
                  <Link href="https://www.instagram.com/nandaditra/">
                     <i className="fa-brands fa-instagram fa-2x"></i>
                  </Link>
               </li>
               <li className="px-3">
                  <Link href="https://www.linkedin.com/in/nandaditra">
                     <i className="fa-brands fa-linkedin fa-2x"></i>
                  </Link>
               </li>
               <li className="px-3">
                  <Link href="https://github.com/nandaditra">
                     <i className="fa-brands fa-github fa-2x"></i>
                  </Link>
               </li>
               <li className="px-3">
                  <Link href="https://www.facebook.com/NandaditraOsd12/">
                     <i className="fa-brands fa-facebook fa-2x"></i>
                  </Link>
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
               <div className="w-full md:w-1/2 flex flex-col md:flex-row mx-auto gap-4 rounded-md border border-1 p-3">
                   <Image 
                     className="relative mx-auto"
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

                        <button className="text-sm float-right font-semibold"><Link href="/fxmedia">View Project</Link></button>
                   </div>
               </div>
               <div className="w-full md:w-1/2 flex flex-col md:flex-row mx-auto gap-4 rounded-md border border-1 p-3">
                   <Image 
                     className="relative mx-auto"
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

                        <button className="text-sm float-right font-semibold"><Link href="/sagara">View Project</Link></button>
                   </div>
               </div>

               <div className="w-full md:w-1/2 flex flex-col mx-auto md:flex-row gap-4 rounded-md border border-1 p-3">
                   <Image 
                     className="relative mx-auto"
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

                        <button className="text-sm float-right font-semibold"><Link href="/okegarden">View Project</Link></button>
                   </div>
               </div>
          </div>
      </div>

       

      <div className="py-2">
          <h1 className="text-center font-bold text-black text-3xl">Relevant Project</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-8 text-justify">
               <div className="rounded-md drop-shadow border border-1">
                  <Image 
                     className="rounded-md"
                     src="/assets/img/project/bestimall/bestimall.png"
                     alt="Bestimall"
                     width={1000}
                     height={400}
                     priority
                  />
                  <div className="text-black p-4">
                     <h3 className="text-3xl font-bold">Bestimall</h3>
                     <p className="text-md mt-2">E-commerce website which provides various product from fakestore api and payment feature from stripe. This project build with Angular and Tailwind. For Payment using third party library Stripe and Firebase for authentication</p>
                     <div className="flex gap-4 float-right pb-3">
                        <a className="font-bold" href="https://github.com/nandaditra/bestimall">Github</a> 
                        <a className="font-bold" href="https://bestimall.vercel.app/home">Project</a>
                     </div>
                  </div>
               </div>
               <div className="rounded-md drop-shadow border border-1">
                  <Image 
                     className="rounded-md"
                     src="/assets/img/project/nontonmovie/nontonfilm.png"
                     alt="Nonton Film"
                     width={1000}
                     height={400}
                     priority
                  />
                  <div className="text-black p-4">
                     <h3 className="text-3xl font-bold">Nontonmovie</h3>
                     <p className="text-md mt-2">Movie website which provides various genre theme in movie. This website build using Angular and tailwind with API from moviedb api. For authentication and database using firebase for real time database</p>
                     <div className="flex gap-4 float-right  pb-3">
                        <a className="font-bold" href="https://github.com/nandaditra/nontonmovie-frontend">Github</a> 
                        <a className="font-bold" href="https://nontonfilm-frontend.vercel.app/home">Project</a>
                     </div>
                  </div>
               </div>
               <div className="rounded-md drop-shadow border border-1">
                  <Image 
                     className="rounded-md"
                     src="/assets/img/project/freephoto/freephoto.png"
                     alt="Nonton Film"
                     width={1000}
                     height={400}
                     priority
                  />
                  <div className="text-black p-4">
                     <h3 className="text-3xl font-bold">Freephoto</h3>
                     <p className="text-md mt-2">Movie website which provides various genre theme in movie. This website build using Angular and tailwind with API from moviedb api. For authentication and database using firebase for real time database</p>
                     <div className="flex gap-4 float-right  pb-3">
                        <a className="font-bold" href="https://github.com/nandaditra/freePhoto-frontend">Github</a> 
                        <a className="font-bold" href="https://free-photo-frontend.vercel.app/">Project</a>
                     </div>
                  </div>
               </div>
          </div>
      </div>
      </div>
    </main>

    <Footer />
    </>
  )
}
