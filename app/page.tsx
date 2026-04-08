import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Method } from "@/components/method"
import { Advantages } from "@/components/advantages"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Method />
      <Advantages />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}