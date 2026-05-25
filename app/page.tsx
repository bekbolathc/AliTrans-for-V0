"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ForWhom } from "@/components/ForWhom";
import { Quiz } from "@/components/Quiz";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";
import { Cases } from "@/components/Cases";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { HowWork } from "@/components/HowWork";
import { Geography } from "@/components/Geography";
import { Founders } from "@/components/Founders";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Floating } from "@/components/Floating";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ForWhom />
        <Quiz />
        <Services />
        <Why />
        <Cases />
        <Testimonials />
        <Pricing />
        <HowWork />
        <Geography />
        <Founders />
        <Reviews />
        <FAQ />
        <CTA />
        <Footer />
      </main>
      <Floating />
    </>
  );
}
