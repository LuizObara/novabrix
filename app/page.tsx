'use client'

import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Services from "@/components/services/services";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full">
      <main>
        <section id="inicio">
          <Hero />
        </section>

        <section id="servicos" className="min-h-screen bg-[#0d2d44]">
          <Services />
        </section>

        <section id="sobre-nos" className="min-h-screen">
          <About />
        </section>

        <section id="contato" className="min-h-screen bg-[#0d2d44]">
          <Contact />
        </section>
      </main>
    </div>
  );
}


// import LogoMarca from "@/components/logo-marca";
// import NavigationButtons from "@/components/navigation-buttons";
// import ContactButton from "@/components/contact-button";
// import SiteAnnouncement from "@/components/site-announcement";
// import ProgressSection from "@/components/progress-section";
// <div className="flex flex-col min-h-[700px] xl:min-h-[700px] items-center justify-center flex-1 w-full p-3">
//   <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
//     <div>
//       <LogoMarca />
//       <div className="flex flex-col items-center mt-5">
//         <ContactButton />
//         <NavigationButtons />
//       </div>
//     </div>
//     <div className="flex h-full items-center">
//       <div className="w-full">
//         <SiteAnnouncement />
//         <ProgressSection />
//       </div>
//     </div>
//   </div>
// </div>