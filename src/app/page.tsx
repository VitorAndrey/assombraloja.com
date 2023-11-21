import { HeroSection } from "@/components/hero-section";
import ProductsList from "@/components/products-list";

export default async function Home() {
  return (
    <>
      <HeroSection />

      <ProductsList />
    </>
  );
}
