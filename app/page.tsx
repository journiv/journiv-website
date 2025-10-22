import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Screenshots } from "@/components/screenshots"
import { Demo } from "@/components/demo"
import { EmailSignup } from "@/components/email-signup"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Demo />
      <Screenshots />
      <Features />
      <EmailSignup />
      <Footer />
    </main>
  )
}
