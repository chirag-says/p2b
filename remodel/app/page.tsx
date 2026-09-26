import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Story } from "@/components/home/Story";
import { Cta } from "@/components/home/Cta";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Pillars } from "@/components/home/Pillars";
import { Recognition } from "@/components/home/Recognition";
import { Services } from "@/components/home/Services";
import { Principles } from "@/components/home/Principles";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className={styles.main}>
        <Hero />
        <Recognition />
        <Pillars />
        <Services />
        <Principles />
        <Story />
        <Process />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
