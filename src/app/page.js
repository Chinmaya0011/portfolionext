'use client'
import Image from "next/image";
import Header from "./Components/Header"
import { ModeProvider } from "./context/context";
import HeroSection from "./Components/HeroSection";
import Biography from "./Components/Biography";
import Education from "./Components/Eaducation";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Certification from "./Components/Certification";
import Contact from "./Components/Contact";
import SocialMedia from "./Components/SocialMedia";
import Footer from "./Components/Footer";
export default function Home() {
  return (
   <ModeProvider>
   <Header/>
   <HeroSection/>

<Biography/>
   <Education/>
   <Skills/>
   <Projects/>
   <Certification/>
   <Contact/>
  <SocialMedia/>
  <Footer/>
   {/* <Certification/> */}
   </ModeProvider>
  );
}
