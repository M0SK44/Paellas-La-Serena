import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Paellas La Serena Logo"
                  fill
                  sizes="48px"
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <h3 className="text-2xl font-bold leading-tight">Paellas La Serena</h3>
            </div>
            <p className="text-background/80 leading-relaxed">
              La combinacion perfecta de sabor y armonia. Autenticas paellas espanolas con los mejores ingredientes.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href="https://www.instagram.com/paellaslaserena/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm font-medium">Instagram</span>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100006890917859&ref=_ig_profile_ac"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="text-sm font-medium">Facebook</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/56932531678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+56 9 3253 1678</span>
              </a>
              <div className="flex items-start gap-3 text-background/80">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>La Serena y Coquimbo</p>
                  <p className="text-sm">Delivery disponible</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Horarios</h4>
            <div className="flex items-start gap-3 text-background/80">
              <Clock className="w-5 h-5 mt-1" />
              <div>
                <p className="font-medium">Pedidos con anticipacion</p>
                <p className="text-sm mt-2">Contactanos por WhatsApp para coordinar tu pedido</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">© 2025 Paellas La Serena. Todos los derechos reservados.</p>
            <p className="text-background/80 text-sm">Delivery disponible para La Serena y Coquimbo</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

