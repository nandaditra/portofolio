import Header from '../header'
import Footer from '../footer'
import sagara from '../../../public/assets/img/SagaraTeknologi/sagara.png'
import techconsulta1 from '../../../public/assets/img/SagaraTeknologi/project/tehconsulta-1.png'
import techconsulta2 from '../../../public/assets/img/SagaraTeknologi/project/tehconsulta-2.png'
import jobfortech1 from '../../../public/assets/img/SagaraTeknologi/project/jobfortech-1.png'
import jobfortech2 from '../../../public/assets/img/SagaraTeknologi/project/jobfortech-2.png'
import jobfortech3 from '../../../public/assets/img/SagaraTeknologi/project/jobfortech-3.png'
import jobfortech4 from '../../../public/assets/img/SagaraTeknologi/project/jobfortech-4.png'
import jobfortech5 from '../../../public/assets/img/SagaraTeknologi/project/jobfortech-5.png'
import Image from 'next/image'

export default function Sagara(){
    return (
        <div>
            <Header />

            <main>
                  <div className='container px-12 md:px-24 py-8 text-justify'>
                     <div className='flex flex-col md:flex-row gap-6'>
                         <Image 
                            width={300}
                            height={300}
                            src={sagara}
                            className='relative items-center'
                            alt='Sagara Asia logo'
                         />
                         <div className="text-black my-auto">
                            <div className="my-1 my-auto">
                               <h1 className="text-2xl font-bold">About Company</h1>
                               <p className="text-md my-2">Sagara Technology is an industry-leading software development proficient in delivering web and mobile IT solutions, outsourced product engineering services, and a digital marketing agency to help enterprises reinvent their objectives for the digital age.</p>
                            </div>
                         </div>
                     </div>
                     <div className="my-1 text-black">
                        <h1 className="text-2xl font-bold">Responsibility</h1>
                        <p className="text-md my-2">Worked closely with cross-functional teams, including Backend, Quality Assurance, and UI/UX Designer on Web Tech Consulta teams using Next.js.
  .Contributed on a developed scalable website to provide job vacancies and projects from scratch by using React.js,Redux for managing state and TailwindCss.
  .Created 5 Quotation template pages using Html and Css and delivered to project manager and senior engineer
  .Maintained and fixed the bugs in various features in Techconsulta website</p>
                    </div>
                    <div className="my-1 text-black">
                         <h1 className="text-2xl font-bold">Project</h1>

                         <h4 className="text-xl font-bold mt-4">TechConsulta</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                             <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={techconsulta1}
                                alt="Main Menu Web Game NTU"
                             />
                             <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={techconsulta2}
                                alt="Login Web Game NTU"
                             /> */
                         </div>

                         <h4 className="text-xl font-bold mt-4">Jobfortech</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                             <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={jobfortech1}
                                alt="Landing Page "
                             />
                            <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={jobfortech2}
                                alt="Find Project"
                             />
                             <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={jobfortech3}
                                alt="Landing Page "
                             />
                            <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={jobfortech4}
                                alt="Find Project"
                             />
                           <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={jobfortech5}
                                alt="Find Project"
                             />
                         </div>
                    </div>
                  </div>
               </main>

            <Footer />
        </div>
    )
}