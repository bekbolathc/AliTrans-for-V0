import type { Metadata } from "next";
import { HomeContent } from "./_home-content";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://alitrans.kz/",
  },
};

export default function Page() {
  return <HomeContent />;
}
