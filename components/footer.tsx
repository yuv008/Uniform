import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-8">
          <div className="bg-primary text-primary-foreground p-3 rounded-full mb-2 inline-block">
            <span className="font-serif text-2xl tracking-wide">MF</span>
          </div>
          <div className="font-serif text-2xl font-bold text-foreground mb-1">Manali Fashion</div>
          <div className="text-muted-foreground font-sans text-sm mb-2">School Uniform Specialists</div>
          <div className="text-foreground font-sans text-base max-w-xl mx-auto mb-2">
            Premium quality school uniforms manufactured with precision and care. Serving educational institutions across Maharashtra since 2008.
          </div>
        </div>
        <div className="text-muted-foreground font-sans text-sm mb-6">
          Kalyan Nagar, Parbhani, Maharashtra 431401, India<br />
          +91-9422705120 &nbsp;|&nbsp; manali.fashion2004@gmail.com
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground text-xs mb-2">
          <span>© {new Date().getFullYear()} Manali Fashion. All rights reserved.</span>
          <span className="hidden md:inline">|</span>
          <Link href="/privacy" className="hover:text-primary transition">Privacy Policy</Link>
          <span className="hidden md:inline">|</span>
          <Link href="/terms" className="hover:text-primary transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
