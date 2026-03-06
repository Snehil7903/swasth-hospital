import Hero from "@/components/Hero";
import ServicesBento from "@/components/ServicesBento";
import Specialists from "@/components/Specialists";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full relative">
      <Hero />
      <ServicesBento />
      <Specialists />
      <Footer />
    </main>
  );
}