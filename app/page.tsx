import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Linkedin,
  Rocket,
  Instagram,
  Database,
  Lightbulb,
  CheckCircle,
  Hammer,
  TrendingUp,
} from "lucide-react";
import { XIcon } from "@/components/icons/XIcon";
import ModuleCards from "@/components/ModuleCards";
import { ScrollToWaitlistButton } from "@/components/ScrollToWaitlistButton";
import Waitlist from "@/components/Waitlist";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="mx-auto flex w-full items-center justify-between p-4 px-3 lg:px-4">
        <span className="text-xl font-bold text-[#E50914]">Launchwell</span>
      </header>

      <main className="min-h-screen p-4 md:p-8">
        <section className="py-32" id="waitlist-section">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-6xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Ideate, Validate, Build,{" "}
                <span className="underline decoration-[#E50914] decoration-4 font-bold inline-flex items-center gap-2">
                  <Rocket className="h-12 w-12 text-[#E50914]" />
                  Launch
                </span>
                , Scale.
              </h1>
              <p className="mb-10 text-xl text-[#121212]">
                Launchwell helps anyone turn ideas into investor-ready startups.
                From idea to capital—all in one streamlined, AI-powered
                platform.
              </p>
              <Waitlist />
            </div>
          </div>
        </section>
        <div className="container mx-auto">
          <ModuleCards />
        </div>
      </main>

      {/* Bento Cards Section */}
      {/* <section className="flex flex-col mx-auto items-center justify-center py-2 gap-4">
        <div className="container px-4 md:px-6 flex flex-row items-center gap-4">
          <BentoCard
            title="Ideate"
            description="Start with clarity—not chaos. Launchwell helps you shape raw ideas into sharp, testable startup concepts. Prioritize the right problem, map your customer, and get your first unfair advantage—before you waste a minute building the wrong thing."
            features={[]}
            icon={<Lightbulb className="w-16 h-16 text-[#E50914]" />}
          />
          <BentoCard
            title="Validate"
            description="Prove it before you build it. Launchwell lets you run real tests, capture live demand, and generate startup-grade signal—before a single line of code. Whether you’re pitching investors or scanning for traction, this is where the serious founders separate from the wishful thinkers.
"
            features={[]}
            icon={<CheckCircle className="w-16 h-16 text-[#E50914]" />}
          />
        </div>
        <div className="container px-4 md:px-6 flex flex-row items-center gap-4">
          <BentoCard
            title="Build"
            description="Ship something that sells. Launchwell turns validated ideas into fast, no-bloat MVPs—real prototypes, built with precision. Forget wasted sprints. Forget months in Figma. This is the shortest path between insight and launch."
            features={[]}
            icon={<Hammer className="w-16 h-16 text-[#E50914]" />}
          />
          <BentoCard
            title="Launch"
            description="Go to market with signal, not noise. You’ll have the validation, the waitlist, and the velocity. Launchwell helps you hit the market with a story people already believe—and a product they’ve been waiting for."
            features={[]}
            icon={<Rocket className="w-16 h-16 text-[#E50914]" />}
          />
        </div>
        <div className="px-4 items-center gap-8">
          <BentoCard
            title="Scale"
            description="Scale is where traction turns into takeover. We help you translate early wins into repeatable GTM, smart capital, and strategic positioning. From product-market fit to investor-fit—this is where growth becomes inevitable."
            features={[]}
            icon={<TrendingUp className="w-16 h-16 text-[#E50914]" />}
          />
        </div>
      </section> */}

      <section className="flex flex-1 items-center justify-center mt-12 mb-6">
        <div className="container px-4 md:px-6">
          <div className="mx-auto relative flex flex-col items-center">
            <h2 className="text-4xl font-bold mb-4 max-w-4xl text-center">
              No fuzz. No noise. Focus on your idea.
            </h2>
            <ScrollToWaitlistButton>Put me on the List</ScrollToWaitlistButton>
          </div>
        </div>
      </section>

      <footer>
        <div className="w-full border-t border-border/50 my-8" />
        <div className="container mx-auto px-4 py-8 md:px-6 md:py-12 flex flex-col items-center justify-center text-center">
          <div className="space-y-4 max-w-xl mx-auto">
            <h3 className="text-lg font-bold text-[#E50914]">Stay in Touch</h3>
            {/* <p className="text-sm text-[#121212]/70">
              Execution is now a system, not a personality trait. Or maybe
              something more towards socials. Maybe leave out entirely?
            </p> */}
            <div className="flex space-x-4 justify-center">
              <Link href="#" className="text-[#121212]/70 hover:text-[#E50914]">
                <XIcon className="h-5 w-5" />
                <span className="sr-only">X</span>
              </Link>
              <Link href="#" className="text-[#121212]/70 hover:text-[#E50914]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-[#121212]/70 hover:text-[#E50914]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="m-2 border-t border-[#EDEDED]/10 pt-6 text-center text-sm text-[#121212]/60">
            <p>
              {new Date().getFullYear()} Launchwell. &copy; All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
