import { Hero } from "./sections/Hero"
import { DashboardPreview } from "./sections/DashboardPreview"
import { Benefits } from "./sections/Benefits"
import { CTASection } from "./sections/CTASection"
import { Footer } from "./components/Footer"
import { SmoothScroll } from "./components/SmoothScroll"
import { Journey } from "./sections/Journey"
import { Methodology } from "./sections/Methodology"
import { SealCTA } from "./sections/SealCTA"
import { AudienceCTA } from "./sections/AudienceCTA"

export default function App() {
  return (
    <>
      <SmoothScroll />


      <Hero />
      <DashboardPreview />
      
      <Journey />
      <Methodology />
    <AudienceCTA />
      
       <Benefits />
         <SealCTA />
       <CTASection />
      <Footer />
    </>
  )
}
   