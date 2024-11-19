'use client'

import LogoMarca from "@/components/logo-marca";
import NavigationButtons from "@/components/navigation-buttons";
import ContactButton from "@/components/contact-button";
import SiteAnnouncement from "@/components/site-announcement";
import ProgressSection from "@/components/progress-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[700px] xl:min-h-[700px] items-center justify-center flex-1 w-full p-3">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
        <div>
          <LogoMarca />
          <div className="flex flex-col items-center mt-5">
            <ContactButton />
            <NavigationButtons />
          </div>
        </div>
        <div className="flex h-full items-center">
          <div className="w-full">
            <SiteAnnouncement />
            <ProgressSection />
          </div>
        </div>
      </div>
    </div>
  );
}