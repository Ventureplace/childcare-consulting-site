import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, MessageCircle, Users, BookOpen, Hand, Lightbulb } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "Early Intervention Strategies",
      description: "Early intervention strategies tailored for family childcare settings. We help providers identify developmental delays early and implement targeted interventions that support children's growth during critical early years.",
      features: [
        "Developmental milestone tracking and assessment",
        "Individualized intervention planning",
        "Progress monitoring and data collection",
        "Family-centered approach integration",
        "Transition planning support"
      ]
    },
    {
      icon: Users,
      title: "Social Emotional Development",
      description: "Support with Social Emotional Development, Implement self-regulation strategies as children learn through play. Build emotional intelligence and social skills through structured activities and supportive interactions.",
      features: [
        "Emotion recognition and regulation techniques",
        "Social skills development activities",
        "Attachment and relationship building"
      ]
    },
    {
      icon: MessageCircle,
      title: "Speech and Language Support",
      description: "Specialized speech and language development strategies for family childcare providers. Learn to support communication milestones and create language-rich environments that foster communication growth.",
      features: [
        "Language milestone development tracking",
        "Communication enhancement activities"
      ]
    },
    {
      icon: BookOpen,
      title: "Early Math and Literacy",
      description: "Developmentally appropriate early math and literacy interventions for children with special needs. Create engaging learning experiences that build foundational academic skills through play-based and multi-sensory approaches.",
      features: [
        "Pre-literacy skill development",
        "Number sense and counting activities",
        "Adaptive learning materials and tools",
        "Multi-sensory learning approaches",
        "Progress tracking and assessment"
      ]
    },
    {
      icon: Hand,
      title: "Sensory Processing Support",
      description: "Comprehensive sensory processing strategies for children with sensory needs in family childcare environments. Learn to identify sensory challenges and implement accommodations that help children regulate and participate fully.",
      features: [
        "Environmental accommodations",
        "Sensory-friendly activity planning"
      ]
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Specialized Family Childcare Consulting Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support for family childcare providers caring for children with special needs. Our expert consulting covers important aspects of early child development to ensure that each child reaches their full potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-serif mb-2">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground mb-2">Key Services Include:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <div className="bg-card rounded-lg p-8">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Ready to Transform Your Family Childcare Program?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get expert guidance tailored to your specific needs and the children in your care. Our consulting services help you create an inclusive, supportive environment where every child can thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More About Our Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}