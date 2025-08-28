import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-b from-card to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground">
                My journey in early childhood education and special needs support
              </p>
            </div>

            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="lg:w-1/3">
                    <Image
                      src="/IMG_1967.jpeg"
                      alt="Professional headshot"
                      width={300}
                      height={400}
                      className="rounded-lg shadow-lg object-cover w-full"
                    />
                  </div>
                  <div className="lg:w-2/3">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                      My Story
                    </h2>
                
                <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6">
                  <p>
                    Person before disability was embedded into me years before earning my degrees in Early Childhood Education & Early Childhood Special Education. I was just 12 years old when I began babysitting children with special needs. At that time, I knew the kiddos for who they were, and as a child myself never saw the disability before the person. It is safe to say that Inclusion took hold of me before it became a popular educational term.
                  </p>
                  
                  <p>
                    Later when my own children were born, I began to volunteer at their school serving as the PTA President. One day, the Principal said, &ldquo;Would you like to work in the classroom supporting children with special needs?&rdquo; That was the beginning of my educational career which has now reached its 17th year!
                  </p>
                  
                  <p>
                    I have served as a Paraprofessional, 1:1 Classroom Aide, Special Education Teacher, Family Childcare Provider, Teacher Assistant in the English Department Junior College supporting recently graduated high school students with writing essays: many of whom had former IEPs, Early Interventionist, Inclusion Specialist and Inclusion Manager, having earned an Associate of Science Education, Bachelor of Arts Liberal Studies with a concentration in Teacher Education, and of course a Master of Education in ECE and ECSE.
                  </p>
                  
                  <p>
                    My goal is to continue this journey as it shifts fully towards supporting Early Childhood Educators as this is where the true work begins. I did not recognize it before as I was blessed to be a part of so many aspects of education. Yet I realized that birth through 5 is the most important and impressionable time for young children&apos;s development. There is still a huge gap in this area and I intend to support as many Early Childhood Educators and Families with closing this gap. I am returning to my roots!
                  </p>
                </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                    Education & Experience
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Master of Education in Early Childhood Education & Early Childhood Special Education</li>
                    <li>• Bachelor of Arts Liberal Studies with concentration in Teacher Education</li>
                    <li>• Associate of Science Education</li>
                    <li>• 17+ years of experience in education and special needs support</li>
                    <li>• Roles spanning from Paraprofessional to Inclusion Manager</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Ready to transform your family childcare program with inclusive practices?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Learn About Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}