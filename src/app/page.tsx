import Footer from '../components/Footer'
import Header from '@/components/Header'
import Hero from '@/sections/Hero'
import Experience from '@/sections/Experience'
import Project from '@/sections/Project'

export default function Home() {
  
  return (
    <>
    <Header />

     <div className="container mx-auto px-12 md:px-24 py-16">
         <Hero />
         <Experience />
         <Project />
      </div>

    <Footer />
    </>
  )
}
