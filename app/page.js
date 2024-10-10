import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Brands from "@/components/brands/Brands";
import ServicesCard from "@/components/servicecard/ServiceCard";
import Banner1 from "@/components/banners/Banner1";
import Banner2 from "@/components/banners/Banner2";
import Testimonial from "@/components/testimonial/Testimonial";
import Newsletter from "@/components/newsletter/Newsletter";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brands />
      <Banner1 />
      <Banner2 />
      <ServicesCard />
      <Testimonial />
      <Newsletter />
      <Footer />
    </main>
  );
}
