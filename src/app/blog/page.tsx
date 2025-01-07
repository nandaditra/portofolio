import Footer from "../footer";
import Header from "../header";

export default function Blog() {
     return (
        <>
        <Header />
        
        <main>
           <div className="container px-12 md:px-24 py-8 text-justify">
               <div className="flex flex-col gap-5 py-2">
                   <div className="w-full md:w-1/2 mx-auto gap-4">
                      <h2 className="text-black font-bold text-2xl">#First Bangkit Academy Journey</h2>
                      <p className="text-black text-ms">📅 February, 2023</p>
                      <div className="py-3"> 
                         <p className="text-md text-black">First time meet incredible <i>tech savvy</i> people to join MBKM program batch 5. In here, I'm try out from comfort zone to learn new things in android development</p>
                      </div>
                      <p className="text-black text-sm text-right">Read More</p>
                   </div>
               </div>
               <div className="flex flex-col gap-5 py-2">
                   <div className="w-full md:w-1/2 mx-auto gap-4">
                      <h2 className="text-black font-bold text-2xl">Pengabdian Kepada Masyarakat (PKM) like holiday in Poncokusumo</h2>
                      <p className="text-black text-ms">📅 Jul, 2020</p>
                      <div className="py-3"> 
                         <p className="text-md text-black">Along holiday semester between July until August, I have assigned from my Lecturer to follow activites Campus in Pengadian Kepada Masyarakat to fulfill University Tri Dharma</p>
                      </div>
                      <p className="text-black text-sm text-right">Read More</p>
                   </div>
               </div>
               <div className="flex flex-col gap-5 py-2">
                   <div className="w-full md:w-1/2 mx-auto gap-4">
                      <h2 className="text-black font-bold text-2xl">Computer Science in First Semester</h2>
                      <p className="text-black text-ms">📅 Dec, 2020</p>
                      <div className="py-3"> 
                         <p className="text-md text-black">Nanananaa, first semester in Compsci in UB Malang</p>
                      </div>
                      <p className="text-black text-sm text-right">Read More</p>
                   </div>
               </div>
               <div className="flex flex-col gap-5 py-2">
                   <div className="w-full md:w-1/2 mx-auto gap-4">
                      <h2 className="text-black font-bold text-2xl">Study on Top 10 University in Indonesia</h2>
                      <p className="text-black text-ms">📅 Sep, 2020</p>
                      <div className="py-3"> 
                         <p className="text-md text-black">This is my first journey after I'm graduated from my Senior High School in Bandar become Computer Science student in Universitas Brawijaya in Malang</p>
                      </div>
                      <p className="text-black text-sm text-right">Read More</p>
                   </div>
               </div>
           </div>
        </main>
        
        <Footer />
        </>
     )
}