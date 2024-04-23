import GetStarted from "@/components/landing/GetStarted";
import HeroSection from "@/components/landing/HeroSection";
import SaveWithdraw from "@/components/landing/SaveWithdraw";
import { NavBar } from "@/components/shared/nav-bar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="p-24">
        <HeroSection />
        <SaveWithdraw/>
        <GetStarted/>
      </main>
    </>
  );
}
