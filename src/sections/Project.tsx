import Image from "next/image"

const Project = () => {
    return (
        <div className="py-2"  id="project">
          <h1 className="text-center font-bold text-black text-4xl">Relevant Project</h1>
          
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
                     <div className="grid grid-cols-3 md:grid-cols-5 gap-4 my-4">
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Typescript</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Angular</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Tailwind</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Stripe</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Firebase</button>
                     </div>
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
                     <div className="grid grid-cols-3 md:grid-cols-5 gap-4 my-4">
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Typescript</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Angular</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Tailwind</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">MovieDB</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Firebase</button>
                     </div>
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
                     <div className="grid grid-cols-3 md:grid-cols-5 gap-4 my-4">
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Javascript</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">React</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Tailwind</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Unsplash</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Firebase</button>
                     </div>
                     <div className="flex gap-4 float-right  pb-3">
                        <a className="font-bold" href="https://github.com/nandaditra/freePhoto-frontend">Github</a> 
                        <a className="font-bold" href="https://free-photo-frontend.vercel.app/">Project</a>
                     </div>
                  </div>
               </div>
               <div className="rounded-md drop-shadow border border-1">
                  <Image 
                     className="rounded-md"
                     src="/assets/img/project/Ardes/ardes-fe.png"
                     alt="Ardes"
                     width={1000}
                     height={400}
                     priority
                  />
                  <div className="text-black p-4">
                     <h3 className="text-3xl font-bold">Ardes</h3>
                     <p className="text-md mt-2">Developed website that provides services for hiring architects and designers to build houses, apartments or residences
                     using React, Bootstrap Typescript, MySQL, PHP and AWS</p>
                     <div className="grid grid-cols-3 md:grid-cols-5 gap-4 my-4">
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">React</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Bootstrap</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Typescript</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">MySQL</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">PHP</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">AWS</button>
                     </div>
                     <div className="flex gap-4 float-right pb-3">
                        <a className="font-bold" href="https://github.com/nandaditra/ardes">Github</a> 
                     </div>
                  </div>
               </div>
               <div className="rounded-md drop-shadow border border-1">
                  <Image 
                     className="rounded-md"
                     src="/assets/img/project/traveltour/travel.png"
                     alt="Nonton Film"
                     width={1000}
                     height={400}
                     priority
                  />
                  <div className="text-black p-4">
                     <h3 className="text-3xl font-bold">Travel Tour</h3>
                     <p className="text-md mt-2">Travel Tour is a website which avaliable the holiday service trust and has been widely used by tourists so you can holiday funny and enjoy no problem. Therefore, you can choose travel package based on your interested and you will excited.</p>
                     <div className="grid grid-cols-3 md:grid-cols-5 gap-4 my-4">
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Javascript</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">React</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Bootstrap</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Unsplash</button>
                        <button className="outline outline-offset-1 outline-black px-3 rounded-md text-black hover:bg-black hover:text-white">Firebase</button>
                     </div>
                     <div className="flex gap-4 float-right  pb-3">
                        <a className="font-bold" href="https://github.com/nandaditra/freePhoto-frontend">Github</a> 
                        <a className="font-bold" href="https://free-photo-frontend.vercel.app/">Project</a>
                     </div>
                  </div>
               </div>
          </div>
      </div>
    )
}

export default Project