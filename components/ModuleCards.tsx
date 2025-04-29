import React from "react";
import { Card } from "./ui/card";
import {
  Lightbulb,
  CheckCircle,
  Hammer,
  Rocket,
  TrendingUp,
  ToyBrick,
} from "lucide-react";
import { LaunchwellRocket } from "./icons/LaunchwellRocket";
import { RocketFill } from "./icons/RocketFill";

interface ModuleCardProps {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

const ModuleCard = ({ icon, title, description }: ModuleCardProps) => {
  return (
    <Card className="bg-[#FAFAFA] border border-soft-gray rounded-lg p-6 flex flex-col h-full">
      <div className="flex flex-row mb-auto gap-4 items-center">
        <div className="w-12 h-12 flex items-center justify-center">{icon}</div>
        <h3 className="text-2xl font-bold text-[#E50914]">{title}</h3>
      </div>
      <div>
        <p className="mb-4">{description}</p>
      </div>
    </Card>
  );
};

export default function ModuleCards() {
  const modules = [
    {
      title: "Ideate",
      description: (
        <>
          Start with clarity—not chaos. Launchwell helps you shape raw ideas
          into sharp, testable startup concepts. Prioritize the right problem,
          map your customer, and get your first unfair advantage—
          <strong>before you waste a minute building the wrong thing</strong>.
        </>
      ),
      icon: <Lightbulb className="w-12 h-12 text-[#E50914]" />,
    },
    {
      title: "Validate",
      description: (
        <>
          Prove it before you build it. Launchwell lets you run real tests,
          capture live demand, and generate startup-grade signal—before a single
          line of code. Whether you’re pitching investors or scanning for
          traction, this is where the serious founders separate from the wishful
          thinkers.
        </>
      ),
      icon: <CheckCircle className="w-12 h-12 text-[#E50914]" />,
    },
    {
      title: "Build",
      description: (
        <>
          Ship something that sells. Launchwell turns validated ideas into fast,
          no-bloat MVPs—real prototypes, built with precision. Forget wasted
          sprints. Forget months in Figma. This is the shortest path between
          insight and launch.
        </>
      ),
      icon: <Hammer className="w-12 h-12 text-[#E50914]" />,
    },
    {
      title: "Launch",
      description: (
        <>
          Go to market with signal, not noise. You’ll have the validation, the
          waitlist, and the velocity. Launchwell helps you hit the market with a
          story people already believe—and a product they’ve been waiting for.
        </>
      ),
      icon: <RocketFill className="w-12 h-12 text-[#E50914]" />,
    },
    {
      title: "Scale",
      description: (
        <>
          Scale is where traction turns into takeover. We help you translate
          early wins into repeatable GTM, smart capital, and strategic
          positioning. From product-market fit to investor-fit—this is where
          growth becomes <strong>inevitable</strong>.
        </>
      ),
      icon: <TrendingUp className="w-12 h-12 text-[#E50914]" />,
    },
    {
      title: "Founder Tools",
      description: (
        <>
          Everything serious founders need—none of the fluff. From co-founder
          matching to advisor warm intros, Startup School to your daily
          dashboard, Launchwell gives you the tactical edge to move fast, stay
          aligned, and operate like you’ve done this before. These aren’t hacks.
          These are weapons.
        </>
      ),
      icon: <ToyBrick className="w-12 h-12 text-[#E50914]" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {modules.map((module, idx) => (
        <ModuleCard
          key={idx}
          title={module.title}
          description={module.description}
          icon={module.icon}
        />
      ))}
    </div>
  );
}
