import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import AboutUs from '@/components/AboutUs'
import Clients from '@/components/Clients'
import MachinePark from '@/components/MachinePark'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <AboutUs />
      <Clients />
      <MachinePark />
      <Contact />
      <Footer />
    </main>
  )
}
