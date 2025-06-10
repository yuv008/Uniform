import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-background">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/vid1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg relative z-10">
          Tailored Excellence<br />in School Uniforms
        </h1>
        <p className="font-sans text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto relative z-10">
          Premium quality, timeless style, and comfort for every student. Serving Maharashtra's leading institutions with distinction.
        </p>
        <Button size="lg" className="bg-white text-primary font-sans uppercase tracking-widest px-10 py-4 rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition relative z-10">
          Get Instant Quote
        </Button>
      </div>
    </section>
  )
}
