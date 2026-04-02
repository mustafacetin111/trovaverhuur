import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import Machines from "@/components/Machines";
import WhyUs from "@/components/WhyUs";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Services />
      <Machines />
      <WhyUs />
      <QuoteForm />
    </>
  );
}
