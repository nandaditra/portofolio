import Header from '@/components/Header'
import Footer from '@/components/Footer'
import okegarden from '@/assets/img/OKEGarden/okegarden_logo.jpg'
import Image from 'next/image'

export default function Okegarden(){
    return (
        <div>
            <Header />

            <main>
                <div className='container px-12 md:px-24 py-8 text-justify'>
                     <div className='flex flex-col md:flex-row gap-6'>
                         <Image 
                            width={300}
                            height={300}
                            src={okegarden}
                            className='relative items-center'
                            alt='FXMedia logo'
                         />
                         <div className="text-black my-auto">
                            <div className="my-1 my-auto">
                               <h1 className="text-2xl font-bold">About Company</h1>
                               <p className="text-md my-2">The first gardening platform in Indonesia that focuses on sustainability, exists as your one-stop-solute garden services, a bridge between gardeners and customers with a wide selection of accurate and buildable garden designs.</p>
                            </div>
                         </div>
                     </div>
                     <div className="my-1 text-black">
                        <h1 className="text-2xl font-bold">Responsibility</h1>
                        <p className="text-md my-2">Developed responsive Cost Budget Plan Feature to calculate the estimated costs required to complete the garden and ornamental plant creation project with Html, Css and Bootstrap. Collaborated with cross-functional teams in RAB Calculator teams to ensure the new features website can be integrated successfully, Participated in Daily Huddle and Sprint Retrospective on Agile Scrum Methodologies</p>
                    </div>
                 </div>
            </main>

            <Footer />
        </div>
    )
}