"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ForWhom } from "@/components/ForWhom";
import { Quiz } from "@/components/Quiz";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SkipToContent } from "@/components/SkipToContent";

// Lazy load components below the fold to reduce main thread work
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Why = dynamic(() => import("@/components/Why"), { ssr: true });
const Cases = dynamic(() => import("@/components/Cases"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: true });
const HowWork = dynamic(() => import("@/components/HowWork"), { ssr: true });
const Geography = dynamic(() => import("@/components/Geography"), { ssr: true });
const Founders = dynamic(() => import("@/components/Founders"), { ssr: true });
const Reviews = dynamic(() => import("@/components/Reviews"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const CTA = dynamic(() => import("@/components/CTA"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const Floating = dynamic(() => import("@/components/Floating"), { ssr: false });

export default function Page() {
  return (
    <ErrorBoundary>
      <SkipToContent />
      <ScrollProgress />
      <Header />
      <main id="main-content">
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
    </ErrorBoundary>
  );
}
