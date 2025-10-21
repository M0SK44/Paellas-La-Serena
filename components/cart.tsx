"use client"

import { useState, useEffect } from "react"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-context"

const deliveryOptions = {
  serena: { label: "La Serena", fee: 3000 },
  coquimbo: { label: "Coquimbo", fee: 4000 },
} as const

type DeliveryZone = keyof typeof deliveryOptions

export function Cart() {
  const [deliveryZone, setDeliveryZone] = useState<DeliveryZone | null>(null)
  const { items, removeItem, updateQuantity, clearCart, isCartOpen, setIsCartOpen } = useCart()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalPersons = items.reduce((sum, item) => sum + item.quantity, 0)
  const deliveryCost = deliveryZone ? deliveryOptions[deliveryZone].fee : 0
  const totalWithDelivery = total + deliveryCost
  const displayDeliveryCost = deliveryZone ? `$${deliveryCost.toLocaleString()}` : "Selecciona una zona"
  const summaryTotal = deliveryZone ? totalWithDelivery : total
  const summaryLabel = deliveryZone ? "Total con delivery:" : "Total:"
  const summaryTotalDisplay = `$${summaryTotal.toLocaleString()}`

  const sendToWhatsApp = () => {
    if (!deliveryZone) return

    const phoneNumber = "56932531678"
    let message = "Hola! Me gustar\u00eda hacer el siguiente pedido:\n\n"

    items.forEach((item) => {
      message += `- ${item.name}\n  Cantidad: ${item.quantity} persona(s)\n  Subtotal: $${(item.price * item.quantity).toLocaleString()}\n\n`
    })

    message += `Total de personas: ${totalPersons}\n`
    message += `Total productos: $${total.toLocaleString()}\n`
    message += `Zona de entrega: ${deliveryOptions[deliveryZone].label}\n`
    message += `Costo delivery: $${deliveryCost.toLocaleString()}\n`
    message += `Total con delivery: $${totalWithDelivery.toLocaleString()}\n\n`
    message += "Podr\u00edan confirmar disponibilidad y tiempo de entrega?"

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  useEffect(() => {
    if (!isCartOpen) return

    const body = document.body
    const html = document.documentElement
    const originalBodyOverflow = body.style.overflow
    const originalHtmlOverflow = html.style.overflow
    const originalBodyTouch = body.style.touchAction
    const originalHtmlTouch = html.style.touchAction

    body.style.overflow = "hidden"
    html.style.overflow = "hidden"
    body.style.touchAction = "none"
    html.style.touchAction = "none"

    return () => {
      body.style.overflow = originalBodyOverflow
      html.style.overflow = originalHtmlOverflow
      body.style.touchAction = originalBodyTouch
      html.style.touchAction = originalHtmlTouch
    }
  }, [isCartOpen])

  if (!isCartOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />

      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 shadow-2xl overflow-hidden flex h-full min-h-0 flex-col">
        <div className="bg-primary text-primary-foreground p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Tu Pedido</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="hover:bg-primary-foreground/20 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 min-h-0">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-12 h-12 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-lg">{"Tu carrito est\u00e1 vac\u00edo"}</p>
              <p className="text-sm text-muted-foreground mt-2">Agrega algunas paellas deliciosas</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-card border border-border rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-card-foreground flex-1 pr-2">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:bg-destructive/10 p-1 rounded transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-muted rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="hover:bg-background p-2 rounded transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="hover:bg-background p-2 rounded transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="font-bold text-lg text-emerald-600">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border bg-muted/30 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
            <div className="space-y-3 overflow-y-auto max-h-[36vh] sm:max-h-none pr-1">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-muted-foreground">Total de personas:</span>
                <span className="font-semibold">{totalPersons}</span>
              </div>

              <div className="space-y-2">
                <p className="text-sm sm:text-base font-medium">{"\u00bfPara d\u00f3nde ser\u00eda el delivery?"}</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryZone("serena")}
                    className={`rounded-lg border px-3 py-3 text-sm font-semibold transition-colors ${
                      deliveryZone === "serena" ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50"
                    }`}
                    aria-pressed={deliveryZone === "serena"}
                  >
                    <span className="block text-left">{deliveryOptions.serena.label}</span>
                    <span className="block text-xs font-normal text-muted-foreground">
                      {`$${deliveryOptions.serena.fee.toLocaleString()} delivery`}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryZone("coquimbo")}
                    className={`rounded-lg border px-3 py-3 text-sm font-semibold transition-colors ${
                      deliveryZone === "coquimbo" ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50"
                    }`}
                    aria-pressed={deliveryZone === "coquimbo"}
                  >
                    <span className="block text-left">{deliveryOptions.coquimbo.label}</span>
                    <span className="block text-xs font-normal text-muted-foreground">
                      {`$${deliveryOptions.coquimbo.fee.toLocaleString()} delivery`}
                    </span>
                  </button>
                </div>
              </div>

              {totalPersons < 4 && (
                <div className="bg-accent/20 border border-accent rounded-lg p-3">
                  <p className="text-xs sm:text-sm text-accent-foreground text-center font-medium">
                    {"Sabias? Pedido minimo para 4 personas"}
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
                  <span>Costo delivery:</span>
                  <span className="font-semibold text-foreground">{displayDeliveryCost}</span>
                </div>
                <div className="flex justify-between text-lg sm:text-xl font-bold items-end text-emerald-600">
                  <span className="text-foreground">{summaryLabel}</span>
                  <span className="text-2xl sm:text-3xl">{summaryTotalDisplay}</span>
                </div>
                {deliveryZone && (
                  <p className="text-xs text-muted-foreground text-right">Incluye costo de delivery seleccionado</p>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-1 sm:pt-2">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsCartOpen(false)}
                className="w-full py-5 sm:py-6 text-base sm:text-lg font-semibold"
              >
                Seguir comprando
              </Button>

              <Button
                onClick={sendToWhatsApp}
                disabled={totalPersons < 4 || !deliveryZone}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-base sm:text-lg py-5 sm:py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                >
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.63.86 5.08 2.322 7.08L4.276 29l7.144-2.086A11.924 11.924 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.4a9.36 9.36 0 0 1-4.77-1.31l-.343-.204-4.237 1.238 1.303-4.132-.222-.338A9.322 9.322 0 0 1 6.6 15c0-5.166 4.234-9.4 9.4-9.4s9.4 4.234 9.4 9.4-4.234 9.4-9.4 9.4zm5.414-7.027c-.295-.147-1.742-.86-2.012-.958-.27-.098-.467-.147-.664.147-.197.295-.761.958-.932 1.155-.17.197-.343.221-.637.074-.295-.147-1.242-.458-2.366-1.46-.874-.78-1.462-1.744-1.635-2.038-.17-.295-.018-.454.13-.6.134-.133.295-.343.443-.514.147-.17.197-.295.295-.492.098-.197.049-.369-.025-.516-.074-.147-.664-1.603-.91-2.194-.24-.576-.485-.498-.664-.507-.17-.009-.369-.011-.566-.011-.197 0-.516.074-.787.369-.27.295-1.03 1.007-1.03 2.459 0 1.452 1.055 2.853 1.202 3.048.147.197 2.077 3.177 5.036 4.455.704.303 1.253.484 1.681.62.705.224 1.344.192 1.85.116.564-.084 1.742-.71 1.988-1.394.245-.684.245-1.27.171-1.394-.074-.124-.27-.197-.566-.344z" />
                </svg>
                Enviar pedido por WhatsApp
              </Button>

              <button
                onClick={clearCart}
                className="w-full text-destructive hover:bg-destructive/10 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                Vaciar Carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

