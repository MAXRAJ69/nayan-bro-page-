"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Header from "@/components/Header";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import AboutSection from "@/components/AboutSection";
import BrandWork from "@/components/BrandWork";
import MoreChannels from "@/components/MoreChannels";
import TeamMembers from "@/components/TeamMembers";
import ConnectWithUs from "@/components/ConnectWithUs";
import BackgroundEffect from "@/components/BackgroundEffect";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="relative bg-transparent font-sans">
      <BackgroundEffect />
      <Header />
      
      {/* 500vh scroll container for the canvas animation */}
      <div id="home" ref={containerRef} className="relative h-[500vh] w-full">
        {/* Sticky wrapper stays on screen while we scroll the 500vh */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* New Customized Sections */}
      <AboutSection />
      <BrandWork />
      <MoreChannels />
      <TeamMembers />
      <ConnectWithUs />
    </main>
  );
}
