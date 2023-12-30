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
            <h1 className="text-4xl font-bold text-blue-200">Hello Everyone!</h1>
            <p className="py-4 mt-3 text-justify">Hi!, My name Nanda Aditya Putra. I am final year Computer Science student at Brawijaya University. I'm interest and passion in Software Engineer. Proficient in Javascript, React, NextJs,and Typescript. Have experience for lest than one year as Software Engineer in startup company. </p>
            <ul className="flex flex-row my-3">
               <li className="px-3">
                  <a href='https://www.instagram.com/nandaditra/'>
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

            <button className="rounded-md px-4 py-2 my-5 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-300">
                <a
                  href="https://drive.google.com/file/d/1j2jtXps47Z1US-7dLojYCakch8XI0gAU/view?usp=sharing"
                  >Dowload Resume
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
          <h1 className="text-center font-bold text-3xl">Experience</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
               <div className="p-8 border border-white rounded-xl">
                  <h3 className="text-2xl font-bold text-blue-200">Software Engineer Intern (Frontend)</h3>
                  <h5 className="py-1">FxMedia Interned Pte Ltd </h5>
                  <span className="text-sm">2 January - 31 July 2024</span>
                  <p className="py-3 text-sm">Still Working</p>
               </div>
               <div className="p-8 border border-white rounded-xl">
                  <h3 className="text-2xl font-bold text-blue-200">Software Engineer Intern (Frontend)</h3>
                  <h5 className="py-1">Sagara Technology</h5>
                  <span className="text-sm">10 July - 10 October 2024</span>
                  <p className="py-3 text-md">Responsible to developed website providing job vacancies and projects and fixing the bugs in some features in Techconsulta Website</p>
               </div>
               <div className="p-8 border border-white rounded-xl">
                  <h3 className="text-2xl font-bold text-blue-200">Frontend Developer Intern (Frontend)</h3>
                  <h5 className="py-1">OkeGarden </h5>
                  <span className="text-sm">18 January - 18 April 2023</span>
                  <p className="py-3 text-md">Resposibe to developed RAB Calculator with slicing UI Design from figma to implement with code</p>
               </div>
          </div>
      </div>

      <div className="py-2">
          <h1 className="text-center font-bold text-3xl">Side Project</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-8 text-justify">
               <div className="p-10 rounded-xl bg-sky-900">
                  <h1 className="text-2xl font-bold">Bestimall E-commerce Website</h1>

                  <p className="text-sm my-7">frontend e-commerce website which provided t-shirt, electronic and jewelery. This website built with tech stack Angular, Typescript, Bootstrap, NodeJs, Scss and Angular Material.</p>

                  <a className="text-sm"><i className="fa-brands fa-github"></i> Github</a>
                  <a className="text-sm ml-4"><i className="fa-solid fa-house"></i> Live Demo</a>
               </div>

               <div className="p-10 rounded-xl bg-sky-900">
                  <h1 className="text-2xl font-bold">Freephoto Website</h1>

                  <p className="text-sm my-7">Freephoto is website which provides many various photo and picture freely. This website build using many stack like React and tailwindcss, Besided that, I'm also add authentication with Firebase auth and Deploy using vercel app to remote server</p>
              
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
