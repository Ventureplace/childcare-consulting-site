import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, MessageCircle, Users, Hand } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-card to-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Family Childcare Consulting for Providers Caring for Children with Special Needs
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert early intervention strategies, social emotional development, speech & language support, behavior intervention, early math & literacy, and sensory processing guidance for family childcare providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resources">Explore Resources</Link>
            </Button>
          </div>
        </div>

        {/* Service Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">Early Intervention</h3>
              <p className="text-muted-foreground text-sm">
                Evidence-based early intervention strategies tailored for family childcare settings.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">Social Emotional Development</h3>
              <p className="text-muted-foreground text-sm">
                Build emotional intelligence and social skills through structured activities and support.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">Speech & Language</h3>
              <p className="text-muted-foreground text-sm">
                Support communication milestones and create language-enriched learning environments.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hand className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">Sensory Processing</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive sensory processing strategies for children with sensory needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
