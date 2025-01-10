import Header from '@/components/Header'
import Footer from '@/components/Footer'
import fxmedia from '@/assets/img/FXMedia/fxmedia_fxmweb_logo.jpg'
import game1 from '@/assets/img/FXMedia/project/Landing-Page.png'
import game2 from '@/assets/img/FXMedia/project/Login-Player.png'
import game3 from '@/assets/img/FXMedia/project/Main-Menu.png'
import game4 from '@/assets/img/FXMedia/project/Normal.png'
import volaris1 from '@/assets/img/FXMedia/project/volaris-game-1.png'
import volaris2 from '@/assets/img/FXMedia/project/volaris-game.png'
import treasure from '@/assets/img/FXMedia/project/treasure-web.png'
import log from '@/assets/img/FXMedia/project/chart-log.png'
import Image from 'next/image'

export default function FXMedia(){
    return (
        <div>
               <Header />

               <main>
                  <div className='container px-12 md:px-24 py-8 text-justify'>
                     <div className='flex flex-col md:flex-row gap-6'>
                         <Image 
                            width={300}
                            height={300}
                            src={fxmedia}
                            className='relative items-center'
                            alt='FXMedia logo'
                         />
                         <div className="text-black my-auto">
                            <div className="my-1 my-auto">
                               <h1 className="text-2xl font-bold">About Company</h1>
                               <p className="text-md my-2">FXMedia Internet Pte Ltd was founded in January 2008. FXMedia's core businesses include Augmented Reality/Virtual Reality/Mixed Reality, Immersive Interactive, Artificial Intelligence and IOT for corporate enterprises and government agencies. </p>
                            </div>
                         </div>
                     </div>
                     <div className="my-1 text-black">
                        <h1 className="text-2xl font-bold">Responsibility</h1>
                        <p className="text-md my-2">Utilized React.Js and Chart.Js to develop chart log data feature user-friendly and can load 1000+ logs data, ensuring users can easily read and monitor the highest log data.
  .Successfully transformation 4 medium articles into news page by using Typescript in Insight FXMedia Company and developed in one day with expected deadline
  .Fixed 4 features in Web Game NTU Mathematics Digital Game and ensure responsiveness in multiple devices with React and Typescript.
  .Developed the augmented reality (AR) reward features to help users on detection and found the treasure prize by using Typescript and SCSS for styling the web.
  .Developed a webpage to check the amount of clicks in each flag, simplify and can appear 30+ flags by Javascript, AJAX and Jquery.</p>
                    </div>
                    <div className="my-1 text-black">
                         <h1 className="text-2xl font-bold">Project</h1>

                         <h4 className="text-xl font-bold mt-4">Web Game NTU Mathematics Digital Game</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                             <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={game1}
                                alt="Landing Page Web Game NTU"
                             />
                             <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={game2}
                                alt="Login Web Game NTU"
                             />
                             <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={game3}
                                alt="Main Menu Web Game NTU"
                             />
                             <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={game4}
                                alt="Login Web Game NTU"
                             />
                         </div>

                         <h4 className="text-xl font-bold mt-4">Treasure Web</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                             <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={treasure}
                                alt="Landing Page Web Game NTU"
                             />
                         </div>
                         <h4 className="text-xl font-bold mt-4">Volaris Games</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                             <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={volaris1}
                                alt="VOlaris Games 1"
                             />
                              <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={volaris2}
                                alt="VOlaris Games 2"
                             />
                         </div>
                         <h4 className="text-xl font-bold mt-4">Chart Log Data Web</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                             <Image 
                                className="relative"
                                width={1000}
                                height={500}
                                src={log}
                                alt="Landing Page Web Game NTU"
                             />
                         </div>
                    </div>
                  </div>
               </main>
               <Footer />
        </div>
    )
}