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
const Services = dynamic(() => import("@/components/Services").then(mod => ({ default: mod.Services })), { ssr: true });
const Why = dynamic(() => import("@/components/Why").then(mod => ({ default: mod.Why })), { ssr: true });
const Cases = dynamic(() => import("@/components/Cases").then(mod => ({ default: mod.Cases })), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => ({ default: mod.Testimonials })), { ssr: true });
const Pricing = dynamic(() => import("@/components/Pricing").then(mod => ({ default: mod.Pricing })), { ssr: true });
const HowWork = dynamic(() => import("@/components/HowWork").then(mod => ({ default: mod.HowWork })), { ssr: true });
const Geography = dynamic(() => import("@/components/Geography").then(mod => ({ default: mod.Geography })), { ssr: true });
const Founders = dynamic(() => import("@/components/Founders").then(mod => ({ default: mod.Founders })), { ssr: true });
const Reviews = dynamic(() => import("@/components/Reviews").then(mod => ({ default: mod.Reviews })), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ").then(mod => ({ default: mod.FAQ })), { ssr: true });
const CTA = dynamic(() => import("@/components/CTA").then(mod => ({ default: mod.CTA })), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer").then(mod => ({ default: mod.Footer })), { ssr: true });
const Floating = dynamic(() => import("@/components/Floating").then(mod => ({ default: mod.Floating })), { ssr: false });

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
