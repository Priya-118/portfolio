import { Navbar } from "../component/navbar"
import { StarBack } from "../component/StarBack"
import { Toggle } from "../component/Toggle"
import { HeroSection } from "../component/HeroSection"
import { AboutMe } from "../component/AboutMe"
import { Skills } from "../component/Skills"
import { Project } from "../component/Project"
import { Contact } from "../component/Contact"
import { Footer } from "../component/Footer"

export const Home = () =>{
  return(
    <div className="min-h-screen ">
    {/* /* theme toggle */}
    <Toggle/>

    {/* background effect/ */}
    <StarBack/>
    
    {/* navbar */}
    <Navbar/>

    {/* main content */}
     <main>
      <HeroSection/>
      <AboutMe/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
     </main>


    {/* footer */}
    </div>
  )
}

// bg-backgound text-foreground overflow-x-hidden