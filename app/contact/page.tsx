import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-b from-card to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to get started? Reach out to schedule your consultation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                    Schedule a Consultation
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Online Booking</p>
                        <Link href="https://calendar.app.google/7CyUBoFrvGkEnTrB9" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          Book directly online
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <a href="tel:925-428-1624" className="text-muted-foreground hover:text-primary transition-colors">
                          925-428-1624
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a href="mailto:exceptionalchildrenfcc@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                          exceptionalchildrenfcc@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Button size="lg" asChild className="w-full">
                      <Link href="https://calendar.app.google/7CyUBoFrvGkEnTrB9" target="_blank" rel="noopener noreferrer">
                        Schedule Online Now
                      </Link>
                    </Button>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Multiple ways to connect:</strong> Use the online booking for instant scheduling, or reach out by email or phone to discuss your specific needs first.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                    What to Expect
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Initial Consultation</h3>
                        <p className="text-sm text-muted-foreground">We'll discuss your specific needs and current challenges</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Customized Plan</h3>
                        <p className="text-sm text-muted-foreground">Receive a tailored approach for your childcare program</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Ongoing Support</h3>
                        <p className="text-sm text-muted-foreground">Continued guidance as you implement new strategies</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}