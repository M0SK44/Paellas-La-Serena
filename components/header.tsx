"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-context"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { items, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex justify-start md:flex-1">
            <button onClick={() => scrollToSection("inicio")} className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Paellas La Serena Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Paellas La Serena
                </h1>
              </div>
            </button>
          </div>

          <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("somos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Somos
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Ver Menu
            </button>
          </nav>

          <div className="flex justify-end md:flex-1">
            <Button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
