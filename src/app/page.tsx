"use client";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Masters } from "@/components/sections/Masters";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Booking } from "@/components/sections/Booking";
import { Contacts } from "@/components/sections/Contacts";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only"
        style={{ position: "absolute", top: "-999px", left: "-999px" }}
      >
        Перейти к основному содержимому
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <Services />
        <Masters />
        <About />
        <Gallery />
        <Booking />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
