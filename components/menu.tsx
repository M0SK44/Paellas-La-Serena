"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useCart, MIN_PERSONS_PER_ORDER } from "@/components/cart-context"

type MenuItem = {
  id: number
  name: string
  price: number
  description: string
  image?: string
  category: string
  gallery?: string[]
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Paella Mixta Premium",
    price: 10000,
    description:
      "Sofrito, Pimentones rojo y verde, Cebolla, Tuto Ala de Pollo, Pulpa de Cerdo, Chorizo Premium, Surtido de Mariscos, Choritos, Camarón Nacional, Camarón Ecuatoriano, Almejas, Choro Maltón, Choritos en Concha, Ostiones media Concha, Machas, Arvejitas y Condimentado con Sazonador Paellero y Azafrán de origen Español",
    image: "/mixta_premium.jpg",
    gallery: [
      "/mixta_premium.jpg",
      "/mixta_premium2.jpg",
    ],
    category: "Mariscos",
  },
  {
    id: 2,
    name: "Paella Mixta Clásica",
    price: 9000,
    description:
      "Sofrito, Pimentones rojo y verde, Cebolla, Tuto Ala de Pollo, Pulpa de Cerdo, Chorizo Premium, Choritos, Camarón Nacional, Camarón Ecuatoriano, Almejas, Choro Maltón, Arvejitas y Condimentado con Sazonador Paellero y Azafrán de origen Español",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-zFeF47ZdJXxeQiYRS7uBKeNSjytcJw.jpeg",
    gallery: ["/mixta_clasica.jpg",
      "/mixta_clasica2.jpg",],
    category: "Mariscos",
  },
  {
    id: 3,
    name: "Paella Marinera",
    price: 10000,
    description:
      "Sofrito, Pimentones rojo y verde, Choritos, Surtido de Mariscos Premium, Camarón Nacional, Camarón Ecuatoriano, Almejas, Choro Maltón, Choritos en Concha, Ostiones media Concha, Camarón Entero, Machas media Concha, Calamares, Arvejitas y todo esto condimentado con especias y Azafrán de origen Español",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-zFeF47ZdJXxeQiYRS7uBKeNSjytcJw.jpeg",
    gallery: ["/marinera.jpg",
      "/marinera2.jpg",],
    category: "Mariscos",
  },
  {
    id: 4,
    name: "Paella Campestre",
    price: 11000,
    description:
      "Sofrito, Pimentones, Cebolla, Champiñones, Fondos de Alcachofas, Zapallo Italiano, Espárragos, Brócoli, Coliflor, Tomates Cherry, Arvejitas, Lomo Vetado, Pollo, Cerdo y Cordero, todo esto condimentado con el famoso Azafrán Español",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rk8aZ08h7SIp8QMROB3vZaU6jvHAGs.png",
    gallery: ["/campestre.jpg",
      "/campestre2.jpg",],
    category: "Carnes",
  },
  {
    id: 5,
    name: "Paella Vegetariana",
    price: 9000,
    description:
      "Sofrito, Pimentones, Cebolla, Champiñones, Fondos de Alcachofas, Zapallo Italiano, Espárragos, Brócoli, Coliflor, Tomates Cherry, Arvejitas y todo esto condimentado con el famoso Azafrán Español",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rk8aZ08h7SIp8QMROB3vZaU6jvHAGs.png",
    gallery: ["/vegetariana.jpg",
      "/vegetariana2.jpg",],
    category: "Vegetariana",
  },
  {
    id: 6,
    name: "Paella Vegana",
    price: 9000,
    description:
      "Sofrito, Pimentones, Cebolla Morada, Arroz Basmati, Champiñones, Fondos de Alcachofas, Zapallo Italiano, Tomate Cherry, Espárragos, Berenjenas, Brócoli, Coliflor, Aceitunas, Arvejitas y todo esto condimentado con Azafrán Español",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rk8aZ08h7SIp8QMROB3vZaU6jvHAGs.png",
    gallery: ["/vegana.jpg","/vegana.jpg",
    ],
    category: "Vegana",
  },
]

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")
  const { addItem } = useCart()
  const [activeImages, setActiveImages] = useState<Record<number, number>>({})
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<number, boolean>>({})

  const handleThumbnailClick = (itemId: number, newIndex: number) => {
    setActiveImages((prev) => ({
      ...prev,
      [itemId]: newIndex,
    }))
  }

  const categories = ["Todos", "Mariscos", "Carnes", "Vegetariana", "Vegana"]

  const filteredItems =
    selectedCategory === "Todos" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="menu" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Nuestro Menú</h2>
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span>Pedido mínimo para {MIN_PERSONS_PER_ORDER} personas</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestras deliciosas paellas preparadas con ingredientes frescos y auténticos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-card-foreground hover:bg-primary/10 border border-border"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item) => {
            const gallery = item.gallery && item.gallery.length > 0 ? item.gallery : item.image ? [item.image] : []
            const currentIndex = activeImages[item.id] ?? 0
            const currentImage = gallery[currentIndex] ?? gallery[0] ?? item.image ?? "/placeholder.svg"
            const isExpanded = !!expandedDescriptions[item.id]
            const shouldShowToggle = (item.description?.length ?? 0) > 140

            return (
              <div
                key={item.id}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={currentImage || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    ${item.price.toLocaleString()}
                  </div>
                </div>

                {gallery.length > 1 && (
                  <div className="px-4 py-3 flex gap-2 overflow-x-auto bg-background/80 border-t border-border/60">
                    {gallery.map((imageSrc, index) => {
                      const isActive = index === currentIndex
                      return (
                        <button
                          key={`${item.id}-thumb-${index}`}
                          type="button"
                          onClick={() => handleThumbnailClick(item.id, index)}
                          className={`relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-xl border transition-all ${isActive ? "border-primary ring-2 ring-primary/40" : "border-border hover:border-primary/60"
                            }`}
                          aria-label={`Ver imagen ${index + 1} de ${item.name}`}
                        >
                          <img src={imageSrc} alt={`${item.name} ${index + 1}`} className="h-full w-full object-cover" />
                          {isActive && (
                            <span className="absolute inset-0 bg-primary/10 pointer-events-none" aria-hidden="true" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-2">
                    <span className="inline-block bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-card-foreground mb-3">{item.name}</h3>

                  <div className="flex-1">
                    <div className="relative">
                      <p
                        className={`text-muted-foreground text-sm leading-relaxed transition-all ${
                          isExpanded ? "mb-2" : "line-clamp-4"
                        }`}
                      >
                        {item.description}
                      </p>
                      {shouldShowToggle && !isExpanded && (
                        <div className="absolute inset-x-0 bottom-0 flex justify-end bg-gradient-to-t from-card via-card/80 to-transparent pt-6">
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedDescriptions((prev) => ({
                                ...prev,
                                [item.id]: true,
                              }))
                            }
                            className="text-sm font-semibold text-primary hover:underline"
                          >
                            Ver más
                          </button>
                        </div>
                      )}
                    </div>
                    {shouldShowToggle && isExpanded && (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedDescriptions((prev) => ({
                            ...prev,
                            [item.id]: false,
                          }))
                        }
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        Ver menos
                      </button>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between pt-2">
                    <p className="text-sm text-muted-foreground font-medium">Valor x Persona</p>
                    <Button
                      onClick={() => addItem(item)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="lg"
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      Agregar
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
