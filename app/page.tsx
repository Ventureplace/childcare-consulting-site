import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Family Childcare Consulting for Children with Special Needs",
    "description": "Expert family childcare consulting specializing in special needs children. Early intervention strategies, social emotional development, speech & language support, behavior intervention, early math & literacy, and sensory processing guidance.",
    "telephone": "925-428-1624",
    "email": "exceptionalchildrenfcc@gmail.com",
    "serviceArea": "Nationwide",
    "hasOfferingCatalog": {
      "@type": "OfferingCatalog",
      "name": "Family Childcare Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Early Intervention Strategies",
            "description": "Evidence-based early intervention strategies tailored for family childcare settings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Emotional Development",
            "description": "Comprehensive social emotional learning programs for children with special needs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Speech and Language Support",
            "description": "Specialized speech and language development strategies for family childcare providers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Behavior Intervention Support",
            "description": "Positive behavior intervention and support strategies for family childcare settings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Early Math and Literacy",
            "description": "Developmentally appropriate early math and literacy interventions for children with special needs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sensory Processing Support",
            "description": "Comprehensive sensory processing strategies for children with sensory needs"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  )
}
