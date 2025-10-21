"use client"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Menu } from "@/components/menu"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/components/cart-context"
import { Cart } from "@/components/cart"

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Menu />
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  )
}
