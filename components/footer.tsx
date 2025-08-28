import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 border-t border-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif font-bold text-primary mb-4">
              Exceptional Children Family Childcare Consultant
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Dedicated to supporting home daycare providers in creating inclusive, nurturing environments for all
              children, including those with special needs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>exceptionalchildrenfcc@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>925-428-1624</span>
              </div>


            </div>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Consulting
              </li>
              <li className="text-muted-foreground">
                Training Programs
              </li>
              <li className="text-muted-foreground">
                Resources
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Exceptional Children Family Childcare Consultant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
