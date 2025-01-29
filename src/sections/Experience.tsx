import Link from "next/link";

const Experience = () => {
    return (
        <div className="py-16" id="experience">
          <h1 className="text-center text-black font-bold text-4xl">#My Careey Journey</h1>
          <p className="text-center text-black text-xl">Experience</p>
          <div className="flex flex-col gap-5 py-12">
                <div className="w-full md:w-1/2 flex flex-col md:flex-row mx-auto gap-4">
                   <div className="text-black">
                        <h3 className="font-semibold text-2xl">PT Bank Mandiri (Persero) Tbk</h3>
                        <p>Software Engineer</p>
                        <p className="text-sm">📬 Indonesia</p>
                        <p className="text-sm">📅 31 Jan 2025 - current</p>
                        <p className="text-sm text-justify my-3">
                           let's cooking
                        </p>
                   </div>
               </div>
               <div className="w-full md:w-1/2 flex flex-col md:flex-row mx-auto gap-4">
                   <div className="text-black">
                        <h3 className="font-semibold text-2xl">FXMedia Internet Pte Ltd</h3>
                        <p>Frontend Developer Intern</p>
                        <p className="text-sm">📬 Singapore</p>
                        <p className="text-sm">📅 2 Jan - 30 Sep 2024</p>
                        <p className="text-sm text-justify my-3">
                           In here, I have responsiblity for assist senior engineer to research new technology, developed various project from client, fix and maintain project and learn new technology
                        </p>

                        <button className="text-sm float-right font-semibold bg-black text-white p-2 rounded-md"><Link href="/fxmedia">View Project</Link></button>
                   </div>
               </div>
               <div  className="w-full md:w-1/2 flex flex-col md:flex-row mx-auto gap-4">
                   <div className="text-black">
                        <h3 className="font-semibold text-2xl">Sagara Teknologi</h3>
                        <p>Frontend Engineer Intern</p>
                        <p className="text-sm">📬 Jakarta, Indonesia,</p>
                        <p className="text-sm">📅 10 Jul - 10 Oct 2023</p>
                        <p className="text-sm text-justify my-3">
                           In here, I have responsiblity to handle two project, including fix and maintain TechConsulta Project and developed jobFortech from scract using React and Tailwind
                        </p>

                        <button className="text-sm float-right font-semibold bg-black text-white p-2 rounded-md"><Link href="/sagara">View Project</Link></button>
                   </div>
               </div>

               <div  className="w-full md:w-1/2 flex flex-col mx-auto md:flex-row gap-4">
                   <div className="text-black">
                        <h3 className="font-semibold text-2xl">OKE Garden</h3>
                        <p>Frontend Engineer Intern</p>
                        <p className="text-sm">📬 Jakarta, Indonesia</p>
                        <p className="text-sm">📅 10 Jan - 10 Apr 2023</p>
                        <p className="text-sm text-justify my-3">
                           In here, I collaborate with cross functional team to developed and integrated RAB Calculator feature with Product Manager, UI/UX Designer, and Backend Developer</p>

                        <button className="text-sm float-right font-semibold bg-black text-white p-2 rounded-md"><Link href="/okegarden">View Project</Link></button>
                   </div>
               </div>
          </div>
      </div>
    )
}

export default Experience