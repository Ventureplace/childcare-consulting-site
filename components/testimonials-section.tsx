import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Daycare Provider",
      content:
        "The training I received completely transformed how I approach caring for children with special needs. I feel so much more confident and prepared now.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "Family Childcare Owner",
      content:
        "The early intervention strategies have made such a difference for the children in my program. Parents are amazed at the progress their kids are making.",
      rating: 5,
    },
    {
      name: "Jennifer Chen",
      role: "Licensed Daycare Provider",
      content:
        "Having access to expert consulting has been invaluable. The personalized guidance helped me create an inclusive environment that works for everyone.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">What Providers Are Saying</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from home daycare providers who have transformed their programs with our support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
