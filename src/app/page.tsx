import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import ProductsList from "@/components/products-list";

export default async function Home() {
  return (
    <>
      <Header />

      <HeroSection />

      <ProductsList />
    </>
  );
}
